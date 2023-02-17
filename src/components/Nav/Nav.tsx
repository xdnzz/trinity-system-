import { FaBeer, FaBell, FaUserAlt } from "react-icons/fa";

export function Nav() {
  return (
    <nav className="w-full h-20 bg-slate-600 flex">
      <div className="w-full max-w-7xl m-auto flex items-center justify-between text-white">
        <div><FaBeer/></div>
        <input
          className="w-96 h-9 rounded-md placeholder:px-4  text-zinc-800 p-2"
          placeholder="Pesquisar no sistema"
          onChange={(e:any)=>console.log(e.target.value)}
        />
        <div className="w-14 flex justify-between">
          <FaBell />
          <FaUserAlt />
        </div>
      </div>
    </nav>
  )
}