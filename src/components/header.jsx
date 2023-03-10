import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const btnText = props.formVisible ? "Close" : "Share a fact";

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
        <h1>Today I Learned</h1>
      </div>

      <div className="actions-cont">
        {props.user ? (
          <button
            onClick={props.handleSignout}
            className="btn btn-large signout-btn"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="btn btn-large login-btn"
          >
            Login
          </button>
        )}
        <button onClick={props.formHandler} className="btn btn-large show-form">
          {btnText}
        </button>
      </div>
    </header>
  );
};

export default Header;
