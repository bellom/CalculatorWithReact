import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const a = Big(numberOne).valueOf();
  const b = Big(numberTwo).valueOf();
  let result;

  switch (operation) {
    case '÷':
    case '%':
      if (b === '0') {
        return 'invalid operation';
      }
      result = a.div(b);
      break;

    case '+':
      result = a.plus(b);
      break;

    case 'x':
      result = a.times(b);
      break;

    case '-':
      result = a.minus(b);
      break;

    default:
      break;
  }
  return result;
};

export default operate;
