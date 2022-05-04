import React, {useContext, useEffect, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import  Switch from "../components/Switch";
import ThemeContext from "../context/theme/ThemeContext";


const pages = ["Company Name"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = (props) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [isDarkMode, setIsDarkMode] = useState(() => false);
    const [isToggled, setIsToggled] = useState(false);
    const a = useContext(ThemeContext);

    useEffect(()=>{
	  a.update1(isToggled);
	},[isToggled]);  

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};


	return (
		<>
		
		<AppBar position="static">
			<Container maxWidth="xl" style={{ backgroundColor: a.state ? "#202124":"white" }}>
				<Toolbar disableGutters>
				
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							color: a.state ? "white" : "#2D46B9",
						}}>
						LOGO
					</Typography>
					
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							style={{ color: a.state ? "white" : "#2D46B9" }}>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
								color: a.state ? "white" : "#2D46B9",
							}}>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center" style={{ color: a.state ? "white" : "#2D46B9" }}>
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
							color: a.state ? "white" : "#2D46B9",
						}}>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: a.state ? "white" : "#2D46B9", display: "block" }}>
								{page}
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0.2 }}>
					<Switch isToggled={isToggled} onToggle={function(){setIsToggled(!isToggled); props.changeBackground(isToggled); }}/>
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu} style={{ backgroundColor: a.state ? "#303134" : "white" }}>
									<Typography textAlign="center" style={{ color: a.state ? "white" : "#2D46B9" }}>
										{setting}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
              
		</AppBar>
		
		</>
	);
};
export default ResponsiveAppBar;
