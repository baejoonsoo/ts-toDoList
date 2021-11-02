export interface dataListType {
  id: number;
  content: string;
  toDo: boolean;
}

export interface wordProps {
  data: dataListType;
  changeData: (data: dataListType) => void;
}
