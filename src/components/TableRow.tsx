import { fnValue, iterateFn } from "../logic/functions";
import { useXStore } from "../logic/store";
import { LineChartContainer } from "./LineChart";
import classNames from "classnames";

export const trStyle = ``;
const tdStyle = `border border-y-0 border-r-0 first:border-l-0 border-gray-700 px-2`;

interface TableRowProps {
  fn: FnTemplate;
}

export function TableRow({ fn }: TableRowProps) {
  const x = useXStore((state) => state.x)

  return (
    <tr className={trStyle}>
      <td className={classNames(tdStyle, 'bg-gray-800')}>
        <b>{fn.name}</b>
      </td>
      <td className={tdStyle}>
        {fn.notation(x)}
      </td>
      <td className={tdStyle}>
        {fnValue(fn.fn(x))}
      </td>
      <td className={classNames(tdStyle, 'flex pr-8 pt-4')}>
        <LineChartContainer
          stroke="#82ca9d"
          data={iterateFn(fn.fn)}
        />
      </td>
    </tr>
  )
}
