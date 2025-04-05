import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addbtn from "./assets/add-30.png";
import msgicon from "./assets/message.svg";
import homeicon from "./assets/home.svg";
import savedicon from "./assets/bookmark.svg";
import upgradeicon from "./assets/rocket.svg";
import sendbtn from "./assets/send.svg";
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
            <img src="" alt="" />
            <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci nobis labore dicta cupiditate eos enim, minima odio iste, repudiandae nihil voluptatibus impedit fugiat mollitia nulla aut ipsam consequuntur optio.
            Repudiandae natus asperiores facere consectetur molestias neque magni iste nobis, veritatis culpa dicta ex consequuntur? Perspiciatis odio sequi praesentium quia harum. Ducimus id eos expedita ut ipsam hic accusamus aliquid?
            Amet eius minus reiciendis ab inventore voluptatibus adipisci obcaecati quibusdam minima. Dolorem odio itaque deserunt soluta atque, mollitia molestiae laudantium dicta omnis delectus earum aspernatur expedita dolorum explicabo quos esse.
            Iure qui sunt nesciunt rem sint, iste sit voluptas quas, cumque ducimus, cum beatae vero a officia unde labore dolores accusamus! Fugit neque quia consequuntur natus perspiciatis voluptate dolorem nisi?
            Quod officiis quia aliquid illum quo deserunt ullam quae accusamus veniam aperiam ratione corrupti velit odit, mollitia veritatis, aut dicta recusandae asperiores facilis earum quibusdam, dignissimos voluptatum. Ab, harum pariatur?
            Sunt nesciunt repudiandae iste ut fuga esse maiores quam soluta pariatur quas. Delectus consequuntur mollitia, rerum aliquam alias dicta consectetur atque numquam ipsum sequi qui? Magni earum corporis nobis commodi?
            Autem amet rerum laborum similique quis quo provident officiis, exercitationem illum cum cupiditate, ut ea dignissimos. Aliquid alias sunt, aliquam dignissimos voluptates quo eum earum iure ab inventore quae repellat.
            Quo placeat suscipit alias non animi incidunt, voluptate vitae recusandae provident! Deleniti, alias modi. Saepe inventore esse laborum sequi adipisci! Perferendis quae libero rerum numquam ipsa magnam facilis ut ab!
            Deleniti est quis aperiam id laboriosam temporibus odio itaque doloribus eaque placeat inventore optio sequi ut quaerat beatae veniam provident sint molestias, accusantium ullam quisquam animi blanditiis. Vitae, earum tenetur.
            Nemo quos odit architecto nostrum blanditiis laborum eum quas illum, vitae beatae distinctio harum pariatur deserunt dolores id ratione facilis! Fugit et, accusamus deleniti asperiores perspiciatis sapiente nostrum vel? Quasi.
            Delectus nemo dolores obcaecati tempora assumenda voluptas, placeat necessitatibus corrupti tenetur commodi, incidunt voluptatum, perspiciatis facilis distinctio optio dignissimos enim repudiandae harum esse nulla sed asperiores. Inventore natus ratione eaque.
            Sapiente aliquid doloremque sit ullam, consequuntur tempora vero nostrum, autem, excepturi odit amet aut quo perspiciatis quos exercitationem sequi? Commodi ullam at ad pariatur fugit, cumque esse neque incidunt repellat.
            Sint impedit aperiam quia illo neque dicta praesentium inventore provident similique est possimus exercitationem officiis quas ipsum, enim, veritatis id officia soluta omnis ratione harum? Esse nobis consequuntur at accusantium!
            Dolor nihil distinctio placeat doloremque magnam sunt natus itaque laborum provident odit libero ipsa repudiandae necessitatibus dolore, id pariatur excepturi reiciendis rerum nostrum! Eos corrupti nisi deserunt tempora commodi suscipit.
            Voluptatibus quidem a minima impedit fugit mollitia eum nam natus repudiandae rem, atque perferendis cumque laboriosam pariatur dolorem, architecto illo distinctio. Labore a laborum libero tempore, rem iste fugit iusto?
            Consequuntur blanditiis veritatis quos voluptatem exercitationem quibusdam quidem optio dignissimos ipsa a earum esse magnam dolor, voluptatum alias ipsam accusamus asperiores, enim perferendis eveniet. Distinctio itaque amet nemo veniam sint!
            Voluptatem adipisci itaque iusto deleniti sit veniam eveniet, sint atque numquam enim impedit autem voluptatibus praesentium natus, quaerat dolore facilis illo voluptatum iste explicabo perferendis doloremque! Dolore blanditiis possimus unde!
            Error voluptatum molestias repudiandae autem, qui neque a aut. Maxime aperiam ullam quos, praesentium voluptates libero et adipisci tempore facere, repudiandae iste minima eius tempora exercitationem! Illo laboriosam vitae suscipit?
            Quis cum, qui tempore veniam explicabo corporis itaque, sed voluptatibus eligendi cupiditate doloribus, suscipit ea cumque aspernatur. Qui, architecto officiis. Iusto tenetur nesciunt, quaerat architecto quos at ab repellat ea!
            Ratione illo, libero nam adipisci delectus maxime minus, quasi mollitia ex, voluptatibus earum est sapiente temporibus laboriosam suscipit! Reiciendis aut rerum quod aliquam. Adipisci ad soluta id et ullam nesciunt!</p>
          
          </div>
        </div>

        <div className="chatFooter">
          <input type="text" placeholder="Send a Message..." />
          <button className="send">
            <img src={sendbtn} alt="sedn" className="sendImg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
