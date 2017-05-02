import React, { PureComponent, PropTypes } from 'react';

class Postit extends PureComponent {

  postitStyles(postitProperties) {
    return {
      background: postitProperties.background,
      width: `${postitProperties.width}px`,
      height: `${postitProperties.height}px`,
      boxShadow: '2px 2px 0 #E0E0E0'
    };
  }

  render() {
    return (
      <div style={this.postitStyles(this.props)}>
        <span>{this.props.owner.name}</span>
      </div>
    );
  }
}

Postit.propTypes = {
  background: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};

Postit.defaultProps = {
  background: '#FFEB3B',
  width: 100,
  height: 100
};

export default Postit;
