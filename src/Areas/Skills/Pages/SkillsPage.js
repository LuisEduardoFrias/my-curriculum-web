import React, { useContext } from 'react';
import CardToSkillsComponents from '../Components/CardToSkills/CardToSkillsComponents.js';
//import SkillsJson from '../../../assets/files/Skills.json';

import MemoryContext from '../../../Share_Context/MemoryContext.js';

export default function SkillsPage()
{   
    const context = useContext(MemoryContext)

    const containerStyle = {
        display:'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        padding:'20px 20px 20px 20px',
        gridGap:'30px',
    }
    
    return (
        <div style={containerStyle}>
           <CardToSkillsComponents skills={context.Skills}/>
        </div>  
    )
}