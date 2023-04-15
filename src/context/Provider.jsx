import { useState, useMemo } from "react";
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [update, setUpdate] = useState(0);

  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState(0);
  const [armor, setArmor] = useState(0);
  const [health, setHealth] = useState(0);

  const context = useMemo(() => ({
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
