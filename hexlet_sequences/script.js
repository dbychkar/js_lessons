import {
    cons,
    car,
    cdr
} from 'hexlet-pairs';
import {
    l,
    isEmpty,
    head,
    tail,
    cons as consList
} from 'hexlet-pairs-data';

// BEGIN (write your solution here)

export const make = () => l();

export const node = (tag, content) => cons(tag, content);


export const append = (list, tag) => cons(tag, list);


export const toString = (elements) => {
    if (isEmpty(elements)) {
        return '';
    }
    const element = head(elements);
    const tagName = (element) => car(element);
    const body = (element) => cdr(element);
    const tag = tagName(element);
    return `${toString(tail(elements))}<${tag}>${body(element)}</${tag}>`;
};

// END



/*
решение учителя

export const make = () => l();
export const append = (dom, element) => consList(element, dom);

export const node = (tag, content) => cons(tag, content);

const name = element => car(element);
const value = element => cdr(element);

export const toString = elements => {
  if (isEmpty(elements)) {
    return '';
  }
  const element = head(elements);
  const tag = name(element);
  return `${toString(tail(elements))}<${tag}>${value(element)}</${tag}>`;
};

*/
