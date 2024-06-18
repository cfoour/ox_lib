import { Button, createStyles } from '@mantine/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import LibIcon from '../../../../components/LibIcon';

interface Props {
  icon: IconProp;
  canClose?: boolean;
  iconSize: number;
  handleClick: () => void;
}

const useStyles = createStyles((theme, params: { canClose?: boolean }) => ({
  button: {
    borderRadius: 4,
    flex: '1 15%',
    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    alignSelf: 'stretch',
    height: 'auto',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.dark[6],
    padding: 2,
  },
  root: {
    border: 'none',
  },
  label: {
    color:'#FA5252',
  },
}));

const HeaderButton: React.FC<Props> = ({ icon, canClose, iconSize, handleClick }) => {
  const { classes } = useStyles({ canClose });

  return (
    <Button
      variant="default"
      className={classes.button}
      classNames={{ label: classes.label, root: classes.root }}
      disabled={canClose === false}
      onClick={handleClick}
    >
      <LibIcon icon={icon} fontSize={iconSize} fixedWidth />
    </Button>
  );
};

export default HeaderButton;
