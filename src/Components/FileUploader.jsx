import { useRef } from "react";

const FileUploader = (props) => {

  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded)
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