import React from 'react';
import styles from './Modal.module.scss';
import { motion } from 'framer-motion';


const Modal = ({ closeModal, isOpen, item }) => {
    return (
        <>
            { isOpen && (
                <motion.div className={styles.outerWrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className={styles.innerWrapper}>
                        <div className={styles.photo}
                            style={{ backgroundImage: `url(${item.links[0].href})` }}>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>{item.data[0].title}</div>
                            <p className={styles.description}>{item.data[0].description}</p>
                        </div>
                    </div>
                    {console.log(item)}

                    <div className={styles.close} onClick={closeModal} />

                </motion.div>

            )}
        </>

    );
}

export default Modal;