import React, { useState } from 'react';
import PersonalProjectComponent from '../Components/PersonalProject/PersonalProjectComponent.js';

import { TabView,TabPanel } from 'primereact/tabview';

const PersonalProjectPage = props => {
    
    const [activeIndex, setActiveIndex] = useState(0);

    const containerStyle = {
        padding:'20px 20px 20px 20px'   
    }

    return (
        <div className="animate__animated animate__bounceInLeft" style={containerStyle}>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Tridente SC" >

                    <PersonalProjectComponent 
                    projectName='Tridente SC' 
                    projectDescription='Administrador de tienda de celulares.' 
                    projectData='11/2020 - 02/2021' 
                    technologies={[
                        {tittle:'WinForms'},
                        {tittle:'Sql Server'},
                        {tittle:'Entity Framework'},
                        {tittle:'SignalR'},
                        {tittle:''},
                        {tittle:'Asp.net Core'}]}
                    /* imgs={[
                        { img:"https://img.icons8.com/color/480/000000/c-sharp-logo.png",        alt:'', description:'C#'},
                        { img:"https://img.icons8.com/color/480/000000/html-5--v1.png",          alt:'', description:'Html'},
                        { img:"https://img.icons8.com/color/480/000000/css3.png",                alt:'', description:'CSS'},
                        { img:"https://img.icons8.com/color/480/000000/javascript--v2.png",      alt:'', description:'JavaScrip'},
                        { img:"https://img.icons8.com/color/480/000000/angularjs.png",           alt:'', description:'Angular'},
                        { img:"https://img.icons8.com/color/480/000000/react-native.png",        alt:'', description:'React'},
                        { img:"https://img.icons8.com/color/480/000000/bootstrap.png",           alt:'', description:'BootStrop'},
                        { img:"https://img.icons8.com/color/480/000000/bootstrap.png",           alt:'', description:'Asp.net'},
                        { img:"",                                                                alt:'', description:'Api Restful'},
                        { img:"",                                                                alt:'', description:'MVC'},
                        { img:"https://img.icons8.com/color/480/000000/bootstrap.png",           alt:'', description:'Entity Framework Core'},
                        { img:"",                                                                alt:'', description:'WCF'},
                        { img:"",                                                                alt:'', description:'Telerik report'},
                        { img:"https://img.icons8.com/ios-filled/500/000000/github.png",         alt:'', description:'GitHub'},
                        { img:"https://img.icons8.com/color/480/000000/microsoft-sql-server.png",alt:'', description:'Sql Server'},
                        { img:"https://img.icons8.com/ios-filled/500/000000/mysql-logo.png",     alt:'', description:'MySql'},
                    ]} */
                     />

        

                </TabPanel>
                <TabPanel header="Ars Afiliados">
                   
                    <PersonalProjectComponent 
                    projectName='Ars Afiliados' 
                    projectDescription='Sistema de afiliados' 
                    projectData='04/2021 - stop' 
                    technologies={[
                        {tittle:'Angular 11'},
                        {tittle:'Asp.Net Core Api 3.1'},
                        {tittle:'Ado.net'},
                        {tittle:'Entity Framework'},
                        {tittle:'Sql Server'},
                        {tittle:'Identity'},
                        {tittle:'Bootstrap'},
                        {tittle:'Madia-Type vnd'}]}
                     />

                </TabPanel>
                <TabPanel header="PokeSite">
                    
                    <PersonalProjectComponent 
                    projectName='PokeSite' 
                    projectDescription='Guía de pokemones.' 
                    projectData='03/2020 - stop' 
                    technologies={[
                        {tittle:'Angular 11'},
                        {tittle:'Asp.Net Core Api 3.1'},
                        {tittle:'Bootstrap'},]}
                     />

                </TabPanel>
            </TabView>
        </div>
    )
}

export default PersonalProjectPage
