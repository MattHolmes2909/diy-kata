const joinNames = namesObj => {
    let nameString= "";
    namesObj.forEach((n, i) => {
        if (i === 0) {
          nameString += n.name;  
        }
        if (i !== namesObj.length - 1 && i !== 0) {
            nameString += `, ${n.name}`;
        }
        if (i === namesObj.length - 1) {
            nameString += ` & ${n.name}`;
        }
    });
    return nameString
};

module.exports = joinNames;
