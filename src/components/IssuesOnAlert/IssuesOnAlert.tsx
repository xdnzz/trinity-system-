export function IssuesOnAlert({issue, priority, score}: IIssuesOnAlert) {
	return(
		<div className="w-[33.0625rem] border-2">
			<h1 className="w-full border-2 text-2xl font-bold">Issues em alerta</h1>

			<div className="w-full border-2">
				<span>Issue</span>
				<span>Prioridade</span>
				<span>Score</span>
			</div>

			<div>
				<span>{issue}</span>
				<span>{priority}</span>
				<span>{score}</span>
			</div>
		</div>
	)
}