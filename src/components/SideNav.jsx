import {
  AnalyticsOutlined,
  DashboardOutlined,
  SourceOutlined,
  StyleOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const { collapsed } = useProSidebar();
  const theme = useTheme();
  const location = useLocation()
  return (
    <Sidebar
      style={{ height: "100%", top: "auto" }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.light}
    >
      <Box sx={styles.avatarContainer}>
        <Avatar
          sx={styles.avatar}
          alt="Channel Name"
          src="src/assets/avatar.jpg"
        />
        {!collapsed ? (
          <Typography variant="body2" sx={styles.yourChannel}>
            Your Channel
          </Typography>
        ) : null}

        {!collapsed ? (
          <Typography variant="h6" sx={styles.yourChannel}>
            Symoon & Co.
          </Typography>
        ) : null}
      </Box>
      <Menu
      menuItemStyles={{
        button: ({active}) => {
          return {
            backgroundColor: active ? theme.palette.neutral.medium : undefined
          }
        }
      }}
      >
        <MenuItem
          active={location.pathname === "/"}
          icon={<DashboardOutlined />}
          component={<Link to="/" />}
        >
          <Typography variant="body2">Dashboard</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/content"}
          icon={<SourceOutlined />}
          component={<Link to="/content" />}
        >
          <Typography variant="body2">Content</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/analytics"}
          icon={<AnalyticsOutlined />}
          component={<Link to="/analytics" />}
        >
          <Typography variant="body2">Analytics</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/customization"}
          icon={<StyleOutlined />}
          component={<Link to="/customization" />}
        >
          <Typography variant="body2">Customization</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

/*** @type {import("@mui/material").SxProps} */
const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    my: 5,
  },
  avatar: {
    width: "40%",
    height: "auto",
  },
  yourChannel: {
    mt: 2,
  },
};

export default SideNav;
