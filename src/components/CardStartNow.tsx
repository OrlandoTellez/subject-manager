import styles from "./CardStartNow.module.css"
import logoReact from "../assets/react.svg"
import lightIcon from "../assets/icons/ligth.svg"

export const CardStartNow = () => {
  return (
    <>
        <article className={styles.card}>
            <div className={styles.iconContainer}>
                <img src={lightIcon} alt="icon" />
            </div>
            <article className={styles.info}>
                <h5>Comienza ahora</h5>
                <p>Crea tu primera materia para empezar a gestionar estudiantes</p>
                <div className={styles.containerButtons}>
                    <button>+ Crea tu primera materia</button>
                </div>
            </article>
        </article>
    </>
  )
}
