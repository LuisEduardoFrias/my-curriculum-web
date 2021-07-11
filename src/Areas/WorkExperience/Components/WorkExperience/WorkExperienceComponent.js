import React, { memo } from 'react'
import PropTypes from 'prop-types'

const WorkExperienceComponent = memo( ({work}) => 
{
    return ( 
        
        work.map( (m,i) =>
            <div key={i}  style={{display:'grid', gridGap:'20px', }}>
                <div>
                    <label style={{
                        fontWeight:'bold', 
                        fontSize:'40px', 
                        textDecorationLine: 'underline', 
                        display:'flex', 
                        justifyContent:'center'}}
                    >
                        {m.Name}
                    </label>
                    
                    <label style={{fontSize:'12px', fontStyle:'italic', color:'rgb(90, 90, 90)', display:'flex', justifyContent:'center'}} >{m.jobDescription}</label>
                </div>
                <label style={{fontWeight:'bold', fontSize:'20px', fontStyle:'italic'}} >{`Cargo: ${m.jobTitle}`}</label>
                <label style={{fontWeight:'bold', fontSize:'14px'}} >{`Fecha de estadia laboral: ${m.data}`}</label>
                
                {m.achievements && <div style={{display:'grid', gridGap:'5px'}}>
                    <label style={{fontWeight:'bold', fontSize:'12px'}} >{`Logros / Tareas`}</label>
                    {m.achievements.map( (m, i) => 
                        <div key={i} style={{fontWeight:'bold', marginBottom:'5px', fontSize:'15px', border:'1px solid black', paddingInline:'20px'}}>
                            <div  style={{paddingInline:'5px', fontWeight:'bold', fontSize:'15px', border:'1px solid black', borderBlock:'15px solid white', fontStyle:'italic'}}>
                                {m.achievements}
                            </div>
                        </div>)}
                </div>}
            </div>  
        )
    )
});

WorkExperienceComponent.propTypes = {
    work: PropTypes.array.isRequired
}

export default WorkExperienceComponent
