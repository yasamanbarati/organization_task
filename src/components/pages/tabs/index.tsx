import { AppBar, Box, styled, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { TabsPanel } from "./tabs_panel";

const TabsBox = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.violet.main,
  borderTop: '1px solid #353875',
  "& .MuiTab-root": {
    color: theme.palette.white,
  },
  "& .MuiTab-root.Mui-selected": {
    color: theme.palette.white,
  },
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.violet.light,
    height: '3px',
  },
}))

export const TabsSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const TabsIndexProps = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  return <>
    <AppBar position="static">
      <TabsBox
        value={value}
        indicatorColor="secondary"
        onChange={handleChange}
        variant="fullWidth"
        aria-label="pages tabs"
      >
        <Tab label="کاربرها" {...TabsIndexProps(0)} />
        <Tab label="کانال ها" {...TabsIndexProps(1)} />
        <Tab label="گروه ها" {...TabsIndexProps(2)} />
      </TabsBox>
    </AppBar>
    <TabsPanel
      value={value}
      index={value}
      avatar="https://reqres.in/img/faces/1-image.jpg"
      subheader="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
      title="کانال سراسری"
      messageCount={3}
    />
    {/* <TabsPanel
      value={value}
      index={value}
      avatar="https://reqres.in/img/faces/1-image.jpg"
      subheader="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
      title="کانال سراسری"
      messageCount={3}
    /> */}
  </>
}

