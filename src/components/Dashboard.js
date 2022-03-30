import React from "react";
import FieldPlots from "../screens/FieldPlots";
import DistributionPlots from "../screens/DistributionPlots";
import MapPlots from "../screens/MapPlots";
import TeamComparisonPlots from "../screens/TeamComparisonPlot";
import mean_curry from "../assets/stephen-curry-mean.gif"

const TITLES = [
    "Welcome Dear User",
    "NBA Drafted players origins",
    "Characteritics of drafted players by position",
    "Compare two teams players",
    "Distributions of Drafted players",
]


function Dashboard(props) {
    React.useEffect( 
        () => {
            console.log(props.currentScreen)
        },
    [props.currentScreen])
    return (
      <div className="DashBoard">
            <h6 className="SectionTitle">
                <strong>
                    {props.currentScreen ? TITLES[props.currentScreen] : "Welcome dear User"}  
                </strong>
            </h6>
            {props.currentScreen ? 
            (
                <>
                    {
                        props.currentScreen === 1 ? (
                            <>
                                <MapPlots></MapPlots>
                            </>
                        ):( <>
                            {
                                props.currentScreen == 2 ? (
                                    <>
                                        <FieldPlots></FieldPlots>
                                    </>
                                    ) : (
                                        <>
                                            {
                                                props.currentScreen == 3 ? (
                                                    <>
                                                        <TeamComparisonPlots></TeamComparisonPlots>
                                                    </>
                                                ) : (
                                                    <>
                                                        <DistributionPlots></DistributionPlots>
                                                    </>
                                                )
                                            }
                                        </>
                                    )
                            }
                            </>
                        )
                    }
                </>
            ) 
            :
            (
                <>
                    <p>
                        Welcome in our visualization tool for NBA drafted players.
                        Our Graphs are based on the Kaggle Dataset "NBA Players stats since 1950" you can find 
                        <a href='https://www.kaggle.com/datasets/drgilermo/nba-players-stats' target="_blank"> here.</a>
                        Our purpose is to show you the evolution of the characteristics of the NBA league players throughout years since 1950.
                        Be aware that the dataset started to be recorded way after the begining of the NBA league, so data between 1950 and 2000 should be
                        considered carefully.
                        <br></br>
                        
                        

                    </p>

                    <img src={mean_curry}></img>
                    <p>
                        <br></br>
                        Enjoy 😀😀😀
                        <br></br>
                        Jean-Marc, Lionel, Arthur and Paul-Henry
                    </p>
                </>
        )}


      </div> 
    );
  }
  
  export default Dashboard;