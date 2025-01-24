import { describe, it, expect } from 'vitest';
import { toExponential } from './functions';
import { isValid } from './functions';

describe('toExponential', () => {
  it('should return the number in exponential form if it exceeds the power limit', () => {
    expect(toExponential(1e9)).toBe('1.00e+9');
    expect(toExponential(1e10)).toBe('1.00e+10');
  });

  it('should return the integer part of the number as a string if it does not exceed the power limit', () => {
    expect(toExponential(100)).toBe('100');
    expect(toExponential(99999999)).toBe('99999999');
  });

  it('should handle negative numbers correctly', () => {
    expect(toExponential(-1e9)).toBe('-1.00e+9');
    expect(toExponential(-100)).toBe('-100');
  });

  it('should handle zero correctly', () => {
    expect(toExponential(0)).toBe('0');
  });

  it('should use the provided power limit', () => {
    expect(toExponential(1e5, 4)).toBe('1.00e+5');
    expect(toExponential(1e5, 6)).toBe('100000');
  });
});

describe('toExponential', () => {
  it('should return the number in exponential form if it exceeds the power limit', () => {
    expect(toExponential(1e9)).toBe('1.00e+9');
    expect(toExponential(1e10)).toBe('1.00e+10');
  });

  it('should return the integer part of the number as a string if it does not exceed the power limit', () => {
    expect(toExponential(100)).toBe('100');
    expect(toExponential(99999999)).toBe('99999999');
  });

  it('should handle negative numbers correctly', () => {
    expect(toExponential(-1e9)).toBe('-1.00e+9');
    expect(toExponential(-100)).toBe('-100');
  });

  it('should handle zero correctly', () => {
    expect(toExponential(0)).toBe('0');
  });

  it('should use the provided power limit', () => {
    expect(toExponential(1e5, 4)).toBe('1.00e+5');
    expect(toExponential(1e5, 6)).toBe('100000');
  });
});

describe('isValid', () => {
  it('should return false for positive infinity', () => {
    expect(isValid(Infinity)).toBe(false);
  });

  it('should return false for negative infinity', () => {
    expect(isValid(-Infinity)).toBe(false);
  });

  it('should return true for finite numbers', () => {
    expect(isValid(100)).toBe(true);
    expect(isValid(-100)).toBe(true);
    expect(isValid(0)).toBe(true);
  });
});