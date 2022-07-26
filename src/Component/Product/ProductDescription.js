import { useState } from "react";

export default function ProductDescription({description}) {

    const [isReadMore,setReadMore]=useState(false);
    const toggleBtn=()=>{
    setReadMore(preState=>!preState)
}
  return (
    <div className="description">
    <p>{isReadMore ? description : description?.substr(0,100)} 
    <button onClick={toggleBtn} className="read_more">{isReadMore ? 'Read Less' :'.Read more'}</button>
    </p>
</div>
  )
}