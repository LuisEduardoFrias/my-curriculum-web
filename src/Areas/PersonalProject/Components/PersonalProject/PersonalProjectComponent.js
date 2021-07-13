import React, { memo } from 'react'
import PropTypes from 'prop-types'

const PersonalProjectComponent = memo(({projectName,projectDescription,projectData,
    technologies,urls, imgs}) => 
{
    return (
        <div>
            <h4 style={{
                fontSize:'30px', 
                padding:'0px 0px 0px 0px', 
                margin:'10px 0px 0px 0px'}}
            >
                {projectName}
            </h4>

            <p style={{
                fontStyle:'italic', 
                padding:'0px 0px 0px 0px', 
                margin:'5px 0px 10px 0px'}}
            >
                {projectDescription
            }</p>

            <span>{projectData}</span>

            <div style={{margin:'30px 0px 10px 0px', padding:'10px 10px 10px 10px', border:'1px solid lightgray'}}>
                
                <strong style={{position:'relative', bottom:'25px', fontSize:'20px'}}>
                    Tecnologías de desarrollo
                </strong>

                <ul style={{margin:'0px 0px 0px 0px'}}>{technologies && technologies.map((t,i) => 
                <li key={i}>
                    <em>{t.tittle}</em>
                </li>)}
                </ul>

            </div>
            
            {urls &&  <div style={{margin:'30px 0px 10px 0px', padding:'10px 10px 10px 10px', border:'1px solid lightgray'}}>
                {console.log("sada")}
                { urls.map((u, index) => <div key={index}> <span>Repositorio : </span><a href={u.url} >{u.url}</a> </div> )}

            </div>}

            {imgs &&  <div style={{margin:'30px 0px 10px 0px', padding:'10px 10px 10px 10px', border:'1px solid lightgray'}}>
                
                <figure style={{margin:'0px 0px 0px 0px'}}>

                    {imgs.map((i, index) => 
                    <div key={index}>
                        {i.img && <img style={{border:'1px solid red', width:'100%', }} src={i.img} alt={i.alt} />}
                        <figcaption> {i.description} </figcaption>
                    </div>)}
                
                </figure>

            </div>}

        </div>
    )
})

PersonalProjectComponent.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    projectData: PropTypes.string.isRequired,
    technologies: PropTypes.array.isRequired,
    urls: PropTypes.array,
    imgs: PropTypes.array,

}

export default PersonalProjectComponent