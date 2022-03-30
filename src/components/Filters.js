
const TITLES = [
  "Welcome Dear User",
  "NBA Drafted players origins",
  "NBA Drafting strategy evolution",
  "Compare two teams players",
  "Distributions of Drafted players",
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