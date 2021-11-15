import React from "react";
function MenuIcon(props){

  if(props.type==="normal")
  return(    
    <svg height="12px" version="1.1" viewBox="0 0 18 12" width="18px" xmlns="http://www.w3.org/2000/svg" >
      <g fill="#000" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
        <g className="normal" id="Core" transform="translate(-87.000000, -342.000000)">
          <g id="menu" transform="translate(87.000000, 342.000000)">
            <path d="M0,12 L18,12 L18,10 L0,10 L0,12 L0,12 Z M0,7 L18,7 L18,5 L0,5 L0,7 L0,7 Z M0,0 L0,2 L18,2 L18,0 L0,0 L0,0 Z" id="Shape"/>
          </g>
        </g>
      </g>
    </svg>
  )
  
  if(props.type==="another")
  return(
    <svg enable-background="new 0 0 512 512" fill="" height="19px" id="Layer_1" version="1.0" viewBox="0 0 512 512" width="19px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="445.2,109.2 402.8,66.8 256,213.6 109.2,66.8 66.8,109.2 213.6,256 66.8,402.8 109.2,445.2 256,298.4 402.8,445.2   445.2,402.8 298.4,256 "/></svg>
  )

}

export default MenuIcon;