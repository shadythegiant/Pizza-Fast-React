import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="my-10 text-center sm:my-[10rem] px-3">
      <h1 className="text-xl  text-sky-300 font-semibold  mb-4 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          {" "}
          Straight out of the oven, straight to you.
        </span>{" "}
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
