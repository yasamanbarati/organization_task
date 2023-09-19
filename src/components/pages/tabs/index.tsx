import { useState } from "react"
import useSWR from "swr"
import axios from "axios"
import { AppBar, styled, Tab, Tabs } from "@mui/material"
import { useAppSelector } from "@/setup/redux/react-hooks"
import InfiniteScroll from "react-infinite-scroll-component"
import { TabCard } from "./tabs_panel/tab_card"
import { TabsPanel } from "./tabs_panel"


const TabsBox = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.violet.main,
  borderTop: "1px solid #353875",
  "& .MuiTab-root": {
    color: theme.palette.white,
  },
  "& .MuiTab-root.Mui-selected": {
    color: theme.palette.white,
  },
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.violet.light,
    height: "3px",
  },
}))

const Container = styled("div")({
  height: "calc(100% - 106px)",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "2px",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#CCCCCC",
    borderRadius: "20px",
  },
})

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data)

const TabsIndexProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const TabsSection = () => {
  let data = useAppSelector((state) => state.home.UsersData)
  const [hasMore, setHasMore] = useState(true)
  const [value, setValue] = useState(0)
  const [pageIndex, setPageIndex] = useState(0)
  const [lastMessage, setLastMessage] = useState<string>("")

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const fetchMoreData = () => {
    console.log("vay  as dast in")

    if (data.length >= 500) {
      return
    }
    setTimeout(() => {
      setPageIndex(pageIndex + 1)
      const { newData }: any = useSWR(
        `https://reqres.in/api/users?page=${pageIndex}`,
        fetcher
      )
      data = data.concat(newData)
    }, 500)
  }

  return (
    <>
      <AppBar position="static">
        <TabsBox
          value={value}
          indicatorColor="secondary"
          onChange={handleChange}
          variant="fullWidth"
          aria-label="pages tabs">
          <Tab label="کاربرها" {...TabsIndexProps(0)} />

          <Tab label="کانال ها" {...TabsIndexProps(1)} />

          <Tab label="گروه ها" {...TabsIndexProps(2)} />
        </TabsBox>
      </AppBar>
      <Container>
        <TabsPanel value={value} index={0}>

          <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}>
            {data.length > 0 &&
              data.map((item, index) => {
                return (
                  <TabCard
                    key={index}
                    value={item.id}
                    avatar={item.avatar}
                    title={item.first_name + item.last_name}
                  />
                )
              })}

          </InfiniteScroll>

        </TabsPanel>
      </Container>
    </>
  )
}
