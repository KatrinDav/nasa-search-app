import React, { useState } from 'react';
import axios from 'axios';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import ListItems from './components/ListItems/ListItems';
import Title from './components/Title/Title';
import Subtitle from './components/Subtitle/Subtitle';
import { motion } from 'framer-motion';

export const MyContext = React.createContext({
  handleClick: () => { },
  setQuery: () => { },
  query: '',

})

const container = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      type: 'spring',
      stiffness: 200
    },
  }
}

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);

    setData(response.data.collection.items)
    console.log(response.data.collection.items)

    setQuery('')
  }

  const handleClick = (e) => {
    e.preventDefault();
    fetchData();
  }
  return (
    <MyContext.Provider value={{ handleClick, setQuery, query }}>
      <div className={styles.app}>
        <Header />

        <motion.div className={styles.wrapper}
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <Title />
          <Subtitle />
        </motion.div>
        {data && <ListItems data={data} />}
      </div>
    </MyContext.Provider>
  );
}

export default App;
