import { FUNCTIONS } from "../logic/functions";
import { useXStore } from "../logic/store";
import { TableRow, trStyle } from "./TableRow";

export function Table() {
  return (
    <table className="w-full table-auto">
      <ColGroup />
      <THead />
      <TBody />
    </table>
  )
}

// const thStyle = `border border-y-0 border-r-0 first:border-l-0 bg-gray-900 p-2`;
const thStyle = `bg-gray-900 p-2`;

export function ColGroup() {
  return (
    <colgroup>
      <col span={1} style={{ width: "20%" }} />
      <col span={1} style={{ width: "20%" }} />
      <col span={1} style={{ width: "20%" }} />
      <col span={1} style={{ width: "40%" }} />
    </colgroup>
  )
}

export function THead() {
  return (
    <thead className="sticky top-0 z-10">
      <tr className={trStyle}>
        <th className={thStyle}>Name</th>
        <th className={thStyle}>Notation</th>
        <th className={thStyle}>Value</th>
        <th className={thStyle}>
          <div className="flex justify-evenly">
            <span>Series</span>
          </div>
        </th>
      </tr>
    </thead>
  )
}

export function TBody() {
  const search = useXStore((state) => state.search);
  return (
    <tbody className="overflow-y-auto">
      {Object.entries(FUNCTIONS)
        .filter(createFilter(search))
        .sort(sortFns)
        .map(([key, fn]) => (
          <TableRow key={key} fn={fn} />
        ))
      }
    </tbody>
  )
}

function createFilter(search: string) {
  return ([key, fn]: [key: string, fn: FnTemplate]) => {
    if (key.includes(search) || fn.name.includes(search) || fn.notation('x').includes(search))
      return [key, fn];
  }
}

type CompareFnFunction = (a: [string, FnTemplate], b: [string, FnTemplate]) => number

const sortFns: CompareFnFunction = ([key1, template1], [key2, template2]) => {
  return (
    template1.name.localeCompare(template2.name)
    || template1.notation('x').localeCompare(template2.notation('x'))
    || key1.localeCompare(key2)
  );
}
