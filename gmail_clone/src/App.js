import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex bg-slate-200">
      <div className="h-screen w-1/4 border-2 border-black">
        <Sidebar></Sidebar>
      </div>
      <div className="border-2 w-screen border-black">
        <div className="border-2 border-black h-16">
          <Header></Header>
        </div>
        <div className="">Content</div>
      </div>
      <div className="w-24 h-screen">rightBar</div>
    </div>
  );
}

export default App;
