import { FaBeer, FaBell, FaUserAlt } from "react-icons/fa"

export function Nav() {
  return (
    <nav className="w-full h-12 bg-slate-600">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between text-white">
        <div><FaBeer /></div>

        <input className="w-96 h-9 rounded-md placeholder:px-4"
          placeholder="Pesquisar no sistema" />

        <div className="w-14 flex justify-between">
          <FaBell/>
          <FaUserAlt/>
        </div>

      
      </div>
    </nav>
  )
}