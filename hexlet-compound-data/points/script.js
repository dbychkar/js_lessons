// BEGIN (write your solution here)
export const quadrant = (point) => {
  const a = getX(point);
  const b = getY(point);

 if ( a > 0 && b > 0) {
    return 1;
  }

  else if ( a < 0 && b > 0) {
    return 2;
  }

  else if (a < 0 && b < 0) {
    return 3;
  }

  else if (a > 0 && b < 0) {
    return 4;
  }
};
// END

// BEGIN (write your solution here)

export const symmetricalPoint = (point) => {
 return  makePoint(-getX(point), -getY(point));

};

// END

// BEGIN (write your solution here)

export const distance = (point1, point2) => {
  const a = getX(point2) - getX(point1);
  const b = getY(point2) - getY(point1);
 return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

// END
