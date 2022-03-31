import nba_logo from "../assets/nbalogo_tiny.png"
import TopBar from "./TopBar";
import classnames from "classnames";


// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from "reactstrap";

function SideBar(props) {

    const moveToScreen = (e,screen)=>{
      e.preventDefault();
      props.changeScreen(screen)
      console.log("Pressed " + screen)
    }
    return (
      <div className="Sidebar">
          <div
            onClick={(e)=>moveToScreen(e,0)}
            className="click-div"
          >
            <TopBar></TopBar>
          </div>
          
          <p className="Desctiption">
              NBA historically drafted players visualization and comparison
          </p>

          <div className="Navivator">
            <Nav 
              className="nav-fill flex-column Mylink" 
              pills  
              role="tablist"
              id="tabs-text"
            >
              <NavItem >
                <NavLink  
                  href="#" 
                  className="NLink"
                  role="tab"
                  onClick={(e)=>moveToScreen(e,1)}
                  > 
                    Players Origins
                  </NavLink>
              </NavItem>

              <NavItem>
                <NavLink  
                  href="#" 
                  className="NLink"
                  role="tab"
                  onClick={(e)=>moveToScreen(e,2)}
                  > 
                    NBA performance tool
                  </NavLink>
              </NavItem>

              <NavItem>
                <NavLink  
                  href="#" 
                  className="NLink"
                  role="tab"
                  onClick={(e)=>moveToScreen(e,3)}
                  > 
                    Best college and draft pick 1 performance
                  </NavLink>
              </NavItem>  

              <NavItem>
                <NavLink  
                  href="#" 
                  className="NLink"
                  role="tab"
                  onClick={(e)=>moveToScreen(e,4)}
                  > 
                    Characteristics distributions
                  </NavLink>
              </NavItem>   

              <NavItem>
                <NavLink  
                  href="#" 
                  className="NLink"
                  role="tab"
                  onClick={(e)=>moveToScreen(e,5)}
                  > 
                    Team comparison
                  </NavLink>
              </NavItem>  

            </Nav>
          </div>

          
      </div>
    );
  }
  
  export default SideBar;