import React, {useState} from "react";

export default function Textarea(props) {
    const handleonchange=(event)=>{
        // console.log('on change');
        setText(event.target.value);
        
    }
    const handleUpClick=()=>{
        // console.log('Uppercase'+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("uppercase converted","success")
        
    }
    const handleCopy=()=>{
        let Text=document.getElementById('exampleFormControlTextarea1');
        Text.select();
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Text copy","success")
    }
    const handleSpace=()=>{
        let text1=text.split(/[ ]+/);
        setText(text1.join(" "));
        
    }
    const [text,setText] = useState('');
    // setText("new value");
  
  return (
    <div>
      <div className="container my-3" style={{color: props.mode ==='light'?'black':' white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            id="exampleFormControlTextarea1" value={text} onChange={handleonchange}
            rows="8" style={{backgroundColor: props.mode ==='light'?' white':'black',color: props.mode ==='light'?'black':' white'}}>
            </textarea>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-3" onClick={handleSpace}>Remove Extra Space</button>
        </div>
      </div>
      <div className="container my-2 " style={{color: props.mode ==='light'?'black':' white'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'enter something to preview it here'}</p>
      </div>
    </div>
  );
}
