import LanguageSelect from "./LanguageSelect";

const TextInput = ({ type, selectedLanguage, setShowModal }) => {
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
      ></textarea>
    </div>
  );
};

export default TextInput;
