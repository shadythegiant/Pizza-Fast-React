import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(navigation);
  return (
    <div className="layout">
      {isLoading && <Loader />}
      {/* ----------- Header component  -----------------  */}
      <Header />

      {/* ------------ Main  ---------------------- */}
      <main>
        <Outlet />
      </main>

      {/* ----------- CartOverView -------------------  */}
      <CartOverview />
    </div>
  );
}
