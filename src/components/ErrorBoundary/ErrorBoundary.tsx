import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';

import error_500 from '@/assets/icons/server-error.svg';
import paths from '@/router/paths';

import s from './ErrorBoundary.module.css';

export const ErrorBoundary = () => {
  return (
    <div className={s.ErrorBoundary}>
      <Space
        direction='vertical'
        size='large'
        align={'center'}
        style={{ padding: '1rem', textAlign: 'center' }}
      >
        <h1>Oops!</h1>
        <p>Server bilan xatolik bor. Keyinroq harakat qilib ko’ring.</p>
        <Link to={paths.home}>
          <Button type='primary'>Bosh sahifaga qaytish</Button>
        </Link>
        <img src={error_500} alt='error-404' />
      </Space>
    </div>
  );
};
