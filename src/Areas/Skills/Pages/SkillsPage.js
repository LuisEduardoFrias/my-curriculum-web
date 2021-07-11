import React,  { useEffect } from 'react';
import CardToSkillsComponents from '../Components/CardToSkills/CardToSkillsComponents.js';
import EntityFrameworkCore from '../../../assets/EntityFrameworkCore.png';
import NetCore from '../../../assets/NetCore.png';
import ReadToFile from '../../../Share_Hooks/ReadToFile.js';

export default function SkillsPage()
{
    
    useEffect(() => {
        debugger;
        ReadToFile('../../../assets/files/Skills.txt');
    })

    const containerStyle = {
        display:'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        padding:'20px 20px 20px 20px',
        gridGap:'30px',
    }

    const skills = [
        { img:"https://img.icons8.com/color/480/000000/c-sharp-logo.png",        skill:'C#'},
        { img:"https://img.icons8.com/color/480/000000/html-5--v1.png",          skill:'Html'},
        { img:"https://img.icons8.com/color/480/000000/css3.png",                skill:'CSS'},
        { img:"https://img.icons8.com/color/480/000000/javascript--v2.png",      skill:'JavaScrip'},
        { img:"https://img.icons8.com/color/480/000000/angularjs.png",           skill:'Angular'},
        { img:"https://img.icons8.com/color/480/000000/react-native.png",        skill:'React'},
        { img:"https://img.icons8.com/color/480/000000/bootstrap.png",           skill:'BootStrop'},{ img:"https://img.icons8.com/ios-filled/500/000000/github.png",         skill:'GitHub'},
        { img:"https://img.icons8.com/color/480/000000/microsoft-sql-server.png",skill:'Sql Server'},
        { img:"https://img.icons8.com/ios-filled/500/000000/mysql-logo.png",     skill:'MySql'},
        { img:NetCore,                                                           skill:'Asp.net'},
        { img:EntityFrameworkCore,                                               skill:'Entity Framework Core'},
        { img:"",                                                                skill:'Api Restful'},
        { img:"",                                                                skill:'MVC'},
        { img:"",                                                                skill:'WCF'},
        { img:"",                                                                skill:'Telerik report'},
        
        
    ]   
    
    return (
        <div style={containerStyle}>
           <CardToSkillsComponents skills={skills}/>
        </div>  
    )
}