import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addbtn from "./assets/add-30.png";
import msgicon from "./assets/message.svg";
import homeicon from "./assets/home.svg";
import savedicon from "./assets/bookmark.svg";
import upgradeicon from "./assets/rocket.svg";

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
      <div className="main"></div>
    </div>
  );
}

export default App;
