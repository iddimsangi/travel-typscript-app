import { ItemTypes } from "../App";

interface Props {
  items: ItemTypes[];
}
function Footer({ items }: Props) {
  const packedItems = items.slice().filter((item) => item.isPacked === true);
  const packedPercentage = (packedItems.length / items.length) * 100;

  return (
    <div className=" flex justify-center items-center p-5 w-full bg-green-500">
      <span className="text-2xl">📦</span>
      <h3>
        You have {items.length} items on your list, and you already packed{" "}
        {packedItems.length} ({items.length > 0 ? Math.trunc(packedPercentage) : 0}%)
      </h3>
    </div>
  );
}

export default Footer;
