import "./Button.scss";

function Button({ disabled }) {
  return (
    <button disabled={disabled} type="submit" className="btn">
      Scan
    </button>
  );
}

export default Button;
