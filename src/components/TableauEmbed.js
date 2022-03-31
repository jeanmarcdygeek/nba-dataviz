import React,{useRef,useEffect} from "react";


const {tableau} = window

function TableauEmbed(props) {
    const defaultURL = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms"
    const ref = useRef(null)
    const [viz,setViz] = React.useState(null)
    
    const initViz = () => {
        let options = {
            'device' :"desktop"
        }
        if(!viz){
            let url = props.url ? props.url : defaultURL;
            setViz(new tableau.Viz(ref.current,url,options))
        } else {
            viz.dispose()
            let url = props.url ? props.url : defaultURL;
            setViz(new tableau.Viz(ref.current,url,options))


        }
        
    }

    useEffect(
        ()=>{
            initViz()
        },
        [props.url]
    )

    return (
      <div className="TableauEmbed">
         <div ref={ref}></div>
      </div> 
    );
  }
  
  export default TableauEmbed;