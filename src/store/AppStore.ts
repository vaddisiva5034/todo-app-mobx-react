import { makeAutoObservable } from "mobx";
import { ToDoStore } from "./ToDoStore";
import { UserStore } from "./UserStore";

interface IAppStore {
  todoStore: ToDoStore;
  userStore: UserStore;
}

export class AppStore implements IAppStore {
  todoStore;
  userStore;
  constructor() {
    makeAutoObservable(this);
    this.todoStore = new ToDoStore(this);
    this.userStore = new UserStore(this);
  }
}
