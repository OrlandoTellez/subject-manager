import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <>
        <section className={styles.container}>
          <h1>Student Registration</h1>

          <div className={styles.containerButtons}>
            <button>Add Subject</button>
          </div>
        </section>
    </>
  )
}
