import React, { useState, useCallback, useContext }  from 'react'

import WorkExperienceComponent from '../Components/WorkExperience/WorkExperienceComponent'

import '../WorkExperience.css';

import { Fieldset } from 'primereact/fieldset';
//import WorkExperience from '../../../assets/files/WorkExperience.json';

import MemoryContext from '../../../Share_Context/MemoryContext.js';

export default function WorkExperiencePage()
{
    const [state, setstate] = useState({fieldset1:true, fieldset2:true, fieldset3:true, fieldset4:true,})

    const context = useContext(MemoryContext)

    const handlerClick = useCallback((name) => 
    {
        setstate({ ...state, [name]: !state[name] });
    }, [state])

    return (
        <div style={{padding:'50px', display:'grid', gridGap:'20px', }}>        
            
            {context.WorkExperience.map( (w, i) => 
                <Fieldset 
                    key={i}
                    legend={ state[`fieldset${i+1}`] === true ? w.title : ''}  
                    onClick={() => {handlerClick(`fieldset${i+1}`)}}
                    collapsed={state[`fieldset${i+1}`]} 
                    className='animate__animated animate__bounceIn' 
                    toggleable>
                       <WorkExperienceComponent 
                        work={{
                            jobTitle: w.jobTitle, 
                            jobDescription: w.jobDescription, 
                            Name: w.name, 
                            data: w.data, 
                            achievements: w.achievements}} />
                    
                </Fieldset>
            )}

        </div>
    )
}

