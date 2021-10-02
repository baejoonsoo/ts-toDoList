type PropType = {
  name: string;
  age: number;
  onClick: () => void;
};

const Greeting = ({ name, age, onClick }: PropType) => {
  const click = () => onClick();
  return (
    <div onClick={click}>
      Hello! I'm {name}[{age}]
    </div>
  );
};

export default Greeting;
