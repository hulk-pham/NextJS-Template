type EnvConfig = {
  apiBaseUrl: string
}

const themeConfig: EnvConfig = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || ''
}

export default themeConfig
