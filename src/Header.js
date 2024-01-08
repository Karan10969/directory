import logo from './images/header-logo.png'

export default function Header(){

    return(
        <div className="header-container">

            <img src={logo} className="header-logo"></img>
            <span className="header-text"> This City offers A LOT!! </span>
            {/* <span className="react">React Project</span> */}

        </div>
    )
}