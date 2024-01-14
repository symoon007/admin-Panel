import { Circle } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import ColorText from "../../components/ColorText";
import { Bar } from "react-chartjs-2";
import { realTimeChartData, realTimeChartOptions } from "./ChartConfigs";

const RealTimeChart = () => {
  return (
    <Card sx={styles.realTimeStatsCard}>
      <CardContent>
        <Box>
          <Typography variant="cardTitle">Realtime</Typography>
          <Box sx={styles.updateLiveRow}>
            <Circle sx={styles.dotIcon} />
            <Typography varient="h7">
              <ColorText color="neutral.normal">Updating Live</ColorText>
            </Typography>
          </Box>
          <Divider sx={styles.divider} />
          <Typography varient="" sx={styles.valueText}>
            4,455
          </Typography>
          <Typography varient="h7">
            <ColorText color="neutral.normal">Subscribers</ColorText>
          </Typography>

          <Divider sx={styles.divider} />
          <Typography varient="" sx={styles.valueText}>
            1,524
          </Typography>
          <Typography varient="h7">
            <ColorText color="neutral.normal">Views Last 48 hours</ColorText>
          </Typography>
          <Box sx={styles.realTimeChart}>
            <Bar options={realTimeChartOptions} data={realTimeChartData} />
          </Box>
          <Typography variant="link">See more</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RealTimeChart;

/*** @type {import("@mui/material").SxProps} */
const styles = {
  realTimeStatsCard: {
    mb: 2,
  },
  updateLiveRow: {
    display: "flex",
    alignItems: "center",
  },
  dotIcon: {
    width: 10,
    color: "primary.normal",
    mr: 1,
  },
  divider: {
    my: 2,
  },
  valueText: {
    fontSize: "1.3rem",
    fontWeight: "400",
  },
  realTimeChart: {
    height: 70,
    mt: 4,
  },
};
