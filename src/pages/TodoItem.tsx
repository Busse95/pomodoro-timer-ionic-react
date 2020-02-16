import { IonItem, IonCheckbox, IonButton, IonLabel } from '@ionic/react';
import React from 'react';

interface TodoItemProps {
    onClickDelete: () => void,
    onClickCheck: () => void,
    todoText: string,
    todoChecked: boolean,
};

// IN THE RETURN OF THIS FC, IT IS IMPORTANT NOT TO USE A ANONYMOUS BIND FUNCTION FOR THE PASSED FUNCTIONS, BECAUSE THEY'D BIND TO THIS CLASS?!
const TodoItem: React.FC<TodoItemProps> = (props) => (
    <IonItem>
      <IonCheckbox onClick={props.onClickCheck} checked={props.todoChecked} slot="start"/>
      <IonButton onClick={props.onClickDelete} slot="end"> 
        <IonLabel>Delete</IonLabel>
      </IonButton>
      <IonLabel>
        {props.todoText}
      </IonLabel>
    </IonItem>
)

// TodoItem as a class, can be deleted after testing the (S)FC version
/*

interface TodoItemState {
  text: string,
  checked: boolean,
  id: number,
}

class todoItem extends React.Component<TodoItemProps, TodoItemState> {
  constructor(props: TodoItemProps) {
    super(props);

    this.state = {
      text: props.todoText,
      checked: props.todoChecked,
      id: props.todoID,
    };
  };

  render() {
    return (
    <IonItem key={this.state.id}>
      <IonCheckbox checked={this.state.checked} slot=""/>
      <IonButton onClick={this.onClickDelete(this.state.id)}> 
        <IonLabel>Delete</IonLabel>
      </IonButton>
      <IonLabel>
        {this.state.text}
      </IonLabel>
    </IonItem>
    );
  };

  onClickDelete = (id: number) => {
      return undefined;
  };
};
*/
export default TodoItem;
