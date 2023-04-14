function Form() {
  return (
    <form>
      <label htmlFor="name">
        Nome
        <input id="name" type="text" />
      </label>
      <label htmlFor="initiative">
        Iniciativa
        <input id="initiative" type="number" />
      </label>
      <label htmlFor="armor">
        Armadura
        <input id="armor" type="number" />
      </label>
      <label htmlFor="health">
        Vida Máx.
        <input id="health" type="number" />
      </label>
      <button type="submit">
        Criar
      </button>
    </form>
  )
}

export default Form;