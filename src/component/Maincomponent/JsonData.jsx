import { useEffect } from "react";
import { useState } from "react";
import SingleData from "./SingleData";

const JsonData = () => {
    const [datas, setdatas] = useState([]);
    useEffect(()=>{
        fetch('jsondata.json')
        .then(res => res.json())
        .then(data => setdatas(data));
    },[])
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {
             datas.map(item => <SingleData key={item.id} data={item} ></SingleData>)   
            }
        </div>
    );
};

export default JsonData;