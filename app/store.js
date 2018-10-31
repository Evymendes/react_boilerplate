// Libs
import { createStore } from 'redux';

// Action Types
const AUMENTAR_ESTOQUE = 'lojaDoArthur/AUMENTAR_ESTOQUE';

const initialState = {
  nome: 'Loja do Arthur',
  endereço: 'Rua do Arthur',
  valor_de_caixa: 300000,
  estoque: [{nome: 'geladeira brastemp'}]
};

// Reducers
let lojaDoArthur = (state = initialState, action) => {
  let estoque = state.estoque;
  switch (action.type) {
  case AUMENTAR_ESTOQUE:
    estoque.push({
      nome: 'geladeira electrolux'
    });
    return Object.assign({}, state, {
      estoque
    });
  default:
    return state;
  }
}

// Action Creator
export const aumentarEstoque = () => {
  return {
    type: AUMENTAR_ESTOQUE
  };
};

export default function configureStore() {
  let store = createStore(lojaDoArthur);

  return store;
}
