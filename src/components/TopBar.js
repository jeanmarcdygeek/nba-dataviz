import nba_logo from "../assets/nbalogo_tiny.png"

function TopBar() {
    return (
      <div className="TopBar">
        <img src={nba_logo} className="Nba-logo"></img>
        <div className="Dashboard-title-blue"> NBA</div>
        <div className="Dashboard-title"> Visualizer</div>

      </div>
    );
  }
  
  export default TopBar;