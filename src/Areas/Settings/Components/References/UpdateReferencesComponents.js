import React, { memo, useContext } from 'react'
import JSONInput from 'react-json-editor-ajrm/es';
import locale    from 'react-json-editor-ajrm/locale/en';
import MemoryContext from '../../../../Share_Context/MemoryContext.js';

import '../../settings.css';

export const UpdateReferencesComponents = memo(({json}) => 
{
    const context = useContext(MemoryContext)

    const handle = (e) => {
        context.References = e.jsObject;
    }

    return (    
    <JSONInput
        id          = 'a_unique_id'
        placeholder = { json }
        locale={locale}
        width='100%'
        height='100%'
        colors={{ string: "#DAA520" }}
        onChange={handle}
    />)
});
