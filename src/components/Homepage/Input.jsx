import "./Input.scss";

function Input({ value, onChange, onFocus }) {
  return (
    <input
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      placeholder="Enter URL here..."
      type="text"
      className="input"
    />
  );
}

export default Input;
