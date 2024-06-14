import { AppBar, Toolbar, Typography,IconButton,Box, FormControl, Select, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { makeStyles } from '@mui/material/styles';


const useStyles = makeStyles((theme : any) => ({
  background: theme.palette.primary.main,
}));

const Navbar = () => {
  
  //const theme = useTheme();
  // Invoke the custom hook to generate classes
  //const classes = useCustomStyles(styles, theme);
  const [position, setPosition] = useState<string>("Full Stack Developer");

  const onPositionChange = (event:any) => {
    setPosition(event.target.value);
  } 
  
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          My Movies
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <WelcomeMessage position={position} />
        </Box>
        <Box>
          <FormControl>
            <Select value={position} onChange={onPositionChange} className={classes.root}>
              <MenuItem value='Full Stack Developer'>Full Stack Developer</MenuItem>
              <MenuItem value='Frontend Developer'>Frontend Developer</MenuItem>
              <MenuItem value='Backend Developer'>Backend Developer</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


