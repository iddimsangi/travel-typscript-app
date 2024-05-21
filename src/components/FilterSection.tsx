import React from "react"
import Button from "./Button"

interface Props{
    clearItemsHandler:() => void,
    setSortedItemsKeyWord: React.Dispatch<React.SetStateAction<string>>,
    sortedItemsKeyWord:string
}
const FilterSection = ({clearItemsHandler, setSortedItemsKeyWord, sortedItemsKeyWord}:Props) => {
  return (
    <div className="flex justify-center space-x-3 w-full items-center">
            <select value={sortedItemsKeyWord} className="py-2 px-3 rounded-lg shadow-md" onChange={(e) => setSortedItemsKeyWord(e.target.value)}>
              <option value="orders">Sort by Inputs Orders</option>
              <option value="descriptions">Sort by Descriptions</option>
              <option value="packed status">Sort by Package status</option>
            </select>
            <Button onClickHandler={clearItemsHandler} bgColor="bg-lime-600">Clear items</Button>
          </div>
  )
}

export default FilterSection