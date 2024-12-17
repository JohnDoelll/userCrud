import { Button, type ButtonProps } from 'antd';
import { Link, type LinkProps } from 'react-router-dom';

interface LinkButtonProps extends ButtonProps {
  to: LinkProps['to'];
}

export const LinkButton = ({ children, to, ...rest }: LinkButtonProps) => {
  return (
    <Link to={to}>
      <Button {...rest}>{children}</Button>
    </Link>
  );
};
