import React, { useState } from "react";

//  A component - it is a java script function which return something
function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="allstar.mp4" />
          <File name="fav.mp4" />
        </Folder>
        <Folder name="Code">
          <File name="dogs.html" />
          <File name="cats.js" />
        </Folder>
        <File name="dogs.png" />
        <File name="cats.png" />
      </Folder>
      <Folder name="Applications">
        <File name="cats.jpeg" />
        <File name="awe.m4v" />
      </Folder>
    </div>
  );
}

//creating a component
const Folder = (props) => {
  //const borderStyle = { border: "2px solid pink" };
  // array destrcturing
  const [isOpen, setIsOpen] = useState(true);
  const { name, children } = props;
  const folderStatus = isOpen ? "yellow folder open" : "yellow folder";
  const direction = isOpen ? "down" : "right";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <span onClick={handleClick}>
        <i className={`${folderStatus} icon`}></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: "17px" }}>
        {/* check whether the div is open */}
        {isOpen ? children : null}
      </div>
    </div>
  );
};

//creating a component called file
const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1];
  const fileIcons = {
    mp4: "music",
    jpeg: "file image",
    png: "file image outline",
    m4v: "video",
    js: "code",
    html: "code",
  };
  return (
    <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
  );
};

export default App;
