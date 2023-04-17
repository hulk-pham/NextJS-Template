type EnvConfig = {
  apiBaseUrl: string
}

const envConfig: EnvConfig = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || ''
}

export default envConfig
