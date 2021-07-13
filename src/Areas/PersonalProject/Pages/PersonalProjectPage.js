import React, { useState, useContext } from 'react';
import PersonalProjectComponent from '../Components/PersonalProject/PersonalProjectComponent.js';
import { TabView,TabPanel } from 'primereact/tabview';

//import PersonalProject from '../../../assets/files/PersonalProject.json';

import MemoryContext from '../../../Share_Context/MemoryContext.js';

export default function PersonalProjectPage()
{
    const context = useContext(MemoryContext)
    
    const [activeIndex, setActiveIndex] = useState(0);

    const containerStyle = {
        padding:'20px 20px 20px 20px'   
    }

    return (
        <div className="animate__animated animate__bounceInLeft" style={containerStyle}>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                {context.PersonalProject.map( (p, i) => 
                    <TabPanel header={p.projectName} >

                    <PersonalProjectComponent 
                        key={i}
                        projectName={p.projectName}
                        projectDescription={p.projectDescription}
                        projectData={p.projectData}
                        technologies={p.technologies}
                        urls={p.urls}
                        imgs={p.imgs}
                        />
                    </TabPanel>
                )} 
            </TabView>
        </div>
    )
}

