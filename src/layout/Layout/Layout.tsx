import { Layout as AntdLayout } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '@/components/Loader';
import { Header } from '@/layout/Header';
import { SideNav } from '@/layout/SideNav';

import s from './Layout.module.css';

export const Layout = () => {
  return (
    <AntdLayout className={s.Layout}>
      <SideNav />
      <AntdLayout>
        <Header />
        <AntdLayout.Content>
          <div className={s.Main}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </AntdLayout.Content>
      </AntdLayout>
    </AntdLayout>
  );
};
