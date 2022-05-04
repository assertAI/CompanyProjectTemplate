import React, { PureComponent,useContext,useEffect,useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ThemeContext from "../context/theme/ThemeContext";
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  transports: ['websocket', 'polling']
});

const Analytics = () => {
  const a = useContext(ThemeContext);

  
  const [data, setData] = useState([]);
  useEffect(() => {
    socket.on('cpu', cpuPercent => {
      setData(currentData => [...currentData, cpuPercent]);
    });
  }, []);
  
  return <>
  <LineChart width={1000} height={270} data={data}>
  <XAxis dataKey="name" stroke = {a.state ? 'white' : "black"}/>
  <YAxis stroke = {a.state ? 'white' : "black"}/>
  <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
  <Line type="monotone" dataKey="value" stroke="#8884d8" />
  {/* <Line type="monotone" dataKey="pv" stroke="#82ca9d" /> */}
</LineChart>
</>;
};

export default Analytics;
