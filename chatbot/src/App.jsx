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
            <img className="chatImg" src={usericon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              incidunt inventore mollitia molestias voluptatibus sequi quisquam
              sunt cum est vitae?
            </p>
          </div>
          <div className="chat">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p className="txt">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis explicabo cupiditate harum architecto, dolorum sit illo natus doloribus quod fugiat excepturi totam labore ratione magnam adipisci sint minima est sequi, minus enim! Laudantium iusto suscipit quam corrupti nesciunt accusamus quo deserunt autem, officiis obcaecati. Aliquam voluptatem, amet eum incidunt exercitationem, ipsum iste natus vero nam nemo omnis labore consequatur. Nesciunt, iusto enim? Odit eveniet repellat maiores officia voluptates reprehenderit, autem inventore sint laudantium ullam dolore corporis non consectetur molestiae quos consequatur iure ipsam voluptatibus consequuntur aliquam commodi! Minus animi beatae consequuntur iure omnis, blanditiis, possimus ad quis error consectetur ipsam?
            </p>
          </div>
        </div>

        <div className="chatFooter">
          <div className="inp">
          <input  type="text" placeholder="Send a Message..." />
          <button className="send">
            <img src={sendbtn} alt="sedn" className="sendImg" />
          </button>

          </div>
          <p>Chatgpt model is been on testing so the answer wont be accurate</p>
        </div>
      </div>
    </div>
  );
}

export default App;
