import React from 'react';
import { Box, createStyles, Text } from '@mantine/core';
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { fetchNui } from '../../utils/fetchNui';
import ScaleFade from '../../transitions/ScaleFade';
import type { ProgressbarProps } from '../../typings';

const useStyles = createStyles((theme, { variant }: { variant: 'filled' | 'light' | 'outline' }) => ({
  container: {
    //transform: "perspective(500px) rotateX(10deg)",
    width: 350,
    height: 45,
    borderRadius: theme.radius.lg,
    backgroundColor: variant === 'filled' ? theme.colors.dark[6] : 'rgba(0, 0, 0, 0.4)',
    border: variant === 'outline' ? `2px solid ${theme.colors.dark[4]}` : 'none',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
    height: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
  },
  bar: {
    height: '100%',
    backgroundColor: variant === 'light' ? theme.colors.cyan[7] : theme.colors.cyan[7],
    transition: 'width linear',
  },
  labelWrapper: {
    position: 'absolute',
    display: 'flex',
    width: 350,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    maxWidth: 350,
    padding: 8,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: 18,
    fontWeight: 600,
    color: theme.colors.cyan[1],
  },
}));

const Progressbar: React.FC<{ variant?: 'filled' | 'light' | 'outline' }> = ({ variant = 'outline' }) => {
  const { classes } = useStyles({ variant });
  const [visible, setVisible] = React.useState(false);
  const [label, setLabel] = React.useState('');
  const [duration, setDuration] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  useNuiEvent('progressCancel', () => setVisible(false));

  useNuiEvent<ProgressbarProps>('progress', (data) => {
    setVisible(true);
    setLabel(data.label);
    setDuration(data.duration);
    setProgress(0);
    
    const interval = 10;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += interval;
      setProgress(Math.min(100, (elapsed / data.duration) * 100));
      if (elapsed >= data.duration) {
        clearInterval(timer);
        setVisible(false);
      }
    }, interval);
  });

  return (
    <Box className={classes.wrapper}>
      <ScaleFade visible={visible} onExitComplete={() => fetchNui('progressComplete')}>
        <Box className={classes.container}>
          <Box className={classes.bar} sx={{ width: `${progress}%` }} />
          <Box className={classes.labelWrapper}>
            <Text className={classes.label}>{label}</Text>
          </Box>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default Progressbar;
