import { Link } from "react-router-dom"
import ApnaTv from "../../../assets/ApnaTV.svg"
import SearchIcon from "../../../assets/SearchIcon.svg"
import BellIcon from "../../../assets/BellIcon.svg"
import "./style.scss"

function Header() {
  return (
    <header>
        <div className="header-left">
            <p>Movies</p>
            <p>
                <Link to={"/favorites"}>
                    Favorites
                </Link>
            </p>
        </div>
        <div className="header-center">
            <img src={ApnaTv} alt="ApnaTv logo" />
        </div>
        <div className ="header-right">
            <img src={SearchIcon} alt="Search icon" />
            <img src={BellIcon} alt="Bell icon" />
            <p>Sign Up</p>
        </div>
    </header>
);

}

export default Header