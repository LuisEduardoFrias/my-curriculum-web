import React, { useState, useContext } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
//import Credential from  "../../../assets/files/Credential.json";

import { LoginComponent } from '../Components/Login/LoginComponent';
import { UpdateEducationComponents } from '../Components/Education/UpdateEducationComponents';
import { UpdateReferencesComponents } from '../Components/References/UpdateReferencesComponents';
import { UpdateSkillsComponents } from '../Components/Skills/UpdateSkillsComponents';
import { UpdateWorkExperienceComponents } from '../Components/WorkExperience/UpdateWorkExperienceComponents';
import { UpdatePersonalProjectComponents } from '../Components/PersonalProject/UpdatePersonalProjectComponents';

import MemoryContext from '../../../Share_Context/MemoryContext.js';

export default function SettingsPage() 
{
    const context = useContext(MemoryContext)

    const [login, setstate] = useState(false)

    const loginState = (e) =>
    {
        setstate(e);
    }

    const divStyle = {
        display:'flex',
        flexDirection:'column',
        margin:'30px 40px 20px 40px', 
        padding:'10px 10px 10px 10px', 
        border:'1px solid gray', 
        borderRadius:'10px 10px'
    }

    if(login === false)
        return ( <LoginComponent  Credential={context.Credential} loginState={loginState} />)
    else
        return (
            <ScrollPanel style={{ width: '100%', height: '100%', }} className="custombar1">
                <div style={divStyle}>
                    <span style={{margin:'10px 10px 30px 10px', fontWeight:'bold'}}>Educacion</span>
                    <UpdateEducationComponents json={context?.Education} />
                 </div>

                <div style={divStyle}>
                    <span style={{margin:'10px 10px 30px 10px', fontWeight:'bold'}}>Projectos personales</span>
                    <UpdatePersonalProjectComponents json={context?.PersonalProject} />
                </div>

                <div style={divStyle}>
                    <span style={{margin:'10px 10px 30px 10px', fontWeight:'bold'}}>Referencias</span>
                    <UpdateReferencesComponents json={context?.References} />
                </div>

                <div style={divStyle}>
                    <span style={{margin:'10px 10px 30px 10px', fontWeight:'bold'}}>Habilidades</span>
                    <UpdateSkillsComponents json={context?.Skills} />
                </div>

                <div style={divStyle}>
                    <span style={{margin:'10px 10px 10px 10px', fontWeight:'bold'}}>Experiencia laborales</span>
                    <UpdateWorkExperienceComponents json={context?.WorkExperience} />
                </div>

            </ScrollPanel>  
        )
          
}
