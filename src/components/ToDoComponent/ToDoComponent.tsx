import { observer } from "mobx-react";

import { ListComponent } from "../ListComponnet/ListComponnet";
import { useEffect } from "react";
import { useStore } from "../../Hooks/useStore";

export const ToDoComponent = observer(() => {
  const { store: appState } = useStore();
  const { todoStore, userStore } = appState;
  useEffect(() => {
    console.log(userStore.name);
    todoStore.loadData();
  }, []);

  return (
    <>
      <h1>functional component</h1>
      <ListComponent data={todoStore.todoList} keyName="id" />
    </>
  );
});
