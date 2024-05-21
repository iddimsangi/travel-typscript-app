import { ItemTypes } from "../App"
import FilterSection from "./FilterSection"
import Item from "./Item"
interface PropsType{
    items:ItemTypes[],
    packingChecker:(id:string | number) => void,
    deleteItemHandler:(id:string | number) => void,
    clearItemsHandler:() => void,
    setSortedItemsKeyWord:React.Dispatch<React.SetStateAction<string>>,
    sortedItemsKeyWord:string
}
const Main = ({items, packingChecker, deleteItemHandler, clearItemsHandler,sortedItemsKeyWord, setSortedItemsKeyWord}:PropsType) => {
  return (
    <div className="bg-yellow-900 flex flex-col py-6 px-4 ">
          <div className=" grid grid-cols-3 justify-between gap-2 py-2">          
           {
            items.map((item) => <Item key={item.id} item={item} deleteItemHandler={deleteItemHandler} packingChecker={packingChecker}/>)
           }
          </div>
         <FilterSection sortedItemsKeyWord={sortedItemsKeyWord} clearItemsHandler={clearItemsHandler} setSortedItemsKeyWord={setSortedItemsKeyWord}/>
        </div>
  )
}

export default Main