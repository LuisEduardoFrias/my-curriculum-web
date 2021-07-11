import React from 'react';

import '../../Skills.css';

export default function CardToSkillsComponents({skills})
{
    return ( skills.map( (m)=> 
        <div className="animate__animated animate__pulse mouseAnimation"> 
            {m.img && <img style={{height:'50px', width:'50px'}} src={m.img} alt={`skill de ${m.skill}`} />}
            <label style={{fontFamily:'Arial'}}>{m.skill}</label>
        </div>
    ));
}
