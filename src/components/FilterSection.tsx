import Button from "./Button"

interface Props{
    clearItemsHandler:() => void
}
const FilterSection = ({clearItemsHandler}:Props) => {
  return (
    <div className="flex justify-center space-x-3 w-full items-center">
            <select className="py-2 px-3 rounded-lg shadow-md">
              <option>Sort by checked</option>
              <option>Sort by Number of items</option>
              <option>Sort by Alphabetical order</option>
            </select>
            <Button onClickHandler={clearItemsHandler} bgColor="bg-lime-600">Clear items</Button>
            {/* <button className=" py-2 bg-lime-600 px-4 rounded-lg " onClick={clearItemsHandler}>
              Clear items
            </button> */}
          </div>
  )
}

export default FilterSection