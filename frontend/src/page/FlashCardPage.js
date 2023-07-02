import { useEffect, useState } from "react";
import React from "react";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { FcFlowChart } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../utils/constant";

function FlashCardPage() {
  const [words, setWords] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setWords(res.data);
    });
  }, [updateUI]);

  const removeCard = (id) => {
    axios
      .delete(`${baseURL}/delete/${id}`)
      .then((res) => {
        alert('Delete Success !')
        console.log(res);
        setUpdateUI((prevState) => !prevState);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <div className="ListWord" style={{ width: "400px" }}>
        <h2 style={{ marginBottom: "30px" }}>
          Word List <FcFlowChart />
        </h2>
        <ol class="list-group list-group-numbered">
          {words.length != 0 ? (
            words.map((item, index) => (
              <li
                class="list-group-item d-flex justify-content-between align-items-start"
                key={index}
              >
                <div class="ms-2 me-auto">
                  <div class="fw-bold">{item.cardName}</div>
                  {item.definition}
                </div>
                <span
                  class="badge rounded-pill"
                  style={{
                    fontSize: "15px",
                    backgroundColor: "white",
                    border: "2px solid #4ab89f",
                  }}
                >
                  <FaPenToSquare
                    className="editPen"
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  />
                  <FaTrash
                    className="deleteTrash"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      removeCard(item._id);
                    }}
                  />
                  <ToastContainer autoClose={3000} />
                </span>
              </li>
            ))
          ) : (
            <h6 style={{ color: "#4ab89f",fontStyle:"italic" }}>Empty Word</h6>
          )}
        </ol>
      </div>

      <div className="RightCrud"></div>
    </div>
  );
}

export default FlashCardPage;
