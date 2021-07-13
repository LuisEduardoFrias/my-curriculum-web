import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ScrollPanel } from 'primereact/scrollpanel';

import PersonalInformationComponent from "../PersonalInformation/PersonalInformationComponent.js";
import EducationPage from '../../../Education/Pages/EducationPage';
import SkillsPage from '../../../Skills/Pages/SkillsPage';
import WorkExperiencePage from '../../../WorkExperience/Pages/WorkExperiencePage';
import ReferencesPage from '../../../References/Pages/ReferencesPage';
import PersonalProjectPage from '../../../PersonalProject/Pages/PersonalProjectPage';
import MenuComponent from '../Menu/MenuComponent';
import SettingsPage from '../../../Settings/Pages/SettingsPage.js';

import MemoryContext, { Memory } from '../../../../Share_Context/MemoryContext.js';

export default function AppComponent() 
{

  const containerStyle = {
    width:'100vw',
    height:'100vh',
    boxSizing:'border-box',
    overflow: 'hidden',
    background: '#00B4DB',
    background: '-webkit-linear-gradient(to right, #0083B0, #00B4DB)',
    background: 'linear-gradient(to right, #0083B0, #00B4DB)',
    padding:'30px',
    display:'grid',
    gridTemplateColumns:'25% 75%',
    gridTemplateRows:'1fr',

  }

  const headerStyle = {
    border:'2px solid lightgray',
    borderRadius:'20px 0px 20px 0px ', 
    boxShadow: '5px 5px 20px 1px rgb(0, 78, 95)',
    height:'100%',
    backgroundColor:'white',
    position:'relative',
    zIndex:'9',

  }

  const bodyStyle = {
    border:'1px solid lightgray',
    borderRadius:'0px 10px 10px 0px',
    boxShadow: '5px 5px 20px 1px rgb(0, 78, 95)',
    marginTop:'3.5%',
    height:'90%',
    backgroundColor:'white',
    display:'grid',
    gridTemplateRows:'50px 1fr',
    position:'relative',

  }

  const menuStyle = { 
    borderRadius:'0px 10px 0px 0px',
    backgroundColor:'lightgray',
    display:'flex',
    justifyContent:'center',    
    marginTop:'1px',
    padding:'5px 0px 5px 0px',

  }

  const routerStyle = {
    overflowY: 'hiden',
    width:'100%',
    padding:'5px',
    height:'Calc(100% - 50px)',
    position:'absolute',
    borderRadius:'0px 0px 10px 0px',
    top:'50px',

  }

  return (
    <MemoryContext.Provider value={Memory} >
      <Router>
        <div style={containerStyle}>

          <div style={headerStyle}>{<PersonalInformationComponent />}</div>

          <div style={bodyStyle}>

            <div style={menuStyle}> <MenuComponent /> </div>

            <div style={routerStyle}>
              <ScrollPanel style={{ width: '100%', height: '100%', }} className="custombar1">
                <Switch>
                  <Route exact path='/education' component={EducationPage} />
                  <Route exact path='/personal-project' component={PersonalProjectPage} />
                  <Route exact path='/references' component={ReferencesPage} />
                  <Route exact path='/skills' component={SkillsPage} />
                  <Route exact path='/work-experience' component={WorkExperiencePage} />
                  <Route exact path='/settings' component={SettingsPage} />
                </Switch>
              </ScrollPanel>   
            </div>
          </div>
        </div>
      </Router>
    </MemoryContext.Provider>
  );
}