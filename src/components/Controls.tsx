import { MAX, MIN, STEP, useXStore } from "../logic/store";

export function Controls() {
  const setSearch = useXStore((state) => state.setSearch)
  const x = useXStore((state) => state.x)
  const set = useXStore((state) => state.set)
  const increment = useXStore((state) => state.increment)
  const decrement = useXStore((state) => state.decrement)

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div className="flex items-center space-x-2">
        <div>x =</div>
        <input
          type="number"
          max={MAX}
          min={MIN}
          className="w-32 rounded-md p-1"
          onChange={e => set(+e.target.value)}
          value={x}
        />
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => set(MIN)}>{MIN}</button>
        <button onClick={() => decrement(10)}>-10</button>
        <button onClick={() => decrement()}>-1</button>
        <input
          max={MAX}
          min={MIN}
          onChange={e => set(+e.target.value)}
          step={STEP}
          type="range"
          value={x}
        />
        <button onClick={() => increment()}>+1</button>
        <button onClick={() => increment(10)}>+10</button>
        <button onClick={() => set(MAX)}>+{MAX}</button>
      </div>
      <div className="flex items-center space-x-2">
        <span>Search:</span>
        <input type="search" placeholder="Search for a function" onChange={e => setSearch(e.target.value)} />
      </div>
    </div>
  )
}
