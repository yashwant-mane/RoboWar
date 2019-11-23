import React from 'react';

const StickyHeader =(props)=>{
    return <div style={{position:"sticky", top:"0", width:"100%"}}>
        {props.children}
    </div>
}

export default StickyHeader;