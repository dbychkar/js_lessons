import { makePoint, getX, getY, toString } from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)

export const makeSegment = (point1, point2) => cons(point1, point2);
export const startSegment = (segment) => car(segment);
export const endSegment = (segment) => cdr(segment);

export const toStr = (segment) => `[${toString(startSegment(segment))}, ${toString(endSegment(segment))}]`;


export const midpointSegment= (segment)=> {
  const x1 = getX(car(segment));
  const y1 = getY(car(segment));
  const x2 = getX(cdr(segment));
  const y2 = getY(cdr(segment));
  const x0 = (x1+x2)/2;
  const y0 = (y1+y2)/2;
  const midpoint = makePoint(x0,y0);
  return midpoint;
};
// END
