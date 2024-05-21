import { ItemTypes } from "../App"
import FilterSection from "./FilterSection"
import Item from "./Item"
interface PropsType{
    items:ItemTypes[],
    packingChecker:(id:string | number) => void,
    deleteItemHandler:(id:string | number) => void,
    clearItemsHandler:() => void
}
const Main = ({items, packingChecker, deleteItemHandler, clearItemsHandler}:PropsType) => {
  return (
    <div className="bg-yellow-900 flex flex-col py-6 px-4 ">
          <div className=" grid grid-cols-3 justify-between gap-2 py-2">          
           {
            items.map((item) => <Item key={item.id} item={item} deleteItemHandler={deleteItemHandler} packingChecker={packingChecker}/>)
           }
          </div>
         <FilterSection clearItemsHandler={clearItemsHandler}/>
        </div>
  )
}

export default Main