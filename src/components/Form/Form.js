import React, { useContext } from 'react';
import styles from './Form.module.scss';
import { MyContext } from '../../App';

const Form = () => {
    const ctx = useContext(MyContext)
    return (

        <form className={styles.form_search}>
            <input type='text' className={styles.input} value={ctx.query}
                onChange={(e) => ctx.setQuery(e.target.value)} />
            <button className={styles.btn} onClick={ctx.handleClick}></button>
        </form>

    );
}

export default Form;

