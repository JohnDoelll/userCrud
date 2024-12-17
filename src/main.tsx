import './global.css';
import '@/styles/overrides.css';

import { App as AntdApp, ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';

import { App } from '@/providers/App';
import { AuthProvider } from '@/providers/AuthProvider';
import { theme } from '@/styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={theme}>
    <AntdApp>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AntdApp>
  </ConfigProvider>,
);
