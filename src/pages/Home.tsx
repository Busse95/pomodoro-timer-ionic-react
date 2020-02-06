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
        Hello, welcome to my toolbox. Use the Tabs below
      </IonContent>
  </IonPage>
  );
};

export default Home;
