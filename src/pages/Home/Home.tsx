import { VscListFilter } from "react-icons/vsc";
import { HomeFilter } from "../../components/HomeFilter/HomeFilter";
import { IssuesOnAlert } from "../../components/IssuesOnAlert/IssuesOnAlert";
import { IssuesPriority } from "../../components/IssuesPriority/IssuesPriority";
import { GlobalModal } from "../../components/Modal/GlobalModal";
import { PriorityTable } from "../../components/priorityTable/priorityTable";
import { FiPocket } from "react-icons/fi";
import { Modal } from "../../components/Modal/Modal";import { StackholdersOnAlert } from "../../components/StackholdersOnAlert/StackholdersOnAlert";


export function Home() {
    return (
        <div className="w-full  flex flex-col justify-center items-center">
            {/* <GlobalModal>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, ab? Veritatis, deleniti neque reprehenderit ullam, sapiente amet error, aliquid soluta necessitatibus voluptatum cum eligendi eius sit odit maiores sunt optio.
            </GlobalModal> */}
            {/* <Modal/> */}
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

            <div className="w-10/12">
                <h1 className="border-b-2 text-2xl font-bold text-slate-600">Matriz de issues</h1>

                <PriorityTable results={0} />

            </div>

            <div className="flex gap-7 p-3 align-center justify-center w-full">
                <IssuesOnAlert issue={"descrição"} priority={"Alta"} score={88.4}/>

                <StackholdersOnAlert stackholderName="Nome" medium={100}/>
            </div>
        </div>
    )

}