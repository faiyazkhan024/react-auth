import Header from "./components/Header";
import Join from "./pages/Join";

const App = () => {
  return (
    <>
      <Header />
      <main className="px-4 pt-2 pb-8 h-[calc(100vh-96px)] space-y-8 flex flex-col lg:flex-row lg:items-center lg:justify-evenly">
        <Join />
      </main>
    </>
  );
};

export default App;
