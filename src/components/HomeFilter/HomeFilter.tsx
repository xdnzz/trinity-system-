export function HomeFilter({name}:IHomeFilter) {
    return (
        <select className="border rounded p-1 m-2 outline-none">
            <option>{name}</option>
        </select>
    )
}