import "./Report.scss";
import BackArrowIcon from "../../components/icons/Report/BackArrowIcon";
import ScanResult from "../../components/Report/ScanResult";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Report() {
  const navigateTo = useNavigate();

  const result = useSelector((state) => state.urlReportStore.lastUrlScanResult);
  const scannedUrl = useSelector((state) => state.urlReportStore.lastUrl);

  return (
    <main className="report">
      <BackArrowIcon
        className="report_back-arrow-icon"
        onClick={() => {
          navigateTo(-1);
        }}
      />

      <div className="report__container">
        <h1 className="report__title">Report for:</h1>

        <p className="report__report-object">{scannedUrl}</p>

        <ScanResult result={result} />

        <p className="report__explanatory-text">
          The scanning system is based on machine learning technologies and uses
          a Random Forest model, the prediction accuracy of which according to
          the test results was about <span>93.05%</span>. The model is trained
          only on up-to-date data, which guarantees a high level of detection of
          modern malicious elements. Be careful online!
        </p>
      </div>
    </main>
  );
}

export default Report;
