/**
 *  Home Page
 * The app is routed to this page on default. 
 * Contains no logic whatsoever
 */
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
  <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Hello, welcome to my toolbox. Feel free to use the Tabs below
      </IonContent>
  </IonPage>
  );
};

export default Home;
