import Game from "./components/Game";
function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-30 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {" "}
        <Game />
      </div>
    </>
  );
}

export default App;
