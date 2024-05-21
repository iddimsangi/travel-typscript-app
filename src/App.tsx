import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { Head } from "./components/Head";
import Header from "./components/Header";
import Main from "./components/Main";
export interface ItemTypes {
  id: number | string;
  item_name: string;
  isPacked: boolean;
  items_number: number;
}
function App() {
  const [items, setItems] = useState<ItemTypes[]>(() => JSON.parse(localStorage.getItem("items") || ""));
  const [sortedItemsKeyWord, setSortedItemsKeyWord] = useState<string>("");

  let renderedItems: ItemTypes[] = items;

  if (sortedItemsKeyWord === "orders") renderedItems = items;

  if (sortedItemsKeyWord === "descriptions") {
    renderedItems = items
      .slice()
      .sort((a, b) => a.item_name.localeCompare(b.item_name));
  }

  if (sortedItemsKeyWord === "packed status") {
    renderedItems = items
      .slice()
      .sort((a, b) => Number(a.isPacked) - Number(b.isPacked));
  }

  const addItemHandler = (newItem: ItemTypes) => {
    setItems((items) => [newItem, ...items]);
  };
  const packingChecker = (itemId: string | number) => {
    const updatedItems = items.map((item) =>
      itemId === item.id ? { ...item, isPacked: !item.isPacked } : item
    );
    setItems(updatedItems);
  };

  const deleteItemHandler = (itemId: string | number) => {
    const updates = items.filter((item) => item.id !== itemId);
    setItems(updates);
  };

  const clearItemsHandler = () => setItems([]);
useEffect(() => {
  localStorage.setItem("items", JSON.stringify(items))
},[items]);

// useEffect(() => {
//   const myItems = JSON.parse(localStorage.getItem("items") || "");
//   if (myItems) {
//     setItems(myItems)
//   }
// },[])
  return (
    <div className=" h-screen flex justify-center items-center bg-yellow-500">
      <div className=" p-4 w-1/2 flex flex-col shadow-lg bg-slate-50">
        <Head />
        <Header addItemHandler={addItemHandler} />
        <Main
          sortedItemsKeyWord={sortedItemsKeyWord}
          setSortedItemsKeyWord={setSortedItemsKeyWord}
          renderedItems={renderedItems}
          clearItemsHandler={clearItemsHandler}
          deleteItemHandler={deleteItemHandler}
          packingChecker={packingChecker}
        />
        <Footer items={items} />
      </div>
    </div>
  );
}

export default App;
