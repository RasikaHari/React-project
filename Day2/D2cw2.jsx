import React from 'react';
const Class2=()=>
{
   const rs={
    backgroundColor: 'lightblue',
    padding: '10px',
    color: 'darkblue',
    border: '1px solid',
    borderradius:'5px'
   };
    return(
        <div style={rs}>
            <h1 style={{color:"green"}}>Inline Style in JSX Example</h1>
            <p style={{color:"darkblue",fontSize:"16px"}}>This is the paragraph with the inline styles applied</p>
        </div>
    )
}
export default Class2;
