interface IIssuesPriority {
    issues: string;
    issuesAmount: number;
}

interface IHomeFilter {
    name: string;
}

interface IPriorityTable {
    results: number;
}

interface IIssuesOnAlert {
    issue: string;
    priority: string;
    score: number;
}

interface IStackholdersOnAlert {
    stackholderName: string;
    medium: number;
}