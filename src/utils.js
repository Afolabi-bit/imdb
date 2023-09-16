import spinner from "./asset/icons/icons8-spinner.gif";
import LOut from "./asset/icons/Logout.png";
import IMDB from "./asset/icons/imdb.png";
import RottenT from "./asset/icons/rotten_tomatoes.png";
export const Loader = () => {
  return <img className="spinner" src={spinner} alt="spinner" />;
};

export const Imdb = () => {
  return <img className="imdb" src={IMDB} alt="" />;
};
export const RottenTomatoes = () => {
  return <img className="r_t" src={RottenT} alt="" />;
};

export const Logo = () => {
  return (
    <div className="logo">
      <span className="logo-img"></span>
      <h2>MovieBox</h2>
    </div>
  );
};

export const LogOut = () => {
  return (
    <button className="logout">
      <img src={LOut} alt="icon" />
      <span>Logout</span>
    </button>
  );
};
