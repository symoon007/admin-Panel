/* eslint-disable react/display-name */
import { Box, Tab, Tabs } from "@mui/material";
import  { forwardRef, useState } from 'react'
import AnalyticsTabsHead from './AnalyticsTabsHead';
import { ArrowDropDownCircleSharp, CheckCircleRounded } from '@mui/icons-material';
import TabPanel from "../../components/TabPanel";
import { Line } from "react-chartjs-2";
import { getMainChartData, mainChartOptions } from "./ChartConfigs";

const ViewsTabHead = forwardRef((props, ref) => <AnalyticsTabsHead {...props}
title='Views'
icon={<ArrowDropDownCircleSharp/>}
value= '65.4K'
subtitle={'700 less than usual'}
/> );

const WatchTimeHead = forwardRef((props, ref) => (
  <AnalyticsTabsHead
    {...props}
    title="Watch Time"
    icon={<ArrowDropDownCircleSharp color="green" sx={{transform:'rotate(180deg)'}} />}
    value="400"
    subtitle={"224 more than usual"}
  />
));

const SubscribersTabHead = forwardRef((props, ref) => (
  <AnalyticsTabsHead
    {...props}
    title="Subscribers"
    icon={
      <CheckCircleRounded
        color="green"
       
      />
    }
    value="+955"
    subtitle={"about the same as usual"}
  />
));

const RevenueTabHead = forwardRef((props, ref) => (
  <AnalyticsTabsHead
    {...props}
    title="Subscribers"
    icon={
      <ArrowDropDownCircleSharp
        color="green"
        sx={{ transform: "rotate(180deg)" }}
      />
    }
    value="$351.23"
    subtitle={"120 more than usual"}
  />
));


const OverviewChart = () => {
    const [value, setValue]  = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
  return (
    <Box sx={styles.container}>
      <Tabs value={value} onChange={handleChange}>
        <Tab component={ViewsTabHead} id="tab-0" />
        <Tab component={WatchTimeHead} id="tab-1" />
        <Tab component={SubscribersTabHead} id="tab-2" />
        <Tab component={RevenueTabHead} id="tab-3" />
      </Tabs>
      <TabPanel value={value} index={0} mt={0}>
        <Box sx={styles.mainChart}>
          <Line options={mainChartOptions} data={getMainChartData()} />
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1} mt={0}>
        <Box sx={styles.mainChart}>
          <Line options={mainChartOptions} data={getMainChartData()} />
        </Box>
      </TabPanel>

      <TabPanel value={value} index={2} mt={0}>
        <Box sx={styles.mainChart}>
          <Line options={mainChartOptions} data={getMainChartData()} />
        </Box>
      </TabPanel>

      <TabPanel value={value} index={3} mt={0}>
        <Box sx={styles.mainChart}>
          <Line options={mainChartOptions} data={getMainChartData()} />
        </Box>
      </TabPanel>
    </Box>
  );
}

export default OverviewChart

const styles = {
  container: {
   mt: 4,
   width: '100%',
  },
  mainChart: {
    height: 250,
      border: 1,
      borderColor: 'neutral.medium',
      pt: 4,
      borderTop: 'none',
      borderRadius: 1,
  }
};