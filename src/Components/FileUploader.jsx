import React from "react";
import { useRef } from "react";

// This component helps us to get rid of the default style of the input file tag and instead
// accept children as props. 

const FileUploader = (props) => {

  const hiddenFileInput = useRef(null);

  // handleClick function helps us to click the input tag even tho it's not visibly displayed in
  // our component
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  
  // handleChange function helps us to accept the chosen file and and send it to outer component
  const handleChange = event => {
    const fileUploaded = event.target.files[0];

    // The code below calls a function located in the parent component called Certifications
    // which from there I use the acquired data accordingly (example: display the file's name)
    props.chooseFile(fileUploaded)
  };

  return(
    <div onClick={handleClick} className="fileUploader">
      {props.children}
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </div>
  )
}

export default FileUploader;