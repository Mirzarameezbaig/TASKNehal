import React,{useState} from "react";
import Dropdown  from './Dropdown';
import { Information } from "./Information";

const Home = () => {
  const [number, setNumber]=useState('One');
  const handleDropdown=(e)=>{
    setNumber(e.target.value)
  }
  return (
    <div>
      <Dropdown handleDropdown={handleDropdown}/>
      <Information number={number} />
    </div>
  );
};
export default Home;
