import { ItemTypes } from "../App"

interface Props{
    item:ItemTypes,
    packingChecker:(id:string | number) => void,
    deleteItemHandler:(id:string | number) => void
}
function Item({item, packingChecker, deleteItemHandler}:Props) {
    const{id, item_name, items_number, isPacked} = item;
  return (
    <div className=" flex items-center space-x-2">
    <input
      type="checkbox"
      checked={isPacked}
      onChange={() => packingChecker(id)}
      className="p-4 bg-white focus:outline-none"
    />
    <h3 className={`text-white ${isPacked ? "line-through":""}`}>{`${items_number} ${item_name}`}</h3>
    <span onClick={() => deleteItemHandler(id)} className="text-2xl text-red-600 cursor-pointer"> &times; </span>
  </div>
  )
}

export default Item