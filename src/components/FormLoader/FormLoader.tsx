import { Spin, type SpinProps } from 'antd';

export const FormLoader = ({ children, ...props }: SpinProps) => {
  return <Spin {...props}>{children}</Spin>;
};
