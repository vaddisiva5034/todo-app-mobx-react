import { Provider } from "mobx-react";
import { appstore } from "../../store/store";
import { InputBoxComponent } from "../InputBoxComponent/InputBoxComponent";
import ToDOClassComponent from "../ToDoComponent/ToDOClassComponent";
import { ToDoComponent } from "../ToDoComponent/ToDoComponent";

export const ToDoMobxComponent = () => {
  return (
    <Provider store={appstore}>
      <InputBoxComponent />
      <hr />
      <ToDoComponent />
      <hr />
      <ToDOClassComponent />
    </Provider>
  );
};
