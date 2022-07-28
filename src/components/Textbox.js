import React, {useState} from 'react'


export default function TextBox(props) {
    const [text, setText] = useState("");

    const UpClick =() => {
        // console.log("UpperCase was clicked");
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }    

    const LowClick =() => {
        // console.log("LowerCase was clicked");
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }


    const combineClick =() => {
        // console.log("join was clicked");
        let newText= text.split(/[ ]/);
        setText(newText.join(""))
        props.showAlert("Combined everything","success")
    }

    const kebabCase =() => {
        // console.log("join was clicked");
        let newText= text.split(/[ ]/ || /_/);
        setText(newText.join("-"))
        props.showAlert("Kebab case applied","success")
    }
    const snakeCase =() => {
        // console.log("join was clicked");
        let newText= text.split(/[ ]/);
        setText(newText.join("_"))
        props.showAlert("Snake case applied","success")
    }

    const ExtraSpaces =() => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed","success")
    }

    const copyText =() => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success")
    }
    const ClearClick =() => {
        // console.log("ClearClick was clicked");
        let newText= ("");
        setText(newText)
        props.showAlert("Cleared your texts","warning")
    }

    const handleOnChange =(event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    // const capitalize=() =>{
    //     let  newText = text.toLowerCase;
    //     setText(newText.charAt(0).toUpperCase() + newText.slice(1));
    //     props.showAlert("capitalised","success")
    // }

    // const capitalize=() =>{
    //     let  newText = text.charAt(0).toUpperCase() + text.slice(1);
    //     setText(newText);
    //     props.showAlert("capitalised","success")
    // }

  return (
    <>  
    <div className='container' style={{color: props.mode==='light'?'#232526':'#fbbb2d'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} /*style={{backgroundColor: props.mode==='light'?'white':'white'}}*/ id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={UpClick}>CONVERT UPPERCASE</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={LowClick}>convert lowercase</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={combineClick}>combineTEXT</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={kebabCase}>Kebabcase-Text</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={snakeCase}>Snakecase_Text</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={ExtraSpaces}>Remove Extra spaces </button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={copyText}>Copy Text </button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={ClearClick}>Clear Text </button>
    </div>
    <div className="container my-2" style={{color: props.mode==='light'?'#232526':'#fbbb2d'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0 }).length} words and {text.length} characters.</p>
        <h2>Preview</h2>
        <p rows="7">{text.length>0?text:"Ooopppps...No Text..."}</p>
    </div>
    <div style={{color: props.mode==='light'?'red':'red'}}>
        <h3 my-4>Upcoming Text Functions</h3>
        <button className="btn btn-danger mx-2 my-1" disabled>Invert Text Case</button>
        <button className="btn btn-danger mx-2 my-1" disabled>Shuffle Text</button>
        <button className="btn btn-danger mx-2 my-1" disabled>Find and Replace</button>
        <button className="btn btn-danger mx-2 my-1" disabled>capitalText </button>
    </div>
    </>
  )
}
