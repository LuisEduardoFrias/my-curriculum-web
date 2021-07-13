import React, { memo, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'; 
import { Password } from 'primereact/password';

import '../../settings.css';

export const LoginComponent = memo(({Credential, loginState}) => 
{
    const [formData, setFormData] = useState({email:'', password:''});

    const handleChange = ({target}) => 
    {
        setFormData({...formData, [target.name]: target.value});
    };

    const handleSubmit = (e) => 
    {
        if(formData.email === Credential.User && formData.password === Credential.password)
        {
            loginState(true);
        }
        else
        {
            loginState(false);
        }
    };

    return (
        <div  className="animate__animated animate__fadeInDown" style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',}}>

            <h5 style={{fontSize:'20px', zIndex:'9', fontWeight:'bold', position:'relative', top:'45px'}}>Credenciales</h5>

            <form onSubmit={handleSubmit} style={{
                display:'flex', 
                flexDirection:'column', 
                width:'300px',
                height:'300px',
                position:'relative',
                zIndex:'1',
                border:'4px double lightgray',
                borderRadius:'10px 10px',
                padding:'20px 20px 20px 20px',
                boxSizing:'border-box',
                boxShadow:'2px 2px 1px 1px lightgray'}}>

                <div className="p-field" style={{padding:'40px 0px 30px 0px'}}>
                    <span className="p-float-label p-input-icon-right">
                        
                        <i className="pi pi-envelope" />
                        
                        <InputText name="email" value={formData.email} onChange={handleChange}  />
                       
                    </span>
                </div>

                <div className="p-field" style={{padding:'0px 0px 40px 0px'}}>
                    <span className="p-float-label">
                       
                        <Password name="password" value={formData.password} onChange={handleChange}   />

                    </span>
                </div>

                <Button style={{position:'absolute', width:'Calc(100% - 40px)', bottom:'20px'}} 
                type="submit" label="Submit" className="p-mt-2" />

            </form>
        </div>
    )
});
