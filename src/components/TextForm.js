import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");
  

  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercasecase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  };

  const handlefirstCap = () => {
    let newText = text.toLowerCase();
    let newText2 = newText.charAt(0).toUpperCase() + newText.slice(1);
    setText(newText2);
    props.showAlert("converted to capital first word.","success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text cleared !","success");
  };

  const handleTitleCaseClick = () => {
    let newText = text
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("converted to titlecase","success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("removed extra space","success");
  };

  const handleAlternatingCase = () => {
    let newtext = "";
    for (let index = 0; index < text.length; index++) {
      if (index % 2 === 0) {
        newtext += text[index].toLowerCase();
      } else {
        newtext += text[index].toUpperCase();
      }
    }
    setText(newtext);
    props.showAlert("converted to Alternatingcase","success");
  };

  // Function is able to eliminate the redundant words from the sentence or para
  const handleRedundancy = () => {
    let set1 = new Set(text.split(" "));
    let newText = Array.from(set1).join(" ");
    setText(newText);
    props.showAlert(" redundancy has been removed from sentence","success");
  };

  // this function is reversing the text
  const handlereverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("sentence has been reversed","success");
  };

  const  handlecopyText = () =>{
    // let text=document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    //document.getSelection().removeAllRanges();
    props.showAlert(" copied to Clipboard","success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  
  return (
    <>
       <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 mb='2'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(52 60 74':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}> Convert to Lowercase</button> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlefirstCap}> Sentence Case</button> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleTitleCaseClick}> Convert to Titletcase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}> Remove extra space  </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleAlternatingCase}> Convert to AlternatingCase </button>   
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRedundancy}> Remove redundancy{" "} </button>    
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlereverseText}>ReverseText </button>
        
      </div>

      <div>
      <button className="btn btn-secondary mx-2 my-3" onClick={handlecopyText}>Copy text</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleClearClick}>Clear text</button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2> your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} Words and  | {text.length} Characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes will take to read this words.
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0? text:"Nothing to preview! "}</p>
      </div>
    </>
  );
}
