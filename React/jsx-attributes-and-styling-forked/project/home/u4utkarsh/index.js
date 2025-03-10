import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Hobbies</h1>
    <img alt="random" src={img} />
    <div>
      <img
        className="hobbies-img"
        alt="cricket"
        src="https://images.forbesindia.com/media/images/2023/Oct/img_220741_cricket.jpg"
      />
      <img
        className="hobbies-img"
        alt="music"
        src="https://live-production.wcms.abc-cdn.net.au/a362273509f7eccdcf362bb73b3b006d?impolicy=wcms_crop_resize&cropH=788&cropW=1400&xPos=0&yPos=0&width=862&height=485"
      />
      <img
        className="hobbies-img"
        alt="travelling"
        src="https://millennium2.home.blog/wp-content/uploads/2018/12/dental-emergency-travelling-825x550.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
