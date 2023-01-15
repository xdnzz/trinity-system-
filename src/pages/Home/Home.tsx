import { useState } from "react";
import { VscListFilter } from "react-icons/vsc";



export function Home() {





    return (
        <section className="App text-gray-400 w-[68rem] border rounded h-[3.5rem]  flex items-center justify-center">
            <VscListFilter size={20} /> <span className="font-bold">Filtros</span>
            <select className="border rounded p-1 m-2 outline-none">
                <option>Gerência</option>
            </select>
            <select className="border rounded p-1 m-2 outline-none">
                <option>Status</option>
            </select>
            <select className="border rounded p-1 m-2 outline-none">
                <option>Tema</option>
            </select>
            <select className="border rounded p-1 m-2 outline-none">
                <option>País</option>
            </select>
            <select className="border rounded p-1 m-2 outline-none">
                <option>Estado</option>
            </select>
            <select className="border rounded p-1 m-2 outline-none">
                <option>Município</option>
            </select>
            <span className="underline cursor-pointer">
                Limpar Filtros
            </span>
        </section>
    )
}