import React,{useRef,useEffect} from "react";

const {tableau} = window

function TableauEmbed(props) {
    const defaultURL = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms"
    const ref = useRef(null)
    
    const initViz = () => {
        let url = props.url ? props.url : defaultURL;
        while (ref.current.hasChildNodes()) {
            ref.current.removeChild(ref.current.lastChild);
        }
        new tableau.Viz(ref.current,url)
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