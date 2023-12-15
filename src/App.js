import Content from "./components/Content";
import Header from "./components/Header";
import RightSideBar from "./components/RightSideBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex bg-slate-200">
      <div className="h-screen w-1/4 ">
        <Sidebar></Sidebar>
      </div>
      <div className="w-screen ">
        <div className=" border-black h-16">
          <Header></Header>
        </div>
        <div className="h-5/6  border-black rounded-t-xl bg-slate-100">
          <Content></Content>
        </div>
      </div>
      <div className="w-24">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}

export default App;
