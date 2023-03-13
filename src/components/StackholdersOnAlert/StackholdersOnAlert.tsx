import { StakeholdersFieldData } from "./StakeHoldersFieldData";

export function StackholdersOnAlert({stackholderName, medium}: IStackholdersOnAlert) {
	return(
		<div className="w-[33.0625rem]">
			<h1 className="w-full text-2xl text-slate-600 font-bold">Stackholders em alerta</h1>
			<div className="w-full flex bg-slate-600 text-white pt-3">
				<div className="ml-2 w-64 h-9">Nome</div>
				<div className="w-64 h-9">Média</div>
			</div>

			<div className="w-full flex pt-3">
				<div className="ml-2 w-64 h-9">{stackholderName}</div>
				<div className="w-64 h-9">{medium}</div>
				
			</div>

		</div>
	)
}