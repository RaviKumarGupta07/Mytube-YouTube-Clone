const Button = ({name})=>{
    return (
        <div className="m-2">
            <button
            className="p-2 w-full bg-gray-300 rounded-lg "
            >{name}</button>
        </div>
    )
}
export default Button ;