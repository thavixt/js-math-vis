import { create } from 'zustand'

const factor = 1;

export const DEFAULT = 3;
export const STEP = 1;

export const MAX = 10 * STEP * factor;
export const MIN = -10 * STEP * factor;

export const FRAC_DIGITS = 2;

interface State {
  search: string;
  setSearch: (s: string) => void;
  x: number
  set: (x: number) => void
  decrement: (by?: number) => void
  increment: (by?: number) => void
}

export const useXStore = create<State>()((set) => ({
  search: "",
  setSearch: (search: string) => set((state) => ({ ...state, search })),
  x: DEFAULT,
  set: (x) => set((state) => ({ ...state, x: n(x) })),
  decrement: (by = 1) => set((state) => ({ ...state, x: n(Math.max(state.x - by, MIN)) })),
  increment: (by = 1) => set((state) => ({ ...state, x: n(Math.min(state.x + by, MAX)) })),
}));

const n = (v: number) => +v.toExponential(FRAC_DIGITS);