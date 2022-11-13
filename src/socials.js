
import { AiFillLinkedin } from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"

import './index.css'
function socials(){



return (

<div className="socials">
    <a href="https://github.com/manushresthyadav"><AiFillGithub size={42} /></a>
<a href="https://www.instagram.com/manuydv_16xx/"><AiFillInstagram size={42}/></a>
<a href="https://www.linkedin.com/in/manu-yadav-b44889208/"><AiFillLinkedin size={42}/></a>
<a href="https://twitter.com/ManushresthY"><AiFillTwitterCircle size={42}/></a>



</div>

);


}

export default socials;