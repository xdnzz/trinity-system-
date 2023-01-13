import { Routes } from "./routes/route";
import "./global.css";



function App() {

  return (
    <div className="App w-screen h-screen bg-slate-600  flex flex-row justify-center">
      <main className="w-[85.375rem] justify-center items-center">
        <Routes />
      </main>
    </div>
  )
}

export default App
