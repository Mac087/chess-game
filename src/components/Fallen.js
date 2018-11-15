import React from 'react';
import '../index.css';
import Square from './Square.js';

 class FallenSoldierBlock extends React.Component {

  renderSquare(square, i, squareShade) {
    // Shade is not needed since the background should be transparent for this section
    return <Square 
    piece = {square} 
    style = {square.style}
    />
  }

  render() {
    return (
      <div>
      <div className="board-row">{this.props.whiteFallenSoldiers.map((ws, index) =>
        this.renderSquare(ws, index)
        )}</div>
      <div className="board-row">{this.props.blackFallenSoldiers.map((bs, index) =>
        this.renderSquare(bs, index)
        )}</div>
      </div>
      );
  }
}

export default FallenSoldierBlock;