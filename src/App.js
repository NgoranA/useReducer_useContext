import React, { useContext, useState } from "react";
import "./style.css";
import Context from "./store/utils/context";

export default function App() {
  const { count, username, handleDec, handleInc, handleMult, handleOnChange } =
    useContext(Context);
  const [formData, setFormData] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    handleOnChange(formData);
    setFormData("");
  };

  return (
    <div className="full">
      <div className="content-box">
        <div>
          <center>
            <h1>Hello {username}</h1>
            <h2>
              Welcome to the{" "}
              <span className="topic">
                <strong>
                  <i>useReducer</i>
                </strong>
              </span>{" "}
              and{" "}
              <span className="topic">
                <strong>
                  <i>useContext</i>
                </strong>
              </span>{" "}
              session
            </h2>
          </center>

          <center>
            <h1>{count}</h1>
          </center>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="btn" onClick={() => handleDec()}>
              DECREMENT
            </button>
            <button className="btn middle" onClick={() => handleInc()}>
              INCREMENT
            </button>
            <button className="btn" onClick={() => handleMult(4)}>
              MULTIPLY BY 4
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "3rem",
            }}
          >
            <form onSubmit={onSubmit}>
              <input
                type="text"
                value={formData}
                placeholder="enter usename"
                className="formInput"
                onChange={(e) => setFormData(e.target.value)}
              />
              <button
                disabled={!formData}
                className="btn submitbtn "
                type="submit"
              >
                Submit Name
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
