import logo from "./logo.svg";
import styles from "./App.module.css";
import Timer from "./components/Timer";
import { ReactComponent as Settings } from "./assets/icons/settings.svg";
import Modal from "./components/Modal";
import { useState } from "react";
import Form from "./components/Form";
import Tab from "./components/Tab";

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [currentBackgroundColor, setCurrentBackgroundColor] =
    useState("#F87070");
  const [currentFontValue, setCurrentFontValue] = useState("Kumbh Sans");

  const handleFontValueChange = (value: string) => {
    setCurrentFontValue(value);
  };

  const handleCurrentColor = (value: string) => {
    setCurrentBackgroundColor(value);
  };

  const closeModal = () => {
    setToggleModal(false);
  };

  return (
    <div style={{ fontFamily: currentFontValue }} className={styles.app}>
      <h1 className={styles.app__logo}>pomodoro</h1>
      <Tab />
      <Timer />
      <button onClick={() => setToggleModal(true)}>
        <Settings />
      </button>

      {toggleModal && (
        <Modal closeModal={closeModal}>
          <Form
            handleClose={closeModal}
            handleCurrentFont={handleFontValueChange}
            handleCurrentColor={handleCurrentColor}
            fontValue={currentFontValue}
            color={currentBackgroundColor}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
