/**
 *  Todo Page
 * One of the three content Pages
 * features a user populated IonList
 * No persistence present yet
 * 
 * The list in state keeps track of entered texts and whether they have been checked or not
 * TODO: Now you need to save and load said list
 */
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonButton, IonList, IonListHeader, IonCheckbox, IonItem, IonLabel, IonInput } from '@ionic/react';
import React from 'react';
import TodoItem from './TodoItem'

interface Todo {
  id: number,
  text: string,
  isChecked: boolean,
}

// TODO: USE THE PROPS WHEN LOADING/SAVING DATA
interface TodoProps {

}

interface TodoState {
  currentText: String,
  todos: Array<Todo>,
}

// global variable enables unique IDs, however when saving/ loading, this might be a problem
let id = 0

class TodoPage extends React.Component<TodoProps, TodoState> {
  /**
   * 
   * @param props 
   */

  // CONSTRUCTOR
  constructor(props: TodoProps) {
    super(props);
    this.state = {
      currentText: '',
      todos: [],
    }
  }

  // UI METHOD
  render() {
    // the next line necessary in typescript react, in contrast to javascript react
    const { todos } = this.state;
    return (
      <IonPage>
          <IonHeader>
            <IonToolbar>
                <IonTitle>Welcome</IonTitle>
              <IonButton onClick={this.onClickAdd}>
                <IonTitle>Add Todo</IonTitle>
              </IonButton>
            </IonToolbar>
            <IonItem>
              <IonLabel>What To Do ?</IonLabel>
              <IonInput 
              inputmode='text'
              clearOnEdit={true}
              onIonChange={(e) => {this.onInputChange((e.target as HTMLInputElement).value)}}
              id='inputTodo'
              ></IonInput>
            </IonItem>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonList>
              <IonListHeader>Your Todo's</IonListHeader>
              {todos.map(todo => (
                <TodoItem
                  onClickCheck={() => {this.onClickCheck(todo.id)}}
                  onClickDelete={() => {this.onClickDelete(todo.id)}}
                  todoText={todo.text}
                  todoChecked={todo.isChecked}
                />
              ))}
            </IonList>
          </IonContent>
      </IonPage>
    );    
  }
  /*
  // MOUNT METHOD
  componentDidMount() {
    // TODO: LOAD THE SAVED TODO LIST OF THIS.STATE
  };
  */
  /*
  // UNMOUNT METHOD
  componentWillUnmount() {
    // TODO: SAVE THE TODO LIST OF THIS.STATE
  };
  */  
  // ONCHANGE METHODS
  onInputChange = (e: string) => {
    /**
     * This method keeps track of the input's text every time the event 'onChange' is fired, saves the text in this.state
     */
    this.setState(previousState => ({
      currentText: e
    }))
  }
  
  // ONCLICK METHODS
  onClickAdd = () => {
    /**
     * When Add button is clicked, this method adds a object to the state's list with the text of input
     */
    // Avoid empty Todos
    if (this.state.currentText !== '') {
      this.setState(previousState => ({
        todos: [
          ...previousState.todos,
          { id:id, 
            text:previousState.currentText, 
            isChecked:false
          } as Todo,
        ]
      }))

      // guarantee unique IDs
      id = id + 1
    }
    return true;
  }

  onClickDelete = (todoId: number) => {
    /**
     * When a delete button is clicked this method removes the object representing the row
     */
    this.setState(previousState => ({
      todos: previousState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  onClickCheck = (todoId: number) => {
    /**
     * When a checkbox is clicked this method toggles the boolean value of the object representing the row
     */
    this.setState(previousState => ({
      todos: previousState.todos.map(todo => {
        // Apply this to each todo in the list, either return it back or change the boolean val
        if (todo.id !== todoId) return todo
      return {
        id: todo.id,
        text: todo.text,
        isChecked: !todo.isChecked
      }})
    }))
  }
}

export default TodoPage;
