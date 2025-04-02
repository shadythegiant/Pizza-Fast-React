import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button"

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opcaity-70 grayscale' : ''}`} />
      <div className="flex flex-col flex-grow pt-0.5">
        <p className="font-medium ">{name}</p>
        <p className="text-sm italic text-stone-500">{ingredients.join(", ")}</p>
        <div className="my-auto flex justify-between items-center">
         
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-semibold">Sold out</p>}
          <Button type='small'>Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
