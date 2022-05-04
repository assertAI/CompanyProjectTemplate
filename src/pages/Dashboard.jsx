import "../App.css";
import Card2 from "./Card2";
import FirstCard from "./FirstCard";
import TableOne from "./TableOne";
const Dashboard = () => {
  return <>  <select className="sitetextbox">
    <option>Bangalore</option>
    <option>Mumbai</option>
</select>
<input
  type="date"
  className="datetextbox"
/>
<div style={{display:"flex",margin:"10px"}}><FirstCard/>&nbsp;&nbsp;&nbsp;<Card2/></div>
<TableOne/></>;
};

export default Dashboard;
