import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <div>
      <Link to="/"> Fast Pizza co.</Link>
      <SearchOrder />
      <p>Samadhi</p>
    </div>
  );
}
