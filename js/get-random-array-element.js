import { getRandomInteger } from './get-random-element.js';

// функция для получения случайного элемента массива
const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

export { getRandomArrayElement };
