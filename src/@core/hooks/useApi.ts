import { useEffect } from 'react'
import { useStoreDispatch, useStoreSelector } from 'src/@core/store/hooks'
import useSWR from 'swr'
import { axiosInstance } from 'src/@core/utils/axios'

const fetcher = (url: string) => axiosInstance.get(url).then(res => res.data)

export function useAPI<T>({ url }: { url: string }) {
  return useSWR<T, Error>(url, fetcher)
}

export function useAPISyncStore<T>({ url, getSelector, setAction }: { url: string; getSelector: any; setAction: any }) {
  const { data, isLoading, error } = useSWR<T, Error>(url, fetcher)
  const storeData = useStoreSelector<T>(getSelector)
  const dispatch = useStoreDispatch()

  useEffect(() => {
    if (dispatch && setAction) {
      if (data) {
        dispatch(setAction(data))
      }
      if (error) {
        dispatch(setAction(data))
      }
    }
  }, [data, error, dispatch, setAction])

  return {
    data: storeData,
    isLoading,
    error
  }
}
