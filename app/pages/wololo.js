// Libs
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  aumentarEstoque
} from '../store';

const mapStateToProps = (state) => {
  return {
    lojaDoArthur: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    aumentarEstoque: () => {
      dispatch(aumentarEstoque());
    }
  }
};

class Wololo extends PureComponent {

  constructor() {
    super();

    this.productsList = this.productsList.bind(this);
    this.aumentarEstoque = this.aumentarEstoque.bind(this);
  }

  productsList() {
    return this.props.lojaDoArthur.estoque.map((produto, index) => {
      return (
        <div>
          <p>{produto.nome}</p>
        </div>
      );
    });
  }

  aumentarEstoque() {
    this.props.aumentarEstoque();
  }

  render () {
    return (
      <div>
        <h1>Loja do Arthur</h1>
        <p>Meus produtos:</p>
        {this.productsList()}

        <button onClick={this.aumentarEstoque}>
          CLIQUE AQUI
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Wololo);
