import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FlashCardPage() {
  const [dataMark, setdataMark] = useState([]);

  useEffect(() => {
    const dataList = JSON.parse(localStorage.getItem("markword"));
    setdataMark(dataList);
  }, []);

  //Delete Word Mark
  const deleteWordMark = (inputName) => {
    console.log(inputName)
    toast.warning("Unmark Word !", {
      position: toast.POSITION.TOP_CENTER,
    });

    let arrayWord = JSON.parse(localStorage.getItem("markword"));
    for (let i = 0; i < arrayWord.length; i++) {
      if (arrayWord[i].name === inputName) {
        arrayWord.splice(i, 1);
        break;
      }
    }

    setdataMark(arrayWord);
    localStorage.setItem("markword", JSON.stringify(arrayWord));
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "70px",
      }}
    >
      {/* List Word Marked */}
      <div className="ListWord" style={{width:"400px"}}>
        <h2 style={{ marginBottom: "30px" }}>Word List</h2>
        <ol class="list-group list-group-numbered">
          {dataMark.map((item, index) => (
            <li
              class="list-group-item d-flex justify-content-between align-items-start"
              key={index}
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">{item.name}</div>
                {item.defi}
              </div>
              <span class="badge bg-primary rounded-pill">
                <FaTrashCan
                  onClick={()=>{
                    deleteWordMark(item.name)}}
                  style={{ cursor: "pointer" }}
                />
                <ToastContainer autoClose={1000} />
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="RightCrud"></div>
    </div>
  );
}

export default FlashCardPage;
