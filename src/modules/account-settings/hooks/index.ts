import { SyntheticEvent, useState } from 'react'

const useAccountSettingHook = () => {
  const [value, setValue] = useState<string>('account')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return {
    value,
    handleChange
  }
}

export default useAccountSettingHook
