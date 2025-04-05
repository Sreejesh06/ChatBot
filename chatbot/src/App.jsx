import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addbtn from "./assets/add-30.png";
import msgicon from "./assets/message.svg";
import homeicon from "./assets/home.svg";
import savedicon from "./assets/bookmark.svg";
import upgradeicon from "./assets/rocket.svg";
import sendbtn from "./assets/send.svg";
import usericon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addbtn} alt="" className="addbtn" />
            NewChat
          </button>

          <div className="upperSideBottom">
            <button className="query">
              <img src={msgicon} alt="query" />
              What is Programming
            </button>
            <button className="query">
              <img src={msgicon} alt="query" />
              How to Use API
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={homeicon} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={savedicon} alt="" className="listItemsImg" />
            Saved{" "}
          </div>
          <div className="listItems">
            <img src={upgradeicon} alt="" className="listItemsImg" />
            Upgrade
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={usericon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              incidunt inventore mollitia molestias voluptatibus sequi quisquam
              sunt cum est vitae?
            </p>
          </div>
          <div className="chat">
            <img src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              incidunt inventore mollitia molestias voluptatibus sequi quisquam
              sunt cum est vitae?
            </p>
          </div>
        </div>

        <div className="chatFooter">
          <input className= "inp" type="text" placeholder="Send a Message..." />
          <button className="send">
            <img src={sendbtn} alt="sedn" className="sendImg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
