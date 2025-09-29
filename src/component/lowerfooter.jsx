import { useContext } from "react";
import { Modecontext } from "./contextmode";

function Lowerfooter(){
    let {mode,setmode}=useContext(Modecontext);
    return(<>
       <div className={`${mode?"bg-white":"bg-gray-900"}`}>
            <h2 className={`text-center font-bold ${mode?"text-black":"text-white"}`}>© 2025 Your Name. All rights reserved.</h2>
       </div>
    </>)
};
export default Lowerfooter;