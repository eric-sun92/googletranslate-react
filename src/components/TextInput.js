import LanguageSelect from "./LanguageSelect";

const TextInput = ({
  type,
  selectedLanguage,
  setShowModal,
  fromText,
  toText,
  setFromText,
  setToText,
}) => {
  const handleFromText = (e) => {
    setFromText(e.target.value);
  };

  const handleClick = () => {
    setFromText("");
    setToText("");
  };

  return (
    <div className={type}>
      <LanguageSelect
        type={type}
        selectedLanguage={selectedLanguage}
        setShowModal={setShowModal}
      />
      <textarea
        placeholder={type == "input" ? "Enter text" : "Translate"}
        disabled={type == "output"}
        value={type == "input" ? fromText : toText}
        onChange={type == "input" ? (e) => handleFromText(e) : null}
      ></textarea>
      {type === "input" && (
        <div className="delete" onClick={handleClick}>
          ˟
        </div>
      )}
    </div>
  );
};

export default TextInput;
