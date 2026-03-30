import React, { useState } from "react";
import "./bootstrap.css"
import "./default.css"
import "./GridviewScroll.css"
import "./GridviewScroll.css"
import "./responsive.css"
import "./stylesheet.css"
import "./stylesheet.css"
import image from "./assets/result-declare.jpg"

// NOTE: This is a near 1:1 JSX conversion of your HTML
// All IDs, classes, and structure preserved as much as possible

export default function ResultPage() {
  const [txtRollNo, setTxtRollNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Fetching result for Roll No: ${txtRollNo}`);
  };

  const handleReset = () => {
    setTxtRollNo("");
  };

  return (
    <>
      <form name="form1" id="form1" onSubmit={handleSubmit}>

        <div className="headermain">
          <div className="empheader">
            <div className="col-md-6">
              <div>
                <div className="logo">
                  <a href="#" style={{ float: "left", margin: "13px 0 0 0" }}></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="header_pnl_link">
                <li className="home"><a href="#">Home</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container" style={{ width: "490px" }}>

          <div className="centerpage opcitydwnbg" style={{ minHeight: "280px", marginTop: "120px", width: "490px" }}>

            <div style={{ paddingBottom: "10px" }} className="line1">
              <h2>
                B.E.(CBCS) ENGINEERING Vrd SEM ( COMPUTER SCIENCE & ENGINEERING(CSE) ) Examination Result 2025 - 2026
              </h2>
            </div>

            <div className="line1" style={{ paddingBottom: "10px" }}>
              <table width="100%">
                <tbody>
                  <tr>
                    <td className="fieldname" style={{ color: "#ffffff", paddingTop: "3px" }}>
                      Roll Number :
                    </td>
                    <td>
                      <span id="Anthem_txtRollNo__">
                        <input
                          name="txtRollNo"
                          type="text"
                          maxLength={25}
                          id="txtRollNo"
                          value={txtRollNo}
                          onChange={(e) => setTxtRollNo(e.target.value)}
                          className="form-control"
                          style={{ height: "30px" }}
                        />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              &nbsp;

            </div>

            <div className="line1" style={{ paddingBottom: "10px" }}>
              <div className="fieldname" style={{ color: "#ffffff", width: "127px" }}>
                &nbsp;
              </div>

              <span id="Anthem_btnGetResult__">
                <input
                  type="submit"
                  name="btnGetResult"
                  value="Get Result"
                  id="btnGetResult"
                  className="logbutt"
                  style={{ marginLeft: "7px" }}
                />
              </span>

              <span id="Anthem_btnRest__">
                <input
                  type="button"
                  name="btnRest"
                  value="Reset"
                  id="btnRest"
                  onClick={handleReset}
                  className="logbutt"
                />
              </span>

            </div>

          </div>
        </div>

        <div className="loginfooter"></div>

      </form>

      {/* Background Image Layer */}
        <img
          src={image}
          alt="background"
          style={{
            position: "absolute",
            margin: "0px",
            padding: "0px",
            border: "none",
            width: "1464px",
            height: "679px",
            maxWidth: "none",
            zIndex: -999999,
            left: "0px",
            top: "-11px"
          }}
        />
          </>
  );
}
