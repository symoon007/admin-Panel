import { Box, Card, CardContent, Typography } from "@mui/material";

const LatestVideoCard = (props) => {
  return (
    <Card {...props}>
      <CardContent>
        <Typography variant="cardTitle">Latest Video Performance</Typography>
        <Box sx={styles.latestVideoContainer}>
          <Box
            sx={styles.latestVideoThumbnail}
            component={"img"}
            src=".././assets/thumb-2.jpg"
          />
          <Typography sx={styles.latestVideoTitle}>
            ReactJs Native Basic
          </Typography>
        </Box>
        <Typography variant="h7" sx={styles.LatestVideoTimeLabel}>
          First 6 hours:
        </Typography>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Views</Typography>
          <Typography variant="h7">4.5k</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Watch Time</Typography>
          <Typography variant="h7">240 hours</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Likes</Typography>
          <Typography variant="h7">2245</Typography>
        </Box>
        <Typography sx={styles.cardAction} variant="link">
          GO TO VIDEO ANALYTICS
        </Typography>

        <Typography sx={styles.cardAction} variant="link">
          SEE COMMENTS(11)
        </Typography>
      </CardContent>
    </Card>
  );
};

/*** @type {import("@mui/material").SxProps} */
const styles = {
  latestVideoContainer: {
    width: "100%",
    position: "relative",
  },
  latestVideoThumbnail: {
    width: "100%",
    mt: 1,
    filter: "brightness(20%)",
    display: "block",
  },
  latestVideoTitle: {
    position: "absolute",
    bottom: 0,
    color: "neutral.light",
    left: 0,
    right: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1rem",
    mt: 2,
  },
  latestVideoTimeLabel: {
    color: "neutral.normal",
    mt: 2,
  },
  latestVideoStatsRow: {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
  },
  cardAction: {
    mt: 2,
  },
};

export default LatestVideoCard;
