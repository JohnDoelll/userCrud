import { RollbackOutlined } from '@ant-design/icons';
import { Button, type ButtonProps } from 'antd';
import { useNavigate } from 'react-router-dom';

interface IProps extends ButtonProps {
  path?: string;
}
export const BackButton = (props: IProps) => {
  const navigate = useNavigate();

  return (
    <Button
      htmlType='button'
      onClick={() => (props.path ? navigate(props.path) : navigate(-1))}
      icon={<RollbackOutlined />}
      {...props}
    >
      Back
    </Button>
  );
};
