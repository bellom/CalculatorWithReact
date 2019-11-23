import operate from './operate.js';

const calculate = (data, buttonName) => {
  let { total, next, operation} = data;

  switch (buttonName) {

    case 'AC':
      total = '';
      next = '';
      break;

    case '+/-':
      next = next * -1;
      if (total !== -0) {
        total = total * -1;
      }
      break;

    case '%':
      if(next !== null) {
        next = ((next / 100).toString());
      }
      total = ((total / 100).toString());      
      break;

    case '÷':
    case 'x':
    case '+':
    case '-':
      if (operation !== null && next !== null && total !== '') {
        total = operate(total, next, operation);
        operation = buttonName;
        next = null;
      } else {
        operation = buttonName;
      }

      if (next !== null) {
        total = next;
        next = null;
      }
      break;

    case '=':
      if (next !== null) {
        total = operate(total, next, operation);
        next = null
      }
      operation = null
      break;

    case '.':
      if (next && !next.includes('.')) {
        next += buttonName;
      } else if (!next) {
        next = '0.';
      }
      break;

    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if(total === 'Invalid Operation') {
        total = ''
      }
      if (next === null) {
        next = '';
      }
      next += buttonName;

      break;

    default:
      break;
  }
  return { total, next, operation};
};

export default calculate;