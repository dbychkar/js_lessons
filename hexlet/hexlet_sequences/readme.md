solution.js
Реализуйте базовый интерфейс для создания html. Он включает в себя следующие функции:

make - конструктор.
node - создает новый тег. Содержит два элемента, имя тега и его содержимое.
append - добавляет элемент в список.
toString - возвращает текстовое представление html
import { make, append, toString, node } from './solution';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'hello, world'));
const dom = append(dom2, node('h2', 'header2'));

// <h1>hello, world</h1><h2>header2</h2>
toString(dom);
