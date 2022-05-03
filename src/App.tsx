import { Component, createEffect, createSignal } from 'solid-js';

const App: Component = () => {
  const [count, setCount] = createSignal(0)
  createEffect(() => console.log("The latest count is", count()));
  return (
    <div class='flex justify-center items-center flex-col gap-1 h-screen bg-slate-900'>
      <h1 class='text-neutral-100 text-6xl'>
        {count()}
      </h1>
      <button
        class='bg-teal-600 hover:bg-teal-700 rounded-xl text-neutral-300 p-1 px-4'
        onClick={() => setCount(old => ++old)}
      >
        Count
      </button>
    </div>
  );
};

export default App;
