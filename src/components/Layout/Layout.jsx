import "./Layout.scss";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Preloader from "../Preloader/Preloader";

function Layout() {
  const showPreloader = useSelector(
    (state) => state.urlReportStore.loadingState
  );

  return (
    <div className="container">
      {showPreloader && <Preloader />}

      <Outlet />

      <footer className="footer">
        <p className="footer__text">
          This application is based on machine learning technologies{" "}
        </p>
        <p className="footer__year-text">© 2025 URL scanner </p>
      </footer>
    </div>
  );
}

export default Layout;
