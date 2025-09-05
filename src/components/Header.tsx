import logoIcon from "../assets/icons/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {

  return (
    <>
      <header className={styles.header}>
        <section className={styles.containerHeader}>
          <div className={styles.logo}>
                <img className={styles.imgLogo} src={logoIcon} alt="Logo icon" />
                <span>Subject manager</span>
          </div>

          <div>
            <button>Add Subject</button>
          </div>
        </section>
      </header>
    </>
  );
};