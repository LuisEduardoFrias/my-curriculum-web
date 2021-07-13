import React, { useContext } from 'react'
import ReferenceComponent from '../Components/Reference/ReferenceComponent'

//import References from '../../../assets/files/References.json';

import MemoryContext from '../../../Share_Context/MemoryContext.js';

export default function ReferencesPage()
{
    const context = useContext(MemoryContext)

    return (
        <div>
            <ReferenceComponent chips={context.References} />
        </div>
    )
}


