import { useState, useMemo } from "react";
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [update, setUpdate] = useState(0);

  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState(0);
  const [armor, setArmor] = useState(0);
  const [health, setHealth] = useState(0);

  const [input, setInput] = useState(1);

  const [array, setArray] = useState([]);

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
    update,
    input,
    setInput,
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
  }), [
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
