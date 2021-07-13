import React, { memo } from 'react'
import PropTypes from 'prop-types'

const WorkExperienceComponent = memo( ({work}) => 
{  
    return (
        <div style={{display:'grid', gridGap:'20px', }}>
            
            <label style={{
                fontWeight:'bold', 
                fontSize:'40px', 
                textDecorationLine: 'underline', 
                display:'flex', 
                justifyContent:'center'}}
            >
                {work.Name} 
            </label>
            
            <label style={{
                fontSize:'12px', 
                fontStyle:'italic',
                color:'rgb(90, 90, 90)', 
                display:'flex', 
                justifyContent:'center'}}
            >
                {work.jobDescription}
            </label>
            

            <label style={{fontWeight:'bold', fontSize:'20px', fontStyle:'italic'}} >{`Cargo: ${work.jobTitle}`}</label>
            <label style={{fontWeight:'bold', fontSize:'14px'}} >{`Fecha de estadia laboral: ${work.data}`}</label>
                
            {work.achievements && <div style={{display:'grid', gridGap:'5px'}}>

                <label style={{fontWeight:'bold', fontSize:'12px'}} >{`Logros / Tareas`}</label>

                {work.achievements.map( (m, i) => 
                    <div key={i} style={{fontWeight:'bold', marginBottom:'5px', fontSize:'15px', border:'1px solid black', paddingInline:'20px'}}>
                        <div  style={{paddingInline:'5px', fontWeight:'bold', fontSize:'15px', border:'1px solid black', borderBlock:'15px solid white', fontStyle:'italic'}}>
                            {m.achievements}
                        </div>
                    </div>)}
            </div>}
        </div>  
    )
});

WorkExperienceComponent.propTypes = {
    work: PropTypes.object.isRequired
}

export default WorkExperienceComponent
