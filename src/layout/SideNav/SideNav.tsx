import { Layout, Menu } from 'antd';
import type { SelectInfo } from 'rc-menu/lib/interface';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import paths from '@/router/paths';

import s from './SideNav.module.css';

export const SideNav = React.memo(function SideNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [basePath, selectedSubmenuPath] = pathname.split('/');

  const handleMenu = ({ key }: SelectInfo) => {
    navigate(key);
  };

  return (
    <Layout.Sider width={320} breakpoint='lg' collapsedWidth='0'>
      <a className={s.Logo} href='/' style={{ fontWeight: 'bold' }}>
        Users crud
      </a>
      <nav className={s.SideNav}>
        <Menu
          onSelect={handleMenu}
          mode='inline'
          defaultOpenKeys={[selectedSubmenuPath]}
          selectedKeys={[[basePath, selectedSubmenuPath].join('/')]}
          items={[
            {
              label: 'Users',
              key: paths.users,
            },
          ]}
        />
      </nav>
    </Layout.Sider>
  );
});
