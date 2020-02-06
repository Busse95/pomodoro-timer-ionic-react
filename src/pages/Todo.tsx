import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage } from '@ionic/react';
import React from 'react';

// we need a list that we push to
// we need a button to create todos as well as an input mask
// each todo should come with a checkbox switch and a button to delete it

const Todo: React.FC = () => {
  return (
  <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Hello, welcome to my Todo. Use the Tabs below
      </IonContent>
  </IonPage>
  );
};

export default Todo;
