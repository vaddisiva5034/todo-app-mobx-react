import { observer } from "mobx-react";
import { Component } from "react";
import { MobxContext } from "../../Hooks/useStore";

import { withStore } from "../HigherOrderComponets/withStore";
import { ListComponent } from "../ListComponnet/ListComponnet";

interface ToDoClassComponentProps extends MobxContext {}

class ToDoClassComponent extends Component<ToDoClassComponentProps> {
  render() {
    const { store } = this.props;
    const { todoStore } = store;

    return (
      <>
        <h1>class component</h1>
        <ListComponent data={todoStore.todoList} keyName={"id"} />
      </>
    );
  }
}

export default withStore(observer(ToDoClassComponent));
