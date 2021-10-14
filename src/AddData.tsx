type dataType = {
  id: number;
  content: string;
  toDo: boolean;
};

type propType = {
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  list: dataType[];
};

const AddData = ({ setData, list }: propType) => {
  const add = () => {
    setData([
      ...list,
      {
        id: 10,
        content: "test",
        toDo: false,
      },
    ]);
  };

  return <button onClick={add}>button</button>;
};

export default AddData;
