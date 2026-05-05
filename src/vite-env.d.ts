/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ADSENSE_SLOT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}
