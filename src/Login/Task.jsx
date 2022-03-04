import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import ReactDeleteRow from 'react-delete-row';


const Task=()=>{
    const [data, setData]=useState([]);
    const getData=async ()=>{
       const result=await axios.get('http://jsonplaceholder.typicode.com/todos');
    //    console.log(result) 
        setData(result.data)
    }
    useEffect(()=>{
        getData();
    },[])
    // const handleDelete=(id)=>{
    //     const newData=data.filter((elem)=>elem.id!==id+1);
    //     setData(newData)
    // }
    return(
        <div>
            {/* <Link to='/' ><Button>LogOut</Button></Link> */}
<Table style={{width:'60%',margin:'auto'}}>
  <thead>
    <tr>
      <th>UserId</th>
      <th>Title</th>
      <th>Completed</th>
    </tr>
    </thead>
    <tbody>
{data.map((item,i)=>{

    return(
      item.id < 21  &&
            <ReactDeleteRow key={i} data={item} onDelete={item=>{return window.confirm(`Are you sure?`)}} >
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed.toString()}</td>
            </ReactDeleteRow>   
    )
})}
  </tbody>
</Table>
        </div>
    )
}
export default Task;