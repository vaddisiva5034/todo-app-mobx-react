import { observer } from "mobx-react";
import { useState } from "react";
import { useStore } from "../../Hooks/useStore";

export const InputBoxComponent = observer(() => {
  const [value, setValue] = useState("");
  const { store: appStore } = useStore();
  const { todoStore: store } = appStore;
  const handleClick = () => {
    if (value) {
      store.addItem(value);
      setValue("");
    }
  };

  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleClick}>+</button>
    </>
  );
});
