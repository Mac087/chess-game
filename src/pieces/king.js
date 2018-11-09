import Piece from './piece.js';

class King extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
  }

  // This possible movements are based on a board represented by a single array of length 64
  isMovePossible(src, dest){
    return (src - 9 === dest || 
      src - 8 === dest || 
      src - 7 === dest || 
      src + 1 === dest || 
      src + 9 === dest || 
      src + 8 === dest || 
      src + 7 === dest || 
      src - 1 === dest);
  }

 // The king always returns an empty array for the path between source and destination
 // because the king can only move one place at a time (no path)

  getSrcToDestPath(src, dest){
    return [];
  }
}

export default King;