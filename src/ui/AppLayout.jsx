import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(navigation);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      {/* ----------- Header component  -----------------  */}
      <Header />

      {/* ------------ Main  ---------------------- */}
      <div className="overflow-scroll">
        <main className=" max-w-3xl  scroll-width-0 mx-auto">
          <Outlet />
        </main>
      </div>

      {/* ----------- CartOverView -------------------  */}
      <CartOverview />
    </div>
  );
}
