import { dispatch } from '@/setup/redux/store'
import { setUsersDataAction } from '@/_slice/home.slice'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url: string) => axios.get(url).then(res => res.data.data)

export const getHomePageData = () => {
  const { data } = useSWR('https://reqres.in/api/users?page=1', fetcher)
  if (data) {
    dispatch(setUsersDataAction(data))
  }
}

export const initializeAppData = () => {
  getHomePageData()
}
