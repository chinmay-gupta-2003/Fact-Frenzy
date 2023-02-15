const Header = (props) => {
  const btnText = props.formVisible ? "Close" : "Share a fact";

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
        <h1>Today I Learned</h1>
      </div>

      <button onClick={props.formHandler} className="btn btn-large show-form">
        {btnText}
      </button>
    </header>
  );
};

export default Header;
