import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";
import { AppStore } from "../store/AppStore";

export interface MobxContext {
  store: AppStore;
}

export const useStore = () => useContext(MobXProviderContext) as MobxContext;
