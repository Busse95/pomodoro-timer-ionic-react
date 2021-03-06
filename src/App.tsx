/**
 *  Main App File
 * contains routing to three different pages.
 * Default routing is to the 'Home' page.
 * The three CSS tiers have been imported but not modified.
 * Navigation is done by IonTabButtons in IonTabBar and 
 * content( the 3 pages ) are shown in IonTabs containing IonPages
 * 
 */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import TodoPage from './pages/Todo';
import Timer from './pages/Timer';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/Todo" component={TodoPage} exact={true} />
          <Route path="/Timer" component={Timer} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="homeTab" href="/Home">
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="todoTab" href="/Todo">
            <IonLabel>Todo's</IonLabel>
          </IonTabButton>
          <IonTabButton tab="timerTab" href="/Timer">
            <IonLabel>Timer</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
