import React from "react";
import ArrowLeft from "../SVGIcons/arrow_left";
import ArrowRight from "../SVGIcons/arrow_right";


type Props = {
    width: number
}

export default function Footer({width}: Props){
 return (
     
    
     <div  style={{display: "flex", flexDirection: "row", columnGap: "15px", justifyContent: "space-between", backgroundColor: "wheat", paddingBlock: "15px"}}>
       
         <div style={{marginLeft: "30px",columnGap: "10px", display: "flex", flexDirection: "row", alignItems: "start"}}><img  width= "20px" src="assets/line2.png"></img>
         <div style={{display: "flex", flexDirection: "row", }}><p >Urban is a spa and beauty place that serves<br></br> the best quality with professionals.</p></div>

         </div>
     <div  style={{ display: "flex", marginRight: '50px', flexDirection: 'row', }}>
     <div style={{ display: 'flex', flexDirection: "row" ,height: "30px", width: "30px"}} >
         <ArrowLeft/>
         <div style={{height: "30px", width: "30px"}}><ArrowRight/></div>
     </div>
     </div>
    
    
     </div>
     
     
   
 )   
}

