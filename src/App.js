import "./App.css";
import { useContext,useState } from "react";
import ResponsiveAppBar from "./MaterialUiComponents/AppBar";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import ThemeContext from "./context/theme/ThemeContext";
import ThemeState from "./context/theme/ThemeState";
import LoginPage from "./pages/LoginPage";

function App() {
  
   const [backgd,setbackgd] = useState(true);

  function changeBackground(data){
    setbackgd(data);
  }
 
 
	return (
    <ThemeState>
		<div className="App" style={{backgroundColor: backgd ? "#F6F6F6" : "red"}}>
    <Router>
      <Routes>
    <Route path="/login" element={<LoginPage />} />
    </Routes>
    </Router>
			<ResponsiveAppBar changeBackground={changeBackground} />
			<Router>
      
      <SideBar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
     
    </Router>
		</div>
    </ThemeState>
	);
}

export default App;
