import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <div className="bg-yellow-500 uppercase px-5  sm:px-6 py-3  border-b border-stone-200 flex items-center justify-around">
      {/* letter spacing for Link  */}
      <Link to="/" className="tracking-widest">
        {" "}
        Fast Pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
}
