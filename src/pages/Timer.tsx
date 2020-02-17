/**
 *  Timer Page
 * One of the three content Pages
 * features a 'pomodoro' timer
 * The timer is reset upon exit, no persistence present
 * uses setInterval Intervals, asynchrous threads, to realize timing
 */
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonButton } from '@ionic/react';
import React from 'react';

interface TimerProps {
  name: undefined;
}

interface TimerState {
  count: number,
  isRunning: boolean,
  timerIndex: number,
  timerLenghts: Array<number>,
}

class Timer extends React.Component<TimerProps,TimerState> {
  /*
  state = {
    count,
    isRunning,
    timerIndex,
    timerLenghts,
  } */
  // CONSTRUCTOR
  constructor(props: TimerProps) {
    super(props)
    this.state = {
      count: 0,
      isRunning: false,
      timerIndex: 0,
      timerLenghts: [5,25,],
    }
  };
  // the reference to our asynchronous interval
  interval: any

  // UI METHOD
  render() {
    return (
      <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Pomodoro Timer</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {('0' + ~~(this.state.count / 60)).slice(-2)}:{('0' + (this.state.count % 60)).slice(-2)}
            <IonButton onClick={this.onClickStartPause}>
              <IonTitle>
                Start / Pause
              </IonTitle>
            </IonButton>
            <IonButton onClick={this.onClickReset}>
              <IonTitle>
                Reset
              </IonTitle>
            </IonButton>
          </IonContent>
      </IonPage>
      );    
  };
  /*
  // MOUNT METHOD
  componentDidMount() {

  };
  */
  // UNMOUNT METHOD
  componentWillUnmount() {
    clearInterval(this.interval);
  };

  incrementTimer = () => {
    let tempCount = this.state.count
	  this.setState(prevState => ({
      count: prevState.count - 1,
    }));
	  // we resort to a temp count here because setState is asynchronous
    if (tempCount - 1 === 0) {
	    // this method is invoked while the count is =1 and about to be 0
      this.switchTimer();
    }
  };

  switchTimer = () => {
    // this interval could be cleared before it hit 0, thusly the timer could be slightly inaccurate
    clearInterval(this.interval)
    // toggle the timer index between 0 and 1
    // fill the count with Length * secondsPerMinute
    this.setState(prevState => ({
      count: prevState.timerLenghts[1 - prevState.timerIndex] * 60,
      timerIndex: 1 - prevState.timerIndex,
      isRunning: false,
    }));
  };
  
  // ONCLICK METHODS
  onClickStartPause = () => {
    // Pause Timer
    if (this.state.isRunning) {
      this.setState(prevState => ({
        isRunning: false,
      }))
      clearInterval(this.interval)
    } 
    // Start Timer
    else if (!this.state.isRunning && this.state.count === 0) {
      this.setState(prevState => ({
        isRunning: true,
        count: prevState.timerLenghts[prevState.timerIndex] * 60
      }))
      this.interval = setInterval(this.incrementTimer)
    }
    // Resume Timer
    else {
      this.setState(prevState => ({
        isRunning: true,
      }))
      this.interval = setInterval(this.incrementTimer)
    }
  };

  onClickReset = () => {
    clearInterval(this.interval)
    this.setState(prevState => ({
      count: 0,
      timerIndex: 0,
    }))
  };
  
};
/* 
const Timer: React.FC = () => {
  return (
  <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      
      </IonContent>
  </IonPage>
  );
};
*/
export default Timer;
