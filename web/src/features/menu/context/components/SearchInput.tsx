import { TextInput, createStyles } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ChangeEvent } from 'react';

interface Props {
  icon: IconProp;
  handleChange: (data: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const useStyles = createStyles((theme, params: { canClose?: boolean }) => ({
  button: {
    borderRadius: 4,
    flex: '1 15%',
    alignSelf: 'stretch',
    height: 'auto',
    transform: "perspective(500px) rotateY(-8deg)",
    textAlign: 'center',
    justifyContent: 'center',
    padding: 2,
    backgroundColor: theme.colors.dark[6],
  },
  root: {
    border: 'none',
  },
  label: {
    color: params.canClose === false ? theme.colors.dark[2] : theme.colors.dark[0],
  },
}));

const SearchInput: React.FC<Props> = ({ icon, handleChange, value }) => {
  const { classes } = useStyles({ canClose: false });

  return (
    <TextInput
      value={value}
      icon={<FontAwesomeIcon icon={icon} fontSize={16} fixedWidth />}
      onChange={handleChange}
      placeholder="Search Bar"
      classNames={{ input: classes.root, label: classes.label }}
    />
  );
};

export default SearchInput;
