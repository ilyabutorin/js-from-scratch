/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  let numCount = 0;
  let dotCount = 0;

  for (let i = 0; i < str.length; i++) {
    const el = str[i];

    if(el >= '0' && el <= '9'){
      numCount++
    }else if(el === '.'){
      dotCount++
      if(dotCount > 1){
        return false
      }
    }else {
      return false
    }
  };
  return numCount > 0;
};

  // console.log(isNumeric("123")) // Ожидаемый результат: true
  // console.log(isNumeric("12.3")) // Ожидаемый результат: true
  // console.log(isNumeric("123abc")) // Ожидаемый результат: false
  // console.log(isNumeric("abc")) // Ожидаемый результат: false
  // console.log(isNumeric(" ")) // Ожидаемый результат: false