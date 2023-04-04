import React from "react";
import logo from "../images/logo.png";
import layer from "../images/layer.png";
import bell from "../images/bell.png"
import sitting from "../images/sitting.png"
import man from "../images/man.png"


const Header = () => {
  return (
    <>
      <div className="header">

<div className="sub-header">

        <div style={{ display: "flex" }}>
         
          <img style={{ height:"70%", paddingTop:"12px", paddingRight:'8px' }} src={layer} />
          <img style={{width:"28%"}} src={logo} />

          <input className="inputsearch" type="text" placeholder="search"/>

        </div>


<div>
<img src={sitting} style={{paddingLeft:"10px"}} />
<img src={bell} style={{paddingLeft:"10px", marginRight:"10px"}}/>
<img src={man} style={{borderRadius:"100px", marginRight:"0px", height:"24px"}} />

</div>

</div>

      </div>
    </>
  );
};

export default Header;
