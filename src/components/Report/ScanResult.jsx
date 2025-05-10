import "./ScanResult.scss";
import safeIcon from "../../assets/common/safeIcon.svg";
import maliciousIcon from "../../assets/common/maliciousIcon.svg";
import phishingIcon from "../../assets/common/phishingIcon.svg";

function ScanResult({ result }) {
  const allResults = {
    Safe: [safeIcon, "report__scan-result-text_safe"],
    Malware: [maliciousIcon, "report__scan-result-text_malicious"],
    Phishing: [phishingIcon, "report__scan-result-text_phishing"],
    "": ["", ""],
  };

  return (
    <div className="report__scan-result-container">
      <img
        className="report__scan-result-icon"
        src={allResults[result][0]}
        alt="Scan result icon"
      />

      <span className={`report__scan-result-text ${allResults[result][1]}`}>
        {result}
      </span>
    </div>
  );
}

export default ScanResult;
