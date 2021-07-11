import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button';

import '../../StructureStyles.css';

export default function MenuComponent()
{
    const linkStyle = {
        textDecoration: 'none',
        margin:'2px',
    
    }

    const h2 = {
        color:'black',       
        fontSize:'17px',
        padding:'0px 0px 0px 0px',
        margin:'0px 0px 0px 0px',
    }

    return (
        <>
            <Link style={linkStyle} to='/skills' >
                <Button  className="p-button-secondary" >
                    <h2 style={h2}>Habilidades</h2>
                </Button>
            </Link>

            <Link style={linkStyle} to='/work-experience' >
                <Button  className="p-button-secondary" >
                    <h2 style={h2}>Experiencia laboral</h2>
                </Button>
            </Link> 

            <Link style={linkStyle} to='/education' >
                <Button   className="p-button-secondary" >
                    <h2 style={h2}>Educacion</h2>
                </Button>
            </Link>

            <Link style={linkStyle} to='/personal-project' >
                <Button  className="p-button-secondary" >
                    <h2 style={h2}>Proyecto personales</h2>
                </Button>
            </Link>

            <Link style={linkStyle} to='/references' >
                <Button  className="p-button-secondary" >
                    <h2 style={h2}>Refetencias</h2>
                </Button>
            </Link>
        </>
    )
}
