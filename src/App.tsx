import { Controls } from "./components/Controls";
import { Table } from "./components/Table";

function App() {
  return (
    <div>
      <div className="mx-auto grid h-screen w-5/6 max-w-[1000px] grid-rows-10 overflow-hidden p-4">
        <div className="row-span-2">
          <h1 className="text-center font-serif text-3xl font-bold">
            Javascript{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"
              target="__blank"
              title="Math - JavaScript | MDN">
              math
            </a>
            {' '}methods visualized
          </h1>
          <Controls />
        </div>
        <div className="row-span-10 h-full overflow-auto rounded-md border border-gray-700 text-sm">
          <Table />
        </div>
      </div>
    </div>
  )
}

export default App
