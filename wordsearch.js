const wordSearch = (letters, word) => {
  let result = false;
  const horizontalJoin = letters.map(ls => {
    return ls.join('');
  });
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      result = true;
    }
    // else
    // {
    //   result = false;
    // }
  }
  const verticalJoin = transpose(letters).map(ls => {
    return ls.join('');
  });
  for (const l of verticalJoin) {
    if (l.includes(word)) {
      result = true;
    }
    // else {
    //   result = false;
    // }
  }
  
  return result;
};


const transpose = function(matrix) {
  let output = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let tempOutput = [];
    for (let j = 0; j < matrix.length; j++) {
      tempOutput.push(matrix[j][i]);
    }
    output.push(tempOutput);
  }
  return output;
};

module.exports = wordSearch;