import { useState } from "react";

function DarkMode() {
  const body = document.body;

  const [mode, setMode] = useState(localStorage.getItem("mode") || "Light");

  if (mode === "Light" || mode === "Dark") {
    body.classList.add(mode);
  } else {
    body.classList.add("Light");
  }

  const changeMode = (e) => {
    let newMode = mode === "Dark" ? "Light" : "Dark";
    localStorage.setItem("mode", newMode);
    setMode(newMode);
    if (mode === "Dark") {
      body.classList.replace("Dark", "Light");
    } else {
      body.classList.replace("Light", "Dark");
    }
  };

  return (
    <>
      <div className="home__footer-wrap_content-right_theme-wrap">
        <i
          id="icon"
          className={"fa-solid " + (mode === "Dark" ? "fa-moon" : "fa-sun")}
          onClick={(e) => changeMode(e)}
        />
      </div>
    </>
  );
}

export default DarkMode;
