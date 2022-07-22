import { Button as ButtonP } from '@toptal/picasso';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonP onClick={() => onClick()}>{children}</ButtonP>;
};
