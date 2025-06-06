// src/pages/Home.jsx
import "../App.css";
import { Section1 } from "../sections/Section1";
import { Section2 } from "../sections/Section2";
import { Section3 } from "../sections/Section3";

const PageHome = () => {
  return (
    <div className="App">
      <div id="main">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
};

export default PageHome; // ✅ This line was missing or wrong
