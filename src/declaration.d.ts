declare module '*.module.css';
declare module '*.mp4';
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module 'react-copy-to-clipboard';
declare module 'react-input-mask';
declare module 'node-forge';

declare module '*.svg?react' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnvironment {
  readonly APP_BASE_URL: string;
  readonly APP_TITLE: string;
  readonly APP_DESCRIPTION: string;
  readonly APP_ONE_ID_URL: string;
  readonly APP_YANDEX_API_KEY: string;
  readonly MODE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnvironment;
}
