import  React from "react";

//fonts
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaExternalLinkSquareAlt } from "@react-icons/all-files/fa/FaExternalLinkSquareAlt";
import { FaCalendar } from "@react-icons/all-files/fa/FaCalendar";

// styles
import "../styles/style.scss";
import "../css/icon.css"

// markup
const IndexPage = () => {

  // const searchInput = useRef();

  // const show = useState(false);

  // // const showSearch = () => {
    
  // // };

  return (
    <>
      <main className="container">
        <div className="landing-page">
          <nav className="nav-heading">
            <p>UI/UX</p>
            <p>Web App Design Concept</p>
            <p>Series 2020 - 2021</p>
          </nav>

          <div className="title">
            <h1>
              n
              <span>
                <svg height="35" width="22">
                  <path d="M0,5 30,5" stroke="#dbd5fd" stroke-width="5" />
                  <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
                  <path d="M0,23 30,23" stroke="#dbd5fd" stroke-width="5" />
                </svg>
              </span>
              <span className="x-text">
                x
                {/* <svg height="35" width="50">
                <path d="M0,2 L4,4 L-4,4 " stroke="#dbd5fd" stroke-width="5" />
                <path d="M9,0 L-4,4 " stroke="#dbd5fd" stroke-width="5" />
                <path d="M1,0 L4,4 " stroke="#dbd5fd" stroke-width="5" />
                <path d="m 1 0 l 4 4 l -4 4 m 0 1 m 9.5 0 l -4 -4 m 0 -1.5 l 4 -4" stroke="#fff" stroke-width="5" />
                </svg> */}
              </span>
              t <span className="sms-text"> sms</span>
            </h1>
            <h2>
              provide a single point of integration to different sms gateways
            </h2>
          </div>

          <div className="scroll-down-btn">
            <div className="rectangular-circle"></div>
            <FaChevronDown className="icons" />
          </div>

          <div className="box">
            <div className="side-panel">
              <div>
                <i className="icon th large"></i>
                <i className="icon diamond"></i>
                <i className="icon user plus"></i>
                <i className="icon credit card outline"></i>
                <i className="icon file alternate outline"></i>
                <i className="icon life users"></i>
                <i className="icon life ring outline"></i>
              </div>
              <div>
                <i className="icon bell outline nots"></i>
                <i className="icon headphones"></i>
                <i className="icon sun outline"></i>
                <i className="icon sign-out"></i>
              </div>
            </div>

            <div className="box-container">
              <div className="dashboard-container">
                <h2>Dashboard</h2>
                <div className="search-box">
                  <input type="text" placeholder="Search for anything" />
                  {/* <FaSearch className={show ? "search-icon" : "show" } /> */}
                  <FaSearch className= "show" />
                </div>
              </div>

              <div className="amt-container">
                <div className="amt">
                  <div className="amt-box">
                    <p className="amt-title">SMS Savings</p>
                    <p className="amt-value">1,683 <span className="small-usd">USD</span> <span className="rate">17%<FaExternalLinkSquareAlt /></span></p>
                    <p className="amt-sub-text">Veiws (30days)<FaChevronDown className="amt-icon"/></p>
                  </div>
                  <div className="amt-box">
                    <p className="amt-title">SMS Success</p>
                    <p className="amt-value">4,631 <span className="rate">78%<FaExternalLinkSquareAlt /></span></p>
                    <p className="amt-sub-text">Veiws (30days)<FaChevronDown className="amt-icon"/></p>
                  </div>
                  <div className="amt-box">
                    <p className="amt-title">SMS Failed</p>
                    <p className="amt-value">394 <span className="rate-failed">3%<FaExternalLinkSquareAlt /></span></p>
                    <p className="amt-sub-text">Veiws (30days)<FaChevronDown className="amt-icon"/></p>
                  </div>
                  <div className="amt-box">
                    <p className="amt-title">SMS Delivery Rate</p>
                    <p className="amt-value">92.89% <span className="rate"><FaExternalLinkSquareAlt /></span></p>
                    <p className="amt-sub-text">(Last 1 Year)<FaChevronDown className="amt-icon"/></p>
                  </div>
                </div>
                <div className="pie-chart-bg">
                  <div className="pie-chart">
                    <div className="pie-chart-inner">
                    </div>
                  </div>
                </div>
              </div>

              <div className="history-container">
                <div className="history-bg">
                  <div className="history-box">
                    <div className="history-header">
                      <p className="history-title"><span className="history-txt">HISTORY </span>SMS Sent</p>
                      <p className="successandfail"><div className="circle-green"></div> Success<div className="circle-red"></div> Failed</p>
                      <p>Short by <span><FaCalendar className="iconss"/> Yearly <FaChevronDown className="iconss" /></span></p>
                    </div>
                    <div className="history-content">Comming <br /> soon!</div>
                  </div>
                </div>
                <div className="stats">Comming <br /> soon!</div>
              </div>
            </div>
          </div>
          <footer>
            <p>Designed by Horlakz &copy; 2021</p>
            <p>Email: <a href="mailto:horlakz@protonmail.com">horlakz@protonmail.com</a></p>
            </footer>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
