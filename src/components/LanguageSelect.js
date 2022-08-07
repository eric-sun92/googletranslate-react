const LanguageSelect = ({ type, setShowModal, selectedLanguage }) => {
  console.log(type);
  return (
    <div onClick={() => setShowModal(type)} className="select-drop-down">
      <input value={selectedLanguage} />
      <div className="down-arrow">
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </div>
    </div>
  );
};

export default LanguageSelect;
