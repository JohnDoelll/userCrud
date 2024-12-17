import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import React from 'react';

import s from './Header.module.css';

export const Header = React.memo(function Header() {
  return (
    <header className={s.Header}>
      <Space style={{ cursor: 'pointer' }}>
        <h3 style={{ margin: '0' }}>Shodmonov Eldor</h3>
        <Avatar style={{ backgroundColor: 'var(--color-avatar-bg)' }} icon={<UserOutlined />} />
      </Space>
    </header>
  );
});
