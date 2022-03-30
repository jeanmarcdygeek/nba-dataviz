import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";
import './App.css';
import TopBar from './components/TopBar';
import SideBar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Filters from './components/Filters';
import TableauEmbed from './components/TableauEmbed';
import DistributionPlots from './screens/DistributionPlots';
import TeamComparisonPlots from './screens/TeamComparisonPlot';

const links = [
  "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
  "https://public.tableau.com/views/NBAMAP/Sheet1",
  "https://public.tableau.com/shared/FPF8YTYBB"
]

function App() {
  const [currentScreen,setCurrentScreen] = React.useState(null)

  React.useEffect(()=>{
    console.log(currentScreen)
  },[currentScreen])

  return (
    <div className="App">
      <SideBar changeScreen={setCurrentScreen}></SideBar>
      <div className="DashBoard-Container">
        <Filters currentScreen={currentScreen}></Filters>
        {currentScreen === null ?(
          <Dashboard currentScreen={0}></Dashboard>
        ):(
          <>
                    {
                        currentScreen === 1 ? (
                            <>
                                <TableauEmbed url="https://public.tableau.com/views/NBAMAP/Sheet1"></TableauEmbed>
                            </>
                        ):( <>
                            {
                                currentScreen == 2 ? (
                                    <>
                                        <TableauEmbed url="https://public.tableau.com/shared/FPF8YTYBB"></TableauEmbed>
                                    </>
                                    ) : (
                                        <>
                                            {
                                                currentScreen == 3 ? (
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
        )}
        
      </div>

    </div>
  );
}

export default App;
