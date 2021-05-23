import React, { useState } from 'react';
import styles from './ListItems.module.scss';
import Modal from '../Modal/Modal';


const ListItems = ({ data }) => {
    const [isOpen, setModal] = useState(false);
    const [modalData, setModalData] = useState([]);

    const openModal = (item) => {
        setModal(true);
        setModalData(item)
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        <>
            <div className={styles.container}>
                {data.map(item => (
                    <div
                        key={item.data[0].nasa_id}
                        className={styles.item}
                        style={{ backgroundImage: `url(${item.links[0].href})` }}
                        onClick={() => openModal(item)}
                    >
                    </div>
                ))}
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal} item={modalData} />
        </>

    );
}

export default ListItems;

