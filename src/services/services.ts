import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export const getHomePageData = () => {
  const { data } = useSWR('https://reqres.in/api/users?page=1', fetcher)
  console.log(data)
}

export const initializeAppData = () => {
  getHomePageData()
}
