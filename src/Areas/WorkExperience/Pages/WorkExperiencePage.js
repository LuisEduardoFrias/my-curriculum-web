import React, { useState }  from 'react'

import WorkExperienceComponent from '../Components/WorkExperience/WorkExperienceComponent'

import '../WorkExperience.css';

import { Fieldset } from 'primereact/fieldset';

const WorkExperiencePage = props => {

    const [state, setstate] = useState({fieldset1:true, fieldset2:true, fieldset3:true, fieldset4:true,})

    const handlerClick = (name) =>{
        setstate({ ...state, [name]: !state[name] });
    }

    return (
        <div style={{padding:'50px', display:'grid', gridGap:'20px'}}>        
            
            <Fieldset 
            legend={ state.fieldset1 === true ? 'Aloe Software' : ''}  
            onClick={() => {handlerClick('fieldset1')}}
            collapsed={state.fieldset1} 
            className='animate__animated animate__bounceIn' 
            toggleable>

                <WorkExperienceComponent 
                work={[{
                    jobTitle:'Desarrollador de software', 
                    jobDescription:`Aloe software es una empresa dedicada al desarrollo y gestión software, 
                    infraestructura tecnológica y servicios informáticos, asi como cualquier otra actividad del entorno de TI.`, 
                    Name:'Aloe Software', 
                    data:'05/2020 - 06-2021', 
                achievements:[
                    {achievements:'Migrar ´sistema de operaciones´ en delphy 5 a .net 5 y react.'},
                    {achievements:'Desarrollar software de calidad, enfocado en las metodologias agiles.'},
                    {achievements:'Trabajar con metodologia de trabajo Scrum.'}]}]} />
            
            </Fieldset>
            
            <Fieldset  
            legend={ state.fieldset2 ? 'Tecnología y sistema computarizado. SRL.' : ''} 
            onClick={() => {handlerClick('fieldset2')}} 
            collapsed={state.fieldset2} 
            className='animate__animated  animate__bounceIn' 
            toggleable>

                <WorkExperienceComponent 
                work={[{
                    jobTitle:'Desarrollador',
                    jobDescription:'Tecnosis es una compañia de servicios de sistemas infomáticos.',    
                Name:'Ternología y sistema computarizado .SRL', 
                data:'01/2020 - 05/2021',
                achievements:[{achievements:'Migrarcion del sistema de facturacíon y ventas con contabilidad, cobol a c#.'}, 
                {achievements:'User las ternilias winforms, as.net core api 3.1, Sql server, Entity Framework core.'},
                {achievements:'Cracion de inferfaces para comunicar aplicacion en cobol con sistema de verifone carNet y visaNet.'}]}]} />

            </Fieldset>
            
            <Fieldset  
            legend={ state.fieldset3 ? 'EC Mobiliario Creativo. SRL.' : ''} 
            onClick={() => {handlerClick('fieldset3')}} 
            collapsed={state.fieldset3} 
            className='animate__animated  animate__bounceIn' 
            toggleable >

                <WorkExperienceComponent 
                work={[{
                    jobTitle:'Ensamblador', 
                    jobDescription:'EC Mobiliario Creativo es una empresa de fabricacion de mobiliarios en general.',   
                Name:'EC Mobiliario Creativo. SRL.', 
                data:'10/2019 - 12/2019', 
                achievements:[{achievements:'Ensamblador'}, 
                {achievements:'Ebanisata'}]}]} />

            </Fieldset> 
            
            <Fieldset  
            legend={ state.fieldset4 ? 'Ramco vitrinas y decorasiones.' : ''} 
            onClick={() => {handlerClick('fieldset4')}} 
            collapsed={state.fieldset4} 
            className='animate__animated  animate__bounceIn' 
            toggleable>

                <WorkExperienceComponent 
                work={[{
                    jobTitle:'desarrollador', 
                    jobDescription:'Ramco vitrinas y decorasiones es una empresa de fabricacion de mobiliarios en general.',  
                Name:'Ramco vitrinas y decorasiones.', 
                data:'11/2014  - 04/2019', 
                achievements:[{achievements:'Ayudante de ensambaje'}, 
                {achievements:'Encargado de ensamblado.'},
                {achievements:'Encargado de aréa modular.'},
                {achievements:'Analista de costos.'}]}]} />

            </Fieldset>

        </div>
    )
}

export default WorkExperiencePage
