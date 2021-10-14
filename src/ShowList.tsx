type data = {
  id: number;
  content: string;
  toDo: boolean;
};

const ShowList = ({ listData }: { listData: data[] }) => {
  return (
    <div>
      {listData.map((data: data) => (
        <div>
          <p>{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
