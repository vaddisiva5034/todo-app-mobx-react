import { observer, useLocalObservable } from "mobx-react";

export const LocalObservableCounterComponet = observer(() => {
  const store = useLocalObservable(() => ({
    counter: 0,
    incrementValue() {
      this.counter++;
    },
    decerementValue() {
      this.counter--;
    },
  }));

  return (
    <div>
      <div>{store.counter}</div>
      <div>
        <button onClick={store.incrementValue}>+</button>
        <button onClick={store.decerementValue}>-</button>
      </div>
    </div>
  );
});
