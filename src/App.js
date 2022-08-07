// import "./components/LanguageSelect";
// import "./components/Arrow";
import { useState } from "react";
import Arrow from "./components/Arrow";
import TextInput from "./components/TextInput";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(null);

  const [fromLangauge, setFromLanguage] = useState("English");
  const [toLangauge, setToLanguage] = useState("Polish");

  const handleClick = () => {
    setFromLanguage(toLangauge);
    setToLanguage(fromLangauge);
  };

  return (
    <div className="app">
      {!showModal && (
        <>
          <TextInput
            type="input"
            selectedLanguage={fromLangauge}
            setShowModal={setShowModal}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrow />
          </div>
          <TextInput
            type="output"
            selectedLanguage={toLangauge}
            setShowModal={setShowModal}
          />
        </>
      )}
      {showModal == "input" && <Modal type="input" />}
      {showModal == "output" && <Modal type="output" />}
    </div>
  );
}

export default App;
