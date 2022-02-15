import { observer } from "mobx-react";

interface ListComponentProps {
  data: any[];
  keyName: string;
}
export const ListComponent = observer(
  ({ data, keyName }: ListComponentProps) => {
    return (
      <ul>
        {data?.map((item) => (
          <li key={item[keyName]}>{item.title}</li>
        ))}
      </ul>
    );
  }
);
