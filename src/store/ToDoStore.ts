import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { AppStore } from "./AppStore";

export interface ToDoItem {
  id: number;
  title: string;
}

export class ToDoStore {
  todoList: ToDoItem[] = [];

  constructor(private appStore: AppStore) {
    makeAutoObservable(this);
  }

  async loadData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    runInAction(() => {
      this.todoList = response.data.splice(0, 10);
    });
  }

  addItem(item: string) {
    this.todoList.push({ title: item, id: this.todoList.length + 1 });
  }
}
