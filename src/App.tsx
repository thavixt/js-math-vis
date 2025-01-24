import { Controls } from "./components/Controls";
import { Table } from "./components/Table";

function App() {
  return (
    <div>
      <div className="mx-auto grid h-screen w-5/6 max-w-[1000px] grid-rows-10 overflow-hidden p-4">
        <div className="row-span-2 text-center">
          <span className="text-center font-serif text-3xl font-bold">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"
              target="__blank"
              title="Math - JavaScript | MDN">
              Javascript math
            </a>
            {' '}methods visualized
          </span>
          <small>{' '}by <a href="https://github.com/thavixt/js-math-vis" target="__blank">thavixt @ github</a></small>
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
