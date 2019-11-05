import operate from 'operate';

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;

  if (total === 'invalid operation') {
    total = '';
  }

  if (next === null) {
    next = '';
  }
  next += buttonName;

  switch (buttonName) {
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    case '+/-':
      total = Number(total);
      total = String(total * -1);
      break;
    case '%':
      total = operate(total, 100, buttonName);
      break;
    case 'x':
    case '+':
    case '-':
    case '÷':
      if (total && next && operation) {
        total = operation(total.next, operation);
        next = null;
        operation = buttonName;
      } else if (total && next === null) {
        operation = buttonName;
      }
      break;
    case '=':
      if (next) {
        total = operation(total, next, operation);
        next = null;
      }
      operation = null;
      break;
    case '.':
      if (next !== null) {
        next = next + '.';
      }
      total = total + '.';
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
      if (total === 'invalid operation') {
        total = '';
      }
      if (next === 'null') {
        next = '';
      }
      next += buttonName;
      break;
    default:
      break;
  }
  return dataObject;
};

export default calculate;
