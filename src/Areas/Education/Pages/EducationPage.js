import React, { useContext } from 'react'

import CertificateComponent from '../Components/Certificate/CertificateComponent.js';
import CertificateIntitute  from '../Components/CertigicateIntitute/CertificateIntitute.js';

import Diploma  from '../../../assets/Diploma.jpeg';
//import Education from "../../../assets/files/Education.json";

import MemoryContext from '../../../Share_Context/MemoryContext.js';

export default function EducationPage()
{
    const context = useContext(MemoryContext)

    return (
        <div style={{display:'flex', flexDirection:'column', gridGap:'20px'}}>
            
            <CertificateIntitute diplomate={Diploma} />
            
            <div className='animate__animated animate__backInDown'  style={{display:'grid', gridGap:'25px', padding:'40px' }}>

                <label className='label' style={{fontSize:'30px'}} >Cursos online</label>

               {context.Education && context.Education.map((e, i) => 
               <CertificateComponent key={i} certificate={e.certificate} data={e.data}/>)}

            </div>

        </div>
    )
}

