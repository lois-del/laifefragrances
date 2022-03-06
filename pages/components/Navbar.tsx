import React from "react";
import ChevronDown from "../SVGIcons/chevron_down";
import SearchIcon from "../SVGIcons/search";
import ShopIcon from "../SVGIcons/shop";

type Props = {
    width: number
}



export default function NavBar({width}: Props) {
    return (

        <div style={{ display: 'flex', position: "fixed", width: "100vw", columnGap: '20px', backgroundColor: "wheat", flexDirection: "row", justifyContent: "space-between", paddingBlock: "15px" }}>

            {width > 600? 
            <div style={{ display: "flex", flexDirection: "row", columnGap: "20px" }}>
                <p style={{ marginLeft: "30px" }}><a href="#">About</a></p>
                <a href="#">Features</a>
                <a href="#">Contact</a>
                <a href="#">{width}</a>

            </div> : 
             <div style={{ height: "20px", width: "20px", marginLeft: "30px" }}>
             <SearchIcon />
         </div>
            }

            <div style={{ width: "100vw", position: "absolute", display: "flex", justifyContent: "center", fontWeight: "bold", margin: "auto", fontSize: "24", alignItems: "center" }}>URBAN</div>
           {width > 600? 
            <div style={{ display: "flex", marginRight: '50px', flexDirection: 'row', marginLeft: 'auto', columnGap: "15px" }}>
                <div style={{ display: 'flex', flexDirection: "row", fontSize: "0.8rem", fontWeight: "bold", alignItems: "center" }}>
                    <a href="#">EN</a>
                    <div style={{ height: "12px", width: "12px" }}>
                        <ChevronDown />
                    </div>
                </div>

                <div style={{ height: "20px", width: "20px" }}>
                    <SearchIcon />
                </div>
                <div style={{ height: "20px", width: "20px" }}>
                    <ShopIcon />
                </div>



            </div> :  <div style={{ height: "20px", width: "20px", marginRight: "50px" }}>
                    <ShopIcon />
                </div>
}
        </div>
           
    )
}