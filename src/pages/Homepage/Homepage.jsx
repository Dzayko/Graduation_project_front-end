import "./Homepage.scss";
import PlanetIcon from "../../components/icons/Homepage/PlanetIcon";
import Input from "../../components/Homepage/Input";
import Button from "../../components/Homepage/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { scanUrl } from "../../store/urlScanSlice";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const [validationError, setValidationError] = useState("");
  const resetValidationError = () => {
    setValidationError("");
  };

  function onSubmit(event) {
    event.preventDefault();

    const params = inputValue.split("//");
    if ((params[0] !== "http:" || params[0] !== "https:") && !params[1]) {
      setValidationError(
        "Please, enter the correct URL. It should look like this: https://example.com/..."
      );
      setInputValue("");

      return;
    }
    let preparedUrl = inputValue.replace("www.", "");

    setInputValue("");
    dispatch(scanUrl(preparedUrl)).then((response) => {
      if (!response.error) {
        navigateTo("/report");
      }
    });
  }

  return (
    <main className="homepage">
      <h1 className="homepage__title">URL scanner</h1>

      <p className="homepage__text">
        Enter the URL you want to check in the input field below. The system
        will check this Internet resource for malicious components.
      </p>

      <PlanetIcon />

      <form action="#" className="homepage__form" onSubmit={onSubmit}>
        <Input
          value={inputValue}
          onChange={handleInput}
          onFocus={resetValidationError}
        />

        <Button disabled={inputValue.length === 0} />
      </form>

      <p className="homepage__error-message">{validationError}</p>
    </main>
  );
}

export default Homepage;
