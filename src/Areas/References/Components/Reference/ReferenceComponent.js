import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Chip } from 'primereact/chip';

const ReferenceComponent = memo(({chips})=> 
{
    return (
        <div className='animate__animated animate__bounceInUp' style={{padding:'50px 300px 50px 300px', gridGap:'20px', display:'grid', gridTemplateRows:'repeat(3, 1fr)',}}>
           {chips.map((c, i) => <Chip key={i} label={c.label} icon="pi pi-user" />)}
        </div>
    )
});

ReferenceComponent.propTypes = {
    chips: PropTypes.array.isRequired
}

export default ReferenceComponent
