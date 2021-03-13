const humanCatDogYears = (number) => {
    if (number < 1) {
        return [number, number, number];
    }
    const arr = [number, 0, 0];
    for (let i = 0; i <= number; i += 1) {
      if (i === 1) {
        arr[1] += 15;
        arr[2] += 15;
      }
      if (i === 2) {
        arr[1] += 9;
        arr[2] += 9;
      }
      if (i > 2) {
        arr[1] += 4;
        arr[2] += 5;
      }
    }
    return arr;
  };

module.exports = humanCatDogYears;
