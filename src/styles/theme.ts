import { type ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  components: {
    Layout: {
      bodyBg: 'var(--color-main-bg)',
      siderBg: 'var(--color-aside-bg)',
      headerBg: 'var(--color-header-bg)',
      colorPrimary: 'var(--color-primary)',
    },
    Menu: {
      colorBgContainer: 'transparent',
      lineWidth: 0,
      itemSelectedColor: 'var(--selected-menu-item-text-color)', // selected menu text color
      itemSelectedBg: 'var(--selected-menu-item-bg)',
      itemBg: 'var(--menu-item-bg)',
      subMenuItemBg: 'var(--submenu-item-bg)',
      fontSize: 16,
    },
    Avatar: {
      colorPrimary: 'var(--color-primary)',
    },
  },
  token: {
    fontFamily: 'Inter',
    colorPrimary: '#7623BE',
  },
};
