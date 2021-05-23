import React from 'react';
import styles from './Header.module.scss';
import { motion } from 'framer-motion';
import Form from '../Form/Form';


const Header = () => {

    return (
        <>
            <motion.div className={styles.header}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            >
                <div className={styles.logo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/NASA_Worm_logo_%28black%29.svg" alt="logo" />
                </div>

                <Form />

            </motion.div>
        </>

    );
}

export default Header;