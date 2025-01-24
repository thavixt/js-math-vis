import { FRAC_DIGITS, MAX, MIN, STEP } from "./store";

export const FUNCTIONS: Record<string, FnTemplate> = {
  // Base case
  constant: {
    name: 'Constant',
    notation: (x) => `${x}`,
    fn: (x) => x,
  },

  // Misc
  abs: {
    name: 'Absolute value',
    notation: (x) => `Math.abs(${x})`,
    fn: (x) => Math.abs(x),
  },
  clz32: {
    name: 'Number of leading zero bits of a 32-bit int',
    notation: (x) => `Math.clz32(${x})`,
    fn: (x) => +Math.clz32(x),
  },
  trunc: {
    name: 'Integer portion (truncated)',
    notation: (x) => `Math.trunc(${x})`,
    fn: (x) => +Math.trunc(x).toFixed(FRAC_DIGITS),
  },

  // Exponentiation
  sqrt: {
    name: 'Square root',
    notation: (x) => `Math.sqrt(${x})`,
    fn: (x) => +Math.sqrt(x).toFixed(FRAC_DIGITS),
  },
  exp: {
    name: 'Exponent (natural)',
    notation: (x) => `Math.exp(${x})`,
    fn: (x) => +Math.exp(x).toFixed(FRAC_DIGITS),
  },
  cbrt: {
    name: 'Cube root',
    notation: (x) => `Math.cbrt(${x})`,
    fn: (x) => +Math.cbrt(x).toFixed(FRAC_DIGITS),
  },

  // Logarithm
  log: {
    name: 'Logarithm (natural)',
    notation: (x) => `Math.log(${x})`,
    fn: (x) => +Math.log(x).toFixed(FRAC_DIGITS),
  },
  // log2: {
  //   name: 'Logarithm (base 2)',
  //   notation: (x) => `Math.log2(${x})`,
  //   fn: (x) => +Math.log2(x).toFixed(FRAC_DIGITS),
  // },
  // log10: {
  //   name: 'Logarithm (base 10)',
  //   notation: (x) => `Math.log10(${x})`,
  //   fn: (x) => +Math.log10(x).toFixed(FRAC_DIGITS),
  // },

  // Power
  pow2: {
    name: 'Power of 2',
    notation: (x) => `Math.pow(${x}, 2)`,
    fn: (x) => +Math.pow(x, 2).toFixed(FRAC_DIGITS),
  },
  pow3: {
    name: 'Power of 3',
    notation: (x) => `Math.pow(${x}, 3)`,
    fn: (x) => +Math.pow(x, 3).toFixed(FRAC_DIGITS),
  },
  pow10: {
    name: 'Power of 10',
    notation: (x) => `Math.pow(${x}, 10)`,
    fn: (x) => +Math.pow(x, 10).toFixed(FRAC_DIGITS),
  },

  // Trigonometry
  acos: {
    name: 'Arccosine',
    notation: (x) => `Math.acos(${x})`,
    fn: (x) => +Math.acos(x).toFixed(FRAC_DIGITS),
  },
  acosh: {
    name: 'Hyperbolic arccosine',
    notation: (x) => `Math.acosh(${x})`,
    fn: (x) => +Math.acosh(x).toFixed(FRAC_DIGITS),
  },
  asin: {
    name: 'Arcsine',
    notation: (x) => `Math.asin(${x})`,
    fn: (x) => +Math.asin(x).toFixed(FRAC_DIGITS),
  },
  asinh: {
    name: 'Hyperbolic arcsine',
    notation: (x) => `Math.asinh(${x})`,
    fn: (x) => +Math.asinh(x).toFixed(FRAC_DIGITS),
  },
  cos: {
    name: 'Cosine',
    notation: (x) => `Math.cos(${x})`,
    fn: (x) => +Math.cos(x).toFixed(FRAC_DIGITS),
  },
  cosh: {
    name: 'Hyperbolic cosine',
    notation: (x) => `Math.cosh(${x})`,
    fn: (x) => +Math.cosh(x).toFixed(FRAC_DIGITS),
  },
  sin: {
    name: 'Sine',
    notation: (x) => `Math.sin(${x})`,
    fn: (x) => +Math.sin(x).toFixed(FRAC_DIGITS),
  },
  sinh: {
    name: 'Hyperbolic sine',
    notation: (x) => `Math.sinh(${x})`,
    fn: (x) => +Math.sinh(x).toFixed(FRAC_DIGITS),
  },
  tan: {
    name: 'Tangent',
    notation: (x) => `Math.tan(${x})`,
    fn: (x) => +Math.tan(x).toFixed(FRAC_DIGITS),
  },
  tanh: {
    name: 'Hyperbolic tangent',
    notation: (x) => `Math.tanh(${x})`,
    fn: (x) => +Math.tanh(x).toFixed(FRAC_DIGITS),
  },
}

/**
 * Iterates over a range of numbers and applies a given function to each number.
 * Collects and returns the results in an array of objects containing the original number and the computed value.
 *
 * @param iterator - A function that takes a number and returns a value.
 * @param from - The starting number of the range (inclusive). Defaults to 1.
 * @param to - The ending number of the range (inclusive). Defaults to 100.
 * @returns An array of objects, each containing the original number (`y`) and the computed value (`x`).
 */
export const iterateFn = (iterator: Fn) => {
  const data: DataStructure = [];
  for (let i = MIN; i <= MAX; i+=STEP) {
    const value = iterator(i);
    if (isValid(value)) {
      data.push({
        y: i,
        x: value,
      });
    }
  }
  return data;
}

/**
 * Checks if the given number is valid.
 *
 * A number is considered valid if it is not equal to positive or negative infinity.
 *
 * @param n - The number to check.
 * @returns `true` if the number is valid, `false` otherwise.
 */
export function isValid(n: number) {
  if (Math.abs(n) === Infinity) {
    return false;
  }
  return true;
}


/**
 * Converts a number to its exponential form if it exceeds a specified power limit.
 *
 * @param n - The number to be converted.
 * @param powLimit - The power limit to determine if the number should be converted to exponential form. Default is 8.
 * @returns The number in exponential form if it exceeds the power limit, otherwise the integer part of the number as a string.
 */
export function toExponential(n: number, powLimit = 8) {
  if (Math.abs(n) > Math.pow(10, powLimit)) {
    return Number.parseFloat(n.toString()).toExponential(2);
  }
  return `${n}`;
}

export function fnValue(n: number) {
  const v = toExponential(n);

  if (v && !isNaN(+v)) {
    return v;
  }

  return '-'
}