import { useState, useMemo } from "react";
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [update, setUpdate] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [teste, setTeste] = useState('ball-idle')

  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState();
  const [armor, setArmor] = useState();
  const [health, setHealth] = useState();

  const [array, setArray] = useState([]);

  const resetForm = () => {
    setName('');
    setInitiative('');
    setArmor('');
    setHealth('');
  }

  const darkModeButton = () => {
    if (darkMode === false) {
      document.body.style.backgroundColor = 'rgb(49,51,56)'
      document.body.style.color = 'white'
      setTeste('ball-on')
      return setDarkMode(true)
    }
    setTeste('ball-off')
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    return setDarkMode(false)
  }

  const formOnClick = () => {
    const obj = {
      id: Math.random(),
      name,
      initiative,
      armor,
      health,
      atualHealth: Number(health),
      image: './default-image.png'
    }
    setArray([...array, obj ])
    resetForm();
    setUpdate(update + 1)
  }

  const increaseButton = (index) => {
    if (input === 0 || !input) {
      setInput(1)
      array[index].atualHealth += 1 
      console.log(array);
      setArray(array)
      return setUpdate(update + 1)
    }

    array[index].atualHealth += Number(input)
    setArray(array)
    setUpdate(update + 1)
  }

  const decreaseButton = (index) => {
    if (input === 0 || !input) {
      setInput(1)
      array[index].atualHealth -= 1 
      console.log(array);
      setArray(array)
      return setUpdate(update + 1)
    }

    array[index].atualHealth -= Number(input)
    setArray(array)
    setUpdate(update + 1)
  }

  const removeButton = (id) => {
    const newArray = array.filter((e) => e.id !== id)
    setArray(newArray)
    setUpdate(update + 1)
  }

  const context = useMemo(() => ({
    teste,
    darkMode,
    darkModeButton,
    update,
    setUpdate,
    name,
    setName,
    initiative,
    setInitiative,
    armor,
    setArmor,
    health,
    setHealth,
    increaseButton,
    decreaseButton,
    removeButton,
    formOnClick,
    array,
    setArray,
  }), [
    teste,
    darkMode,
    darkModeButton,
    update,
    setUpdate,
    name,
    setName,
    initiative,
    setInitiative,
    armor,
    setArmor,
    health,
    setHealth,
    increaseButton,
    decreaseButton,
    removeButton,
    formOnClick,
    array,
    setArray,
  ]);

  return (
    <AppContext.Provider
      value={ context }
    >
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  props: PropTypes.shape({
    children: PropTypes.node,
  }),
  history: PropTypes.objectOf.isRequired,
}.isRequired;

export default Provider;
