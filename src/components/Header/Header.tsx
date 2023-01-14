import { FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Header() {
	return(
		<div className=" w-full h-30">
			<div className="w-full h-10 max-w-7xl m-auto flex items-center text-slate-600 py-8">
				<FaHandshake className="w-12 h-9"/>
				<h1 className="text-2xl px-2">Relações Institucionais e Governamentais</h1>
			</div>

			<ul className=" w-full max-w-7xl m-auto flex items-center">
				<Link to="/" className="hover:border-b-2 border-slate-600 w-36 h-12 cursor-pointer py-2 px-6">Home</Link>
				<Link to="/stackholders" className="hover:border-b-2 border-slate-600 w-36 h-12 cursor-pointer py-2 px-6">Stakeholders</Link>
				<Link to="/issues" className="hover:border-b-2 border-slate-600 w-36 h-12 cursor-pointer py-2 px-6">Issues</Link>
				<Link to="/actions" className="hover:border-b-2 border-slate-600 w-36 h-12 cursor-pointer py-2 px-2">Ação e Interação</Link>
				<Link to="/demands" className="hover:border-b-2 border-slate-600 w-36 h-12 cursor-pointer py-2 px-6">Demandas</Link>
				<Link to="/normative" className="hover:border-b-2 border-slate-600 w-36 h-12 cursor-pointer py-2 px-6">Normativo</Link>
				<Link to="/indicators" className="hover:border-b-2 border-slate-600 w-36 h-12 cursor-pointer py-2 px-6">Indicadores</Link>
			</ul>
		</div>
	)
}