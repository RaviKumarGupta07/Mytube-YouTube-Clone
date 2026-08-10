import { useSelector } from "react-redux";

const SideBar = () =>{
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

    if(isMenuOpen===false) return null ;

    return (
        <div className="w-56 bg-gray-50 p-5 shadow-lg">

            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>

            <h2 className="font-bold mt-2">Subscriptions</h2>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <h2 className="font-bold mt-2" >Watch Later</h2>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>


        </div>
    )
}

export default SideBar ;