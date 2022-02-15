import { makeAutoObservable } from "mobx";
import { AppStore } from "./AppStore";

export class UserStore {
  name = "test";
  constructor(private appStore: AppStore) {
    makeAutoObservable(this);
  }

  updateName(name: string) {
    this.name = name;
  }

  getWelcomeMessage() {
    return `hello ${this.name}`;
  }
}
