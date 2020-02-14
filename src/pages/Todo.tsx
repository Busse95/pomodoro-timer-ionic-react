import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonButton, IonList, IonListHeader, IonCheckbox, IonItem, IonLabel, IonInput } from '@ionic/react';
import React from 'react';
import TodoItem from './TodoItem'

interface Todo {
  id: number,
  text: string,
  isChecked: boolean,
}

// Still need to look up about interfaces
interface TodoProps {

}

interface TodoState {
  currentText: String,
  /* each object looks like this {string, boolean} */
  todos: Array<Todo>,
}

let id = 0

// we need a list that we push to
// we need a button to create todos as well as an input mask
// each todo should come with a checkbox switch and a button to delete it
class TodoPage extends React.Component<TodoProps, TodoState> {
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
    // necessary in typescript
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
                  onClickCheck={() => this.onClickCheck}
                  onClickDelete={() => this.onClickDelete(todo.id)}
                  todoText={todo.text}
                  todoChecked={todo.isChecked}
                />
              ))
              }
            </IonList>
          </IonContent>
      </IonPage>
    );    
  }
  
  // ONCHANGE METHODS
  onInputChange = (e: string) => {
    this.setState(previousState => ({
      currentText: e
    }))
  }
  
  // ONCLICK METHODS
  onClickAdd = () => {
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

  onClickDelete = (id: number) => {
    this.setState(previousState => ({
      todos: previousState.todos.filter(todo => todo.id !== id)
    }))
  }

  // still need to read up on checkboxes, how does it track? Test !!!
  onClickCheck = () => {
    // set flag in state array
    return true;
  }
}

export default TodoPage;
