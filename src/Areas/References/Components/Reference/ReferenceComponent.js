import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Chip } from 'primereact/chip';

const ReferenceComponent = memo(()=> {
    return (
        <div className='animate__animated animate__bounceInUp' style={{padding:'50px 300px 50px 300px', gridGap:'20px', display:'grid', gridTemplateRows:'repeat(3, 1fr)',}}>
            <Chip label="Ing. José Manuel Tejeda Contacto: 809-436-7126" icon="pi pi-user" />
            <Chip label="Lic. Jairo Esteban Lora Mejía Contacto: 829-983-1386" icon="pi pi-user" />
            <Chip label="Ing. Julio Angel Florentino Contacto: 829-854-7130" icon="pi pi-user" />
        </div>
    )
});

ReferenceComponent.propTypes = {

}

export default ReferenceComponent
