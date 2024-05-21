import Button from "./Button";
import { ItemTypes } from "../App";
import {  useState } from "react";
interface PropsTypes {
  addItemHandler: (newItem: ItemTypes) => void;
}
const Header = ({ addItemHandler }: PropsTypes) => {
  const [itemNumber, setItemNumber] = useState<number>(1);
  const [item, setItem] = useState<string>("");
  const submitHandler = () => {
    
    const newInputItem: ItemTypes = {
      id: crypto.randomUUID(),
      item_name: item,
      items_number: itemNumber,
      isPacked: false,
    };
    addItemHandler(newInputItem);
    setItem("");
    setItemNumber(1);
  };
  return (
    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 justify-between p-3 bg-orange-600  items-center">
      <h2>What do you need for your {"emoji"} trip?</h2>
      <select
        className="px-4 py-3 rounded-lg"
        value={itemNumber}
        onChange={(e) => setItemNumber(Number(e.target.value))}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <input
        type="text"
        placeholder="items..."
        onChange={(e) => setItem(e.target.value)}
        value={item}
        className=" px-4 py-2 border-2 focus:outline-none rounded-lg w-80 bg-slate-300"
      />
      <Button bgColor="bg-blue-300" onClickHandler={submitHandler}>
        Add
      </Button>
    </div>
  );
};

export default Header;
