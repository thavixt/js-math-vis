import { ResponsiveContainer, Line, ReferenceLine, ComposedChart } from "recharts";
import { MIN, useXStore } from "../logic/store";

interface LineChartProps {
  data: DataStructure;
  stroke: string;
  min?: number;
  max?: number;
}

export function LineChartContainer({ stroke, data }: LineChartProps) {
  const x = useXStore((state) => state.x);

  return (
    <ResponsiveContainer
      minWidth={100}
      minHeight={75}
      maxHeight={75}
    >
      <ComposedChart data={data} margin={{ bottom: 0, left: 16 }}>
        <Line
          type="monotone"
          dataKey="x"
          stroke={stroke}
          dot={false}
        />
        {/* Current value */}
        <ReferenceLine x={-MIN + x} stroke="red" strokeDasharray="3 3" />
        {/* Axes */}
        <ReferenceLine
          x={-MIN}
          stroke="white"
          strokeDasharray="3 3"
          opacity={0.5}
        />
        <ReferenceLine
          y={0}
          stroke="white"
          strokeDasharray="3 3"
          opacity={0.5}
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
