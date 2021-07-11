import React, {memo} from 'react'
import PropTypes from 'prop-types'

import '../../Certigicate.css';

const CertificateIntitute = memo( ({diplomate}) =>
{
    const containerStyle = {
        display:'grid',
        gridTemplateRows:'repeat(3, 40px)',
        gridGap:'5px',
        justifyContent:'center',
        margin:'20px 0px 0px 0px', 

    }

    const imgStyle = {  
        display:'flex', 
        height:'600px', 
        justifyContent:"center", 
        margin:'20px 0px 0px 0px', 
        width:'800px',

    }

    return (
        <div className='animate__animated animate__backInDown' style={containerStyle}>

            <label style={{fontSize:'30px'}} className='label'  >
                Técnico Superior en Desarrollo del Software
            </label>

            <label style={{fontSize:'20px'}} className='label'  >
                Instituto Técnico Superior Comunitario (ITSC)
            </label>

            <label style={{fontSize:'15px'}} className='label' >
                09/2015 - 06/2020
            </label>

            <img   style={imgStyle} src={diplomate} alt='Diploma de graduación' />
        </div>
    )
});


CertificateIntitute.propTypes = {
    diplomate: PropTypes.string.isRequired
}

export default CertificateIntitute;
