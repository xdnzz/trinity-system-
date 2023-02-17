export function IssuesOnAlert({issue, priority, score}: IIssuesOnAlert) {
	return(
		<div className="w-[33.0625rem]">
			<h1 className="w-full text-slate-600 text-2xl font-bold">Issues em alerta</h1>

			<div className="w-full flex bg-slate-600 text-white pt-3">
				<div className="ml-2 w-64 h-9">Issue</div>
				<div className="w-24 h-9">Prioridade</div>
				<div className="w-24 h-9">Score</div>
			</div>

			<div className="w-full flex pt-3">
				<div className="ml-2 w-64 h-9">{issue}</div>
				<div className="w-24 h-9">{priority}</div>
				<div className="w-24 h-9">{score}</div>
			</div>
		</div>
	)
}