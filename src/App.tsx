import { Routes } from "./routes/route";
import "./global.css";
import { Nav } from "./components/Nav/Nav";




function App() {

  return (
    <div className="App w-full h-fit flex flex-col items-center">
      <Nav />
      <main className="w-[85.375rem] justify-center items-center">
        <Routes />
      </main>
    </div>
  )
}

export default App
