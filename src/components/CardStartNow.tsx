import styles from "./CardStartNow.module.css"
import lightIcon from "../assets/icons/ligth.svg"
import { AddSubject } from "./modals/AddSubject"
import { useState } from "react"

export const CardStartNow = () => {
    const [showModal, setShowModal] = useState(false)


    const handleClose = () => setShowModal(false)
    const openModal = () => setShowModal(true)
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
                        <button onClick={openModal}>+ Crea tu primera materia</button>
                        {
                            showModal && (
                                <AddSubject handleClose={handleClose} />
                            )
                        }
                    </div>
                </article>
            </article>
        </>
    )
}
