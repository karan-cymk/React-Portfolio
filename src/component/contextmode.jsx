import { createContext, useState } from "react"

export let Modecontext=createContext();
let Contextdarl=({children})=>{
    let [mode,setmode]=useState(true);
   
   return(
    <Modecontext.Provider value={{mode,setmode}}>
         {children}
    </Modecontext.Provider>
    )
};
export default Contextdarl;