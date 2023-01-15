
export function IssuesPriority({issues, issuesAmount}:IIssuesPriority){
    return (
        <div className="w-[198.4px] h-[120px] border rounded border-gray-300 flex flex-row items-center justify-center">
              <div>
                <p className="font-bold text-4xl text-cyan-800">{issuesAmount}</p>
                <p className="font-bold text-lg text-gray-500">{issues}</p>
              </div>
        </div>
    )
}