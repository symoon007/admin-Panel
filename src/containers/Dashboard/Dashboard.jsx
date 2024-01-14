/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import LatestVideoCard from "../../components/LatestVideoCard";
import ReadMore from "../../components/ReadMore";
import ColorText from "../../components/ColorText";

const Dashboard = () => {
  const postText =
    "Explore the power of React Native in my latest video! 🚀Dive into the world of cross-platform mobile development, discover efficient UI building, and unleash the potential of native performance. Whether you are a beginner or a seasoned developer, join me to elevate your React Native skills. Do not miss out! 🔥 #ReactNative #MobileDevelopment";

  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        Channel Dashboard
      </Typography>
      <Box sx={styles.columnsContainer}>
        <LatestVideoCard sx={styles.item} />
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Latest Post</Typography>
            <Box sx={styles.postAuthorSection}>
              <Avatar sx={styles.avatar} src="./assets/avatar.jpg" />
              <Typography sx={styles.postMeta}>Symoon & Co.</Typography>
              <Typography sx={styles.postMeta}>Jan 10, 2023</Typography>
            </Box>
            <ReadMore className="readmore" text={postText} maxChars={250} />
            <Divider sx={styles.divider} />
            <Box sx={styles.postStats}>
              <Typography variant="body2">Likes</Typography>
              <Typography variant="body2">Comments</Typography>
              <Typography variant="h6">12</Typography>
              <Typography variant="h6">5</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              GO TO COMMUNITY TAB
            </Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Channel Analytics</Typography>
            <Typography variant="h7">Current Subscribers</Typography>
            <Typography variant="h4">4,455</Typography>
            <Typography variant="h7">
              <ColorText color={"green.main"}>+147</ColorText>
              <ColorText color={"neutral.normal"}> in last 28 days</ColorText>
            </Typography>{" "}
            <br />
            <Typography variant="h7">
              <ColorText color={"red"}>-14</ColorText>
              <ColorText color={"neutral.normal"}> in last 28 days</ColorText>
            </Typography>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Summery</Typography>
            <Typography variant="h8">
              <ColorText color={"neutral.normal"}>Last 28 days</ColorText>
            </Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Views</Typography>
              <Typography variant="h7">1254</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Watch Time (hours)</Typography>
              <Typography variant="h7">47</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Estimated Revenue</Typography>
              <Typography variant="h7">$246.34</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Top Videos</Typography>
            <Typography variant="h8">
              <ColorText color="neutral.normal">
                Last 48 hours . Views
              </ColorText>
            </Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                How to Start Your React Developer Journey
              </Typography>
              <Typography variant="h7">47</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Be a react developer in 2024</Typography>
              <Typography variant="h7">142</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">
                Javascript Fundamentals: Be a JS Developer in 2023
              </Typography>
              <Typography variant="h7">245</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              GO TO VIDEO ANALYTICS
            </Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Latest Comments</Typography>
            <Typography variant="h7">
              <ColorText color="neutral.normal">
                Channel comments I haven't responded to
              </ColorText>
            </Typography>

            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src="./assets/avatar.jpg" />

              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>Symoon & Co</Typography>
                  <Typography sx={styles.postMeta}>4 days ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  Get tips from a successful creator how to take a youtube
                  channel and turn it into a business earn you money
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={styles.videoThumbnail}
                src="./assets/thumb-2.jpg"
              />
            </Box>

            <Divider sx={styles.divider} />

            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src="./assets/avatar.jpg" />

              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>Symoon & Co</Typography>
                  <Typography sx={styles.postMeta}>a week ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  Ho Can I design a react fronend page in a few minutes?
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={styles.videoThumbnail}
                src="./assets/thumb-2.jpg"
              />
            </Box>
            <Divider sx={styles.divider} />

            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src="./assets/avatar.jpg" />

              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>Symoon & Co</Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  You must do this 5 things to be a senior web developer
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={styles.videoThumbnail}
                src="./assets/thumb-2.jpg"
              />
            </Box>
            <Typography sx={styles.cardAction} variant="link">
              VIEW MORE
            </Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Ideas for you</Typography>
              <Typography sx={styles.ideasQuestion}>
                Read to get business savvy?
              </Typography>
              <Typography variant="h7">
                Get tips from a successful creator on how to take a youtube
                channel and turns it to business that earns you money
              </Typography>
              <Typography sx={styles.cardAction} variant="link">
                GET STARTED NOW
              </Typography>
            </Box>
            <Box
              component={"img"}
              sx={styles.ideaImage}
              src="./assets/study-icon.png"
            />
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Creator Insider</Typography>
              <Box
                component={"img"}
                sx={styles.insiderImage}
                src="./assets/thumb-1.webp"
              />
              <Typography sx={styles.ideasQuestion}>
                Ready to boost your skills using Ai?
              </Typography>
              <Typography variant="h7">
                Get tips from a successful creator on how to take a youtube
                channel and turns it to business that earns you money
              </Typography>
              <Typography sx={styles.cardAction} variant="link">
                WATCH ON YOUTUBE
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

/*** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
  columnsContainer: {
    columns: "280px 3",
    maxWidth: 1400,
  },
  item: {
    mb: 2,
  },
  postAuthorSection: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    my: 3,
  },
  avatar: {
    width: "30px",
    height: "auto",
  },
  postMeta: {
    mr: 1,
    fontSize: "0.8rem",
    color: "neutral.normal",
  },
  divider: {
    my: 2,
  },
  postStats: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    my: 3,
  },
  cardAction: {
    mt: 2,
  },
  videoStatsRow: {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
    "&:hover": {
      color: "primary.main",
      cursor: "pointer",
    },
  },
  commentRow: {
    display: "flex",
    alignItems: "flex-start",
    mt: 2,
    gap: 0.5,
  },
  commentDetailsSection: {
    display: "flex",
    alignItems: "center",
  },
  commentText: {
    fontSize: "0.8rem",
    mt: 0.5,
    mr: 2,
  },
  videoThumbnail: {
    width: "80px",
    ml: "auto",
  },
  ideaContent: {
    display: "flex",
  },
  ideasQuestion: {
    fontsize: "0.9rem",
    fontWeight: 500,
    my: 2,
  },
  ideaImage: {
    width: 80,
    alignSelf: "center",
    ml: 5,
  },
  insiderImage: {
    width: "100%",
    mt: 1,
  },
};

export default Dashboard;
