import React from 'react'

import CertificateComponent from '../Components/Certificate/CertificateComponent.js';
import CertificateIntitute  from '../Components/CertigicateIntitute/CertificateIntitute.js';

import Diploma  from '../../../assets/Diploma.jpeg';

export default function EducationPage()
{
    return (
        <div style={{display:'flex', flexDirection:'column', gridGap:'20px'}}>
            
            <CertificateIntitute diplomate={Diploma} />
            
            <div className='animate__animated animate__backInDown'  style={{display:'grid', gridGap:'25px', padding:'40px' }}>

                <label className='label' style={{fontSize:'30px'}} >Cursos online</label>

                <CertificateComponent certificate='Desarrollando Aplicaciones en Angular 10 y ASP.NET Core 5' data='04/2021 - 04/2021'/>
                <CertificateComponent certificate='Dentity Framework Core y SQL Server / MySQL' data='03/2020 - 04/2020'/>
                <CertificateComponent certificate='Creación de API web Restful con ASP.NET Core 3.1' data='02/2021 - 04/2021'/>
                <CertificateComponent certificate='Introducción a la concurrencia en C # - Async y Paralelismo' data='02/2021 - 04/2021'/>
                <CertificateComponent certificate='SQL: Creación de base de datos (de cero a profesional)' data='08/2019 - 11/2019'/>
                <CertificateComponent certificate='Introducción a la inyección SQL' data='08/2019 - 08/2019'/>
                <CertificateComponent certificate='Net Core esencial' data='06/2019 - 06-2019'/>
                <CertificateComponent certificate='Diseño y programación orientados a objetos en C #' data='04/2019 - 05/2019'/>
                <CertificateComponent certificate='Curso de C # 8 .NET Core desde cero hasta avanzado' data='03/2019 - 04/2019  '/>
                <CertificateComponent certificate='Desarrollando Aplicaciones en Angular 10 y ASP.NET Core 5' data='04/2021 - 05/2021'/>
                <CertificateComponent certificate='React: De cero a experto ( Hooks y MERN )' data='6/2021 - 07/2021'/>  
            </div>

        </div>
    )
}

