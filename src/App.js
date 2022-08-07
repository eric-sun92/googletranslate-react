// import "./components/LanguageSelect";
// import "./components/Arrow";
import { useEffect, useState } from "react";
import Arrow from "./components/Arrow";
import TextInput from "./components/TextInput";
import Modal from "./components/Modal";
import axios from "axios";
import Button from "./components/Button";

function App() {
  const [showModal, setShowModal] = useState(null);

  const [fromLanguage, setFromLanguage] = useState("English");
  const [toLanguage, setToLanguage] = useState("Polish");

  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");

  const [languages, setLanguages] = useState(null);

  console.log("test +", showModal);

  const getLanguages = async () => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/languages",
    };

    await axios
      .request(options)
      .then(function (response) {
        setLanguages(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getLanguages();
  }, []);

  const handleClick = () => {
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
  };

  const translate = () => {
    const data = {
      fromText,
      toLanguage,
      fromLanguage,
    };
    const options = {
      method: "GET",
      url: "http://localhost:8000/translation",
      params: data,
    };

    axios
      .request(options)
      .then(function (response) {
        setToText(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="app">
      {!showModal && (
        <>
          <TextInput
            type="input"
            setShowModal={setShowModal}
            selectedLanguage={fromLanguage}
            fromText={fromText}
            setToText={setToText}
            setFromText={setFromText}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrow />
          </div>
          <TextInput
            type="output"
            setShowModal={setShowModal}
            selectedLanguage={toLanguage}
            toText={toText}
            setToText={setToText}
          />
          <div className="button-container" onClick={translate}>
            <Button />
          </div>
        </>
      )}
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          languages={languages}
          chosenLanguage={showModal === "input" ? fromLanguage : toLanguage}
          setChosenLanguage={
            showModal === "input" ? setFromLanguage : setToLanguage
          }
        />
      )}
    </div>
  );
}

export default App;
