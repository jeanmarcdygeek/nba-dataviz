
const TITLES = [
  "Welcome Dear User",
  "NBA Drafted players origins",
  "NBA performance tool",
  "Best performance college and 1st drafted players performances",
  "Distributions of the characteristics of Drafted players",
  "Team performances and players attribute comparisons"
]

function Filters(props) {

    
    return (
      <div className="Filters">
          <h6>
              <strong>
                {props.currentScreen ? TITLES[props.currentScreen] : "Hey Welcome on NBA VISualizer"} 
              </strong>
          </h6>
      </div> 
    );
  }
  
  export default Filters;