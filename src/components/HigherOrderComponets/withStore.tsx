import { inject } from "mobx-react";

export const withStore = (component: any) => {
  return inject("store")(component);
};
