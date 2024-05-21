import { useState } from "react";
import Footer from "./components/Footer";
import { Head } from "./components/Head";
import Header from "./components/Header";
import Main from "./components/Main";
export interface ItemTypes{
  id:number | string,
  item_name:string,
  isPacked:boolean,
  items_number:number
}
function App() {
  const[items, setItems] = useState<ItemTypes[]>([]);

  const addItemHandler = (newItem:ItemTypes) => {
    setItems((items) => [newItem, ...items]);
  }
const packingChecker = (itemId:string | number) => {
  const updatedItems = items.map((item) => itemId === item.id ? {...item, isPacked:!item.isPacked}:item);
  setItems(updatedItems);
}

const deleteItemHandler = (itemId:string | number) => {
  const updates = items.filter((item) => item.id !== itemId);
  setItems(updates)
}

const clearItemsHandler = () => setItems([]);
  return (
    <div className=" h-screen flex justify-center items-center bg-yellow-500">
      <div className=" p-4 w-1/2 flex flex-col shadow-lg bg-slate-50">
       <Head/>
        <Header addItemHandler={addItemHandler}/>
        <Main items={items} clearItemsHandler={clearItemsHandler} deleteItemHandler={deleteItemHandler} packingChecker={packingChecker}/>
        <Footer items={items}/>
      </div>
    </div>
  );
}

export default App;
