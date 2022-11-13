
import React from 'react'
import './index.css'
import { AiFillLinkedin } from "react-icons/ai";
function btn(){
    return (
<div className="cn">
    <button className='mybtn cl'>
        <AiFillLinkedin/>
        <a className='clbtn' href='https://www.linkedin.com/in/manu-yadav-b44889208/'>
        <h3>LinkedIn</h3>
        </a>
       
    </button>
</div> 
    );
}

export default btn;