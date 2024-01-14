import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import TabPanel from "../../components/TabPanel";
import { DataGrid } from "@mui/x-data-grid";
import { AttachMoneyOutlined, VisibilityOutlined } from "@mui/icons-material";

const columns = [
  {
    field: "thumbnail",
    headerName: "Video",
    minWidth: 500,
    flex: 4,
    renderCell: (params) => (
      <Box sx={styles.videoColumn}>
        <Box
          sx={styles.videoThumbnail}
          src={params.row.thumbnail}
          component={"img"}
        />
        <Box sx={styles.videoDetails}>
          <Typography sx={styles.videoTitle}>
            Must know javascript Interview Questions | Part 1
          </Typography>
          <Typography sx={styles.videoDescription}>
            In this video you will learn How to solve JavaSricpt interview
            questions.
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    field: "visibilty",
    headerName: "Visibility",
    minWidth: 170,
    flex: 2,
    renderCell: (params) => (
      <Box sx={styles.iconColumn}>
        <VisibilityOutlined />
        <Typography sx={styles.iconColumnText}>
          {params.row.visibilty}
        </Typography>
      </Box>
    ),
  },
  {
    field: "monetization",
    headerName: "Monetization",
    minWidth: 170,
    flex: 2,
    renderCell: (params) => (
      <Box sx={styles.iconColumn}>
        <AttachMoneyOutlined />
        <Typography sx={styles.iconColumnText}>
          {params.row.monetization}
        </Typography>
      </Box>
    ),
  },
  {
    field: "views",
    headerName: "Views",
    minWidth: 170,
    flex: 1,
  },
  {
    field: "comments",
    headerName: "Comments",
    minWidth: 170,
    flex: 1,
  },
];

const videos = [
  {
    id: 1,
    thumbnail: "./assets/thumb-1.webp",
    visibilty: "Public",
    views: 152,
    comments: 12,
    monetization: "On",
  },
  {
    id: 2,
    thumbnail: "./assets/thumb-2.jpg",
    visibilty: "Public",
    views: 457,
    comments: 45,
    monetization: "On",
  },
  {
    id: 3,
    thumbnail: "./assets/thumb-3.jpg",
    visibilty: "Public",
    views: 2514,
    comments: 114,
    monetization: "On",
  },
  {
    id: 4,
    thumbnail: "./assets/thumb-4.jpg",
    visibilty: "Public",
    views: 365,
    comments: 14,
    monetization: "On",
  },
  {
    id: 5,
    thumbnail: "./assets/thumb-5.jpg",
    visibilty: "Public",
    views: 1256,
    comments: 47,
    monetization: "On",
  },
  {
    id: 6,
    thumbnail: "./assets/thumb-6.jpg",
    visibilty: "Public",
    views: 475,
    comments: 32,
    monetization: "On",
  },
  {
    id: 7,
    thumbnail: "./assets/thumb-2.jpg",
    visibilty: "Public",
    views: 2558,
    comments: 45,
    monetization: "On",
  },
  {
    id: 8,
    thumbnail: "./assets/thumb-5.jpg",
    visibilty: "Public",
    views: 123,
    comments: 5,
    monetization: "On",
  },
  {
    id: 9,
    thumbnail: "./assets/thumb-1.webp",
    visibilty: "Public",
    views: 456,
    comments: 16,
    monetization: "On",
  },
  {
    id: 10,
    thumbnail: "./assets/thumb-6.jpg",
    visibilty: "Public",
    views: 758,
    comments: 56,
    monetization: "On",
  },
  {
    id: 11,
    thumbnail: "./assets/thumb-4.jpg",
    visibilty: "Public",
    views: 658,
    comments: 35,
    monetization: "On",
  },
];

const posts = [
  {
    id: 1,
    thumbnail: "./assets/thumb-1.webp",
    visibilty: "Public",
    views: 241,
    comments: 12,
    monetization: "On",
  },
  {
    id: 2,
    thumbnail: "./assets/thumb-6.jpg",
    visibilty: "Public",
    views: 785,
    comments: 12,
    monetization: "On",
  },
  {
    id: 3,
    thumbnail: "./assets/thumb-5.jpg",
    visibilty: "Public",
    views: 745,
    comments: 12,
    monetization: "On",
  },
];

const playlists = [
  {
    id: 1,
    thumbnail: "./assets/thumb-4.jpg",
    visibilty: "Public",
    views: "251k",
    comments: 1452,
    monetization: "On",
  },
];

const lives = [];
const Content = () => {
  const [value, setValue] = useState(0);

  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">
        Content
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChanges}>
          <Tab label="Videos" id="tab-0" />
          <Tab label="Live" id="tab-1" />
          <Tab label="Posts" id="tab-2" />
          <Tab label="Playlists" id="tab-3" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <DataGrid
            rows={videos}
            columns={columns}
            checkboxSelection
            autoHeight
            rowHeight={70}
            pageSize={25}
            rowPerPageOptions={[25]}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DataGrid
            rows={lives}
            columns={columns}
            checkboxSelection
            autoHeight
            rowHeight={70}
            pageSize={25}
            rowPerPageOptions={[25]}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DataGrid
            rows={posts}
            columns={columns}
            checkboxSelection
            autoHeight
            rowHeight={70}
            pageSize={25}
            rowPerPageOptions={[25]}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <DataGrid
            rows={playlists}
            columns={columns}
            checkboxSelection
            autoHeight
            rowHeight={70}
            pageSize={25}
            rowPerPageOptions={[25]}
          />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Content;

/*** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
  videoColumn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  videoThumbnail: {
    width: 120,
  },
  videoDetails: {
    ml: 2,
  },
  videoTitle: {
    fontSize: "0.8rem",
    width: 490,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  videoDescription: {
    fontSize: "0.7rem",
    color: "neutral.normal",
    width: 490,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  iconColumn: {
    display: "flex",
    alignItems: "center",
  },
  iconColumnText: {
    ml: 1,
    fontSize: "0.9rem",
  },
};
