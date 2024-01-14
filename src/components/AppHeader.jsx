import {
  Logout,
  MenuTwoTone,
  Notifications,
  Settings,
} from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import {useProSidebar } from "react-pro-sidebar";

const AppHeader = () => {
    const {collapseSidebar, toggleSidebar, broken} = useProSidebar()
    
    
  return (
    <AppBar position="sticky" sx={styles.appBar}>

      <Toolbar>
        <IconButton onClick={() => broken ? toggleSidebar() : collapseSidebar()} color="secondary">
          <MenuTwoTone />
        </IconButton>
        <Box
          component="img"
          sx={styles.appLogo}
          src="/src/assets/logo.png"
        />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton title="Notifications" color="secondary">
          <Badge badgeContent={7} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton title="Settings" color="secondary">
          <Settings />
        </IconButton>
        <IconButton title="Sign Out" color="secondary">
          <Logout />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

/*** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
    bgcolor: "neutral.main",
  },
  appLogo: {
    borderRadius: 1,
    width: 80,
    ml: 2,
    cursor: "pointer",
  },
};

export default AppHeader;
