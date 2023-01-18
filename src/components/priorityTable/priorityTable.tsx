export function PriorityTable({results}: IPriorityTable) {
	return(
		<div className="mt-6">
		<table className="w-full divide-y divide-gray-200 border">
			<thead>
				<tr className="font-bold px-6 py-3 text-center text-xs text-grady-500 tracking-wider">
					<th></th>
					<th>Muito Remoto</th>
					<th>Remoto</th>
					<th>Pouco provável</th>
					<th>Provável</th>
					<th>Muito Provável</th>
					
				</tr>
			</thead>
			<tbody className=" text-center divide-y divide-gray-200">
				<tr className=" px-6 py-4 text-sm font-medium text-gray-900 whitespace-normal">
					<td className="font-bold">Muito crítico</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
				</tr>

				<tr className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-normal">
					<td className="font-bold">Crítico</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
				</tr>

				<tr className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-normal">
					<td className="font-bold">Grave</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
				</tr>

				<tr className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-normal">
					<td className="font-bold">Moderado</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
				</tr>

				<tr className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-normal">
					<td className="font-bold">Leve</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
				</tr>

				<tr className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-normal">
					<td className="font-bold">Muito Leve</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
					<td>{results}</td>
				</tr>
			</tbody>
		</table>
		</div>
	)
}