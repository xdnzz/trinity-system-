export function StackholdersOnAlert({stackholderName, medium}: IStackholdersOnAlert) {
	return(
		<div className="w-[33.0625rem] border-2">
			<h1 className="w-full border-2 text-2xl font-bold">Stackholders em alerta</h1>

			<div className="w-full border-2 flex">
				<div className="ml-2 w-64 h-11 border-2">Nome</div>
				<div className="w-64 h-11 border-2">Média</div>
				
			</div>

			<div>
				<span>{stackholderName}</span>
				<span>{medium}</span>
				
			</div>
		</div>
	)
}