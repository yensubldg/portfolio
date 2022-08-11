/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DB_PASSWORD: string;
  readonly WORDPRESS_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
