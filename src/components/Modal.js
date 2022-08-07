const Modal = ({ type }) => {
  return (
    <div className="option-list">
      <div className="search-bar">
        <input onChange={handleChange} />
      </div>
    </div>
  );
};

export default Modal;
