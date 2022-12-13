import logo from "./logo.svg";
import "./App.css";
import useModal from "./lib/modal/useModal";
import Modal from "./lib/modal/Modal";

function App() {
  const { isShowing, toggle: toggleModal } = useModal();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => toggleModal()}>Open</button>
        <Modal
          isShowing={isShowing}
          hide={toggleModal}
          title="HELLO WORLD AGAIN !!!"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
