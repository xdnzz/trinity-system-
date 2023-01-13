import { Routes } from "./routes/route";
import "./global.css";
import { Nav } from "./components/Nav/Nav";



function App() {

  return (
    <div className="App w-screen h-screen   flex flex-row justify-center">
      <main className="w-[85.375rem] justify-center items-center">
        <Nav />
        <Routes />
      </main>
    </div>
  )
}

export default App
