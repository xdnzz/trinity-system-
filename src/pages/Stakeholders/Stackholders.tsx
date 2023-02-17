import { FaFilePdf, FaSearch, FaFilter, FaPlus } from "react-icons/fa";
import { StakeholdersFieldData } from "../../components/StackholdersOnAlert/StakeHoldersFieldData";

export function Stakeholders() {
	return (
		<section className="w-[68rem]  flex flex-col">
			<div className="flex justify-between my-6 w-full ">
				<p className="text-[28px]">Stakeholders</p>
				<div className="flex items-center cursor-pointer">
					<FaFilePdf color="#475569" />
					<span className="">Gerar relatório</span>
				</div>
			</div>

			<div className="h-14 border flex justify-center items-center">
				<div className="flex space-x-[400px]">
					<div className="flex items-center ">
						<FaSearch className="m-1" />
						<span className="">Busca</span>
						<input type="text" placeholder="Faça sua busca" className="w-[400px] h-[30px] p-1 m-1 rounded border outline-none" />
					</div>
					<div className="flex space-x-[360px]">
						<button className="bg-trinity flex p-2 text-cyan-50 items-center rounded">
							<FaPlus color="#ffff" />
							Novo Stakeholder
						</button>

					</div>
					
				</div>
			</div>
			<StakeholdersFieldData/>

		</section>
	)
}