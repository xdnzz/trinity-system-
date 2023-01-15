import { VscListFilter } from "react-icons/vsc";
import { HomeFilter } from "../../components/HomeFilter/HomeFilter";
import { IssuesPriority } from "../../components/IssuesPriority/IssuesPriority";


export function Home() {
    return (
        <div className="w-full  flex flex-col justify-center items-center">
            <section className="App text-gray-400 w-[68rem] border rounded h-[3.5rem]  flex items-center justify-center ">
                <VscListFilter size={20} /> <span className="font-bold">Filtros</span>
                <HomeFilter name="Gerência" />
                <HomeFilter name="Status" />
                <HomeFilter name="Tema" />
                <HomeFilter name="País" />
                <HomeFilter name="Estado" />
                <HomeFilter name="Município" />
                <span className="underline cursor-pointer">
                    Limpar Filtros
                </span>
            </section>
            <div className="flex gap-3 p-3 align-center justify-center w-full">
                <IssuesPriority issuesAmount={67} issues="Total de issues" />
                <IssuesPriority issuesAmount={42} issues="Prioridade muito alta" />
                <IssuesPriority issuesAmount={16} issues="Prioridade alta" />
                <IssuesPriority issuesAmount={6} issues="Prioridade média" />
                <IssuesPriority issuesAmount={2} issues="Baixa prioridade" />
            </div>
        </div>
    )

}