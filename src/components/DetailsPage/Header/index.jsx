import { Link } from "react-router-dom"
import Icon from "../../../assets/details-page-icon.svg"
import "./style.scss"


function Header() {
  return (
    <div className="header">
        <img src={Icon} alt="" />
        <ul>
            <li>  
              <Link to={"/"}>
                Movies
              </Link> 
            </li>
            <li>TV Shows</li>
            <li>Suggest me</li>
        </ul>
    </div>
  )
}

export default Header