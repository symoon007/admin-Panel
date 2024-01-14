/* eslint-disable react/prop-types */
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const rows = [
  {
    thumbnail: "src/assets/thumb-1.webp",
    name: "How to become a software developer in 2024",
    averageViewDuration: "2:45(21.5%)",
    views: 1254,
  },
  {
    thumbnail: "src/assets/thumb-2.jpg",
    name: "Introduction to React",
    averageViewDuration: "3:15(18.2%)",
    views: 984,
  },
  {
    thumbnail: "src/assets/thumb-3.jpg",
    name: "JavaScript Fundamentals",
    averageViewDuration: "2:30(25.0%)",
    views: 1502,
  },
  {
    thumbnail: "src/assets/thumb-4.jpg",
    name: "Web Development Crash Course",
    averageViewDuration: "4:02(19.8%)",
    views: 2035,
  },
  {
    thumbnail: "src/assets/thumb-5.jpg",
    name: "Node.js Basics",
    averageViewDuration: "2:18(23.7%)",
    views: 1109,
  },
  {
    thumbnail: "src/assets/thumb-6.jpg",
    name: "Python for Beginners",
    averageViewDuration: "3:40(15.4%)",
    views: 1766,
  },
];

console.log(rows);

const TopVideoList = ({heading}) => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h6">{heading}</Typography>
      <TableContainer sx={styles.tableContainer} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Content</TableCell>
              <TableCell align="right">Average View Duration</TableCell>
              <TableCell align="right">Views</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map(row =>(<TableRow key={row.name}>
                <TableCell component={'th'} sx={styles.contentCell}>
                  <Box sx={styles.videoThumbnail} component={'img'} src={row.thumbnail}/> 
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {row.averageViewDuration}
                </TableCell>
                <TableCell align="right">
                  {row.views}
                </TableCell>
              </TableRow>))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopVideoList;

/*** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    mt: 4,
    width: '100%',
    textAlign: 'center'
  },
  tableContainer: {
    mt: 8
  },
  contentCell: {
    display: 'flex',
    alignItems: 'center'
  },
  videoThumbnail: {
    width: '100%',
    maxWidth: 100,
    mr: 1
  }
 
}
