type DataStructure = Array<Record<'x' | 'y', number>>;

type Fn = (i: number) => number;
type FnTemplate = {
  name: string;
  notation: (x: string | number) => string;
  fn: (x: number) => number;
};
