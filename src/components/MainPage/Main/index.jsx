import Star from "../../../assets/Star.svg"
import EmptyStar from "../../../assets/EmptyStar.svg"
import PlayButton from "../../../assets/PlayButton.svg"
import "./style.scss"


function Main() {

  return (
    <main>
        <h1>STAR WARS</h1>
        <h2>THE RISE OF SKYWALKER</h2>
        <p>The surviving members of the resistance face the First Order <br /> once again,
            and the legendary conflict between the Jedi and the <br /> Sith reaches its peak
            bringing the Skywalker saga to its end.
        </p>
        <div className="stars"> 
            <img src={Star} alt="Star icon" />
            <img src={Star} alt="Star icon" />
            <img src={Star} alt="Star icon" />
            <img src={Star} alt="Star icon" />
            <img src={EmptyStar} alt="Star icon" />
        </div>
        <div className="buttons-block">
            <button className="btn-watch">
                <img src={PlayButton} alt="Play button" />
                Watch Now
            </button>
            <button className="btn-trailer">
                 Trailer
            </button>
        </div>
    </main>
  )
}

export default Main