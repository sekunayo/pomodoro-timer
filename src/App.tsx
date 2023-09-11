import logo from "./logo.svg";
import styles from "./App.module.css";
import Timer from "./components/Timer";
import { ReactComponent as Settings } from "./assets/icons/settings.svg";
import Modal from "./components/Modal";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [toggleModal, setToggleModal] = useState(true);
  const closeModal = () => {
    setToggleModal(false);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.app__logo}>pomodoro</h1>
      <Timer />
      <Settings />

      <Modal closeModal={closeModal}>
        <Form />
      </Modal>
    </div>
  );
}

export default App;
