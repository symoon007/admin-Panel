import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import TabPanel from "../../components/TabPanel";
import OverviewChart from "./OverviewChart";
import TopVideoList from "./TopVideoList";
import RealTimeChart from "./RealTimeChart";
import LatestVideoCard from "../../components/LatestVideoCard";

const Analytics = () => {
 
  const [value, setValue] = useState(0);

  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        Analytics
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChanges}>
          <Tab label="Overview" id="tab-0" />
          <Tab label="Content" id="tab-1" />
          <Tab label="Audience" id="tab-2" />
          <Tab label="Revenue" id="tab-3" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={styles.overviewContainer}>
          <Box sx={styles.statsContainer}>
            <Typography variant="h5">
              Your channel got{" "}
              <span style={{ fontWeight: "bold" }}>65,421</span> views in last
              28 days
            </Typography>
            <OverviewChart />
            <Divider sx={styles.divider} />
            <TopVideoList heading="Your content in this period" />
          </Box>
          <Box>
            <RealTimeChart />
            <LatestVideoCard />
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TopVideoList heading="Content Table" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Audience</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Revenue</Typography>
      </TabPanel>
    </Box>
  );
}

export default Analytics;

/*** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
  overviewContainer: {
    display: "grid",
    gridTemplateColumns: {'md': '1fr', 'lg': '1fr 300px'},
    gap: 2,
    justifyContent: 'center',
  },
  statsContainer: {
    bgcolor: 'neutral.light',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  divider: {
    my: 4
  }
}