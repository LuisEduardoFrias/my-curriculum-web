import React, { memo } from 'react'

import '../../Certigicate.css';

const CertificateComponent = memo(({certificate,data}) => 
{
    return (
        <div style={{
            display:'grid', 
            gridTemplateColumns:'1fr',
            gridTemplateRows:'repeat(2, 1fr)',
            gridGap:'20px', 
            width:'100%',  
            padding:'20px', 
            background: 'linear-gradient(rgb(228, 228, 228), rgb(204, 204, 204)',  
            border:'4px double rgb(229, 232, 235)', 
            borderRadius:'0px 30px 0px 30px'}}
            className="animate__animated animate__pulse mouseAnimation" >
           
            <div>
                <label style={{
                    display:'flex', 
                    justifyContent:'center',
                    fontWeight:'bold', 
                    fontSize:'20px', 
                    textDecorationLine: 'underline', width:'100%'}}>

                    {certificate}
                </label>
            </div>
            
            <div style={{fontWeight:'bold', fontSize:'14px'}} >

                <label>Fecha de estadia laboral: </label>
                <label style={{color:'red'}}>{data}</label>
                
            </div>    
            
        </div>
    )
})

export default CertificateComponent
