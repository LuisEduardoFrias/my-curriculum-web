import { createContext } from 'react';

const Credential = {
    User:"luiseduardofrias27@gmail.com",
    password:"Robert190114"
}

const Education = [
    {certificate:"Desarrollando Aplicaciones en Angular 10 y ASP.NET Core 5", data:"04/2021 - 04/2021"},
    {certificate:"Dentity Framework Core y SQL Server / MySQL", data:"03/2020 - 04/2020"},
    {certificate:"Creación de API web Restful con ASP.NET Core 3.1", data:"02/2021 - 04/2021"},
    {certificate:"Introducción a la concurrencia en C # - Async y Paralelismo", data:"02/2021 - 04/202"},
    {certificate:"SQL: Creación de base de datos (de cero a profesional)", data:"08/2019 - 11/2019"},
    {certificate:"Introducción a la inyección SQL", data:"08/2019 - 08/2019"},
    {certificate:"Net Core esencial", data:"06/2019 - 06-2019"},
    {certificate:"Diseño y programación orientados a objetos en C #", data:"04/2019 - 05/2019"},
    {certificate:"Curso de C # 8 .NET Core desde cero hasta avanzado", data:"03/2019 - 04/2019  "},
    {certificate:"Desarrollando Aplicaciones en Angular 10 y ASP.NET Core 5", data:"04/2021 - 05/2021"},
    {certificate:"React: De cero a experto ( Hooks y MERN )", data:"6/2021 - 07/2021"}
]

const PersonalProject = [
    {
        header:"Tridente SC",
        projectName:"Tridente SC" ,
        projectDescription:"Administrador de tienda de celulares." ,
        projectData:"11/2020 - 02/2021" ,
        technologies:[
            {tittle:"WinForms"},
            {tittle:"Sql Server"},
            {tittle:"Entity Framework"},
            {tittle:"SignalR"},
            {tittle:"Asp.net Core"}
        ]
    },
    {
        header:"Ars Afiliados",
        projectName:"Ars Afiliados" ,
        projectDescription:"Sistema de afiliados" ,
        projectData:"04/2021 - stop" ,
        technologies:[
            {tittle:"Angular 11"},
            {tittle:"Asp.Net Core Api 3.1"},
            {tittle:"Ado.net"},
            {tittle:"Entity Framework"},
            {tittle:"Sql Server"},
            {tittle:"Identity"},
            {tittle:"Bootstrap"},
            {tittle:"Madia-Type vnd"}
        ],
        urls:[ 
            { url:"https://github.com/LuisEduardoFrias/Back-End"},
            { url:"https://github.com/LuisEduardoFrias/front-end-ars-afiliados"}
        ]
    },
    {
        header:"PokeSite",
        projectName:"PokeSite",
        projectDescription:"Guía de pokemones.",
        projectData:"03/2021 - stop",
        technologies:[
            {tittle:"Angular 11"},
            {tittle:"Asp.Net Core Api 3.1"},
            {tittle:"Bootstrap"}
        ]
    },
    {
        header:"DSRG",
        projectName:"DSRG",
        projectDescription:"Generador de reporte de la estructura tu base de datos.",
        projectData:"11/2020 - 02/2021",
        technologies:[
            {tittle:"C#"},
            {tittle:"WindowsForms"},
            {tittle:"Telerik report"},
            {tittle:"SpreadsheetLight - Excel"}
        ],
        urls:[ 
            {url:"https://github.com/LuisEduardoFrias/DSRG"} 
        ]
    }
]

const References = [
    {label:"Ing. José Manuel Tejeda Contacto: 809-436-7126" },
    {label:"Lic. Jairo Esteban Lora Mejía Contacto: 829-983-1386"},
    {label:"Ing. Julio Angel Florentino Contacto: 829-854-7130"}
]

const Skills = [
    { img:"https://img.icons8.com/color/480/000000/c-sharp-logo.png",        skill:"C#"},
    { img:"https://img.icons8.com/color/480/000000/html-5--v1.png",          skill:"Html"},
    { img:"https://img.icons8.com/color/480/000000/css3.png",                skill:"CSS"},
    { img:"https://img.icons8.com/color/480/000000/javascript--v2.png",      skill:"JavaScrip"},
    { img:"https://img.icons8.com/color/480/000000/angularjs.png",           skill:"Angular"},
    { img:"https://img.icons8.com/color/480/000000/react-native.png",        skill:"React"},
    { img:"https://img.icons8.com/color/480/000000/bootstrap.png",           skill:"BootStrop"},
    { img:"https://img.icons8.com/ios-filled/500/000000/github.png",         skill:"GitHub"},
    { img:"https://img.icons8.com/color/480/000000/microsoft-sql-server.png",skill:"Sql Server"},
    { img:"https://img.icons8.com/ios-filled/500/000000/mysql-logo.png",     skill:"MySql"},
    { img:"",                                                                skill:"Asp.net"},
    { img:"",                                                                skill:"Entity Framework Core"},
    { img:"",                                                                skill:"Api Restful"},
    { img:"",                                                                skill:"MVC"},
    { img:"",                                                                skill:"WCF"},
    { img:"",                                                                skill:"Telerik report"}
]

const WorkExperience = [
    {
        title:"Aloe Software",
        jobTitle:"Desarrollador de software", 
        jobDescription:"Aloe software es una empresa dedicada al desarrollo y gestión software, infraestructura tecnológica y servicios informáticos, asi como cualquier otra actividad del entorno de TI.", 
        name:"Aloe Software", 
        data:"05/2020 - 06-2021", 
        achievements:[
            {achievements:"Migrar ´sistema de operaciones´ en delphy 5 a .net 5 y react."},
            {achievements:"Desarrollar software de calidad, enfocado en las metodologias agiles."},
            {achievements:"Trabajar con metodologia de trabajo Scrum."}
        ]
    },
    {
        title:"Tecnología y sistema computarizado. SRL.",
        jobTitle:"Desarrollador",
        jobDescription:"Tecnosis es una compañia de servicios de sistemas infomáticos.",    
        name:"Ternología y sistema computarizado .SRL", 
        data:"01/2020 - 05/2021",
        achievements:[
            {achievements:"Migrarcion del sistema de facturacíon y ventas con contabilidad, cobol a c#."}, 
            {achievements:"User las ternilias winforms, as.net core api 3.1, Sql server, Entity Framework core."},
            {achievements:"Cracion de inferfaces para comunicar aplicacion en cobol con sistema de verifone carNet y visaNet."}
        ]
    },
    {
        title:"EC Mobiliario Creativo. SRL.",
        jobTitle:"Ensamblador", 
        jobDescription:"EC Mobiliario Creativo es una empresa de fabricacion de mobiliarios en general.",   
        name:"EC Mobiliario Creativo. SRL.", 
        data:"10/2019 - 12/2019", 
        achievements:[
            {achievements:"Ensamblador"}, 
            {achievements:"Ebanisata"}
        ]
    },
    {
        title:"Ramco vitrinas y decorasiones.",
        jobTitle:"desarrollador", 
        jobDescription:"Ramco vitrinas y decorasiones es una empresa de fabricacion de mobiliarios en general.",  
        name:"Ramco vitrinas y decorasiones.", 
        data:"11/2014  - 04/2019", 
        achievements:[
            {achievements:"Ayudante de ensambaje"}, 
            {achievements:"Encargado de ensamblado."},
            {achievements:"Encargado de aréa modular."},
            {achievements:"Analista de costos."}]
        
    }
]

export const Memory = {
    Credential: Credential,
    Education: Education,
    PersonalProject:PersonalProject,
    References:References,
    Skills:Skills,
    WorkExperience:WorkExperience
}

const MemoryContext = createContext(null);

export default MemoryContext;