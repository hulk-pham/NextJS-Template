import { resources, defaultNS } from './index'

import en from './resources/en.lang'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: typeof resources['en']
  }
}

export type TranslationJsonType = typeof en
