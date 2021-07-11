import React from 'react'
import ProfileComponent from '../Profile/ProfileComponent'
import { CgMail } from 'react-icons/cg';
import { AiFillPhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { AiFillLinkedin } from 'react-icons/ai';

export default function  HeaderComponent()
{
    
    const header = {
        height:'100%',
        borderRadius:'20px 0px 20px 0px ', 
        display:'grid',
        gridTemplateRows:'repeat(2, 1fr)',

    }
    
    const profile = {
        borderRadius:'20px 0px 0% 0% ',  
        borderBottom:'5px solid gray',
        backgroundColor:'rgb(238, 238, 236)',
        background: 'linear-gradient(rgb(238, 238, 236), rgb(232, 232, 232))',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
    }

    const information = {
        borderRadius:'0px 0px 20px 0px',
        backgroundColor:'lightGray',
        
    }

    const h1 = {
        fontSize:'35px',
        margin:'0px 0px 10px 0px',   
        padding:'0px 0px 0px 0px',

    }

    const h3 = {
        fontSize:'20px',
        margin:'0px 0px 10px 0px',
        padding:'0px 0px 0px 0px',

    }

    const tittle = {
        alignItems: 'center',
        borderRadius:'0px 15px 0px 0px',
        display:'grid',
        justifyContent: 'center',
        padding:'20px 10px 10px 10px',

        
    }

    return (
        <div style={header}>

            <div style={profile}>
                <ProfileComponent />
            </div>
            
            <div style={information}>

                <div style={tittle}>

                    <h1 style={h1} >Luis Eduardo Frias</h1>
                    <h3 style={h3} >Ing de software</h3>

                    <div style={{display:'grid', gridGap:'20px', margin:'10px 0px 0px 0px'}}>
                        <span>  <CgMail /> luiseduardofrias27@gmail.com  </span>

                        <span style={{display:'grid'}}> 
                            <span> <AiFillPhone /> Personal ... 849-228-0058 </span> 
                            <span> <AiFillPhone /> Esposa ..... 849-356-5151</span>
                        </span>

                        <span> <GoLocation /> El Almirante, Santo Domingo Este, Republica Dominicana </span>

                        <span> <AiFillLinkedin /> 
                            <a style={{textDecoration: 'none'}} href='https://linkedin.com/in/luis-eduardo-frias-64204b1a3'>
                                linkedin.com/in/luis-eduardo-frias-64204b1a3
                            </a>
                        </span>

                    </div>
                </div>

            </div>
        
        </div>
    )
}
