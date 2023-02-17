import { CgArrowsExchangeV } from "react-icons/cg";

export function StakeholdersFieldData(){
    return (
        <section className="w-full flex py-3">
            <div className="w-1/4 flex items-center bg-trinity justify-center text-white py-1">
                    Nome do StakeHolder <CgArrowsExchangeV/>
            </div>
            <div className="w-1/4 flex items-center bg-trinity justify-center text-white">
                    Instituição <CgArrowsExchangeV/>
            </div>
            <div className="w-1/4 flex items-center bg-trinity justify-center text-white">
                    Cargo <CgArrowsExchangeV/>
            </div>
            <div className="w-1/4 flex items-center bg-trinity justify-center text-white">
                   Favorabilidade <CgArrowsExchangeV/>
            </div>
            <div className="w-1/4 flex items-center bg-trinity justify-center text-white">
                   Status <CgArrowsExchangeV/>
            </div>
        </section>
    )
}