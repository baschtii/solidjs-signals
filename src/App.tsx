import { Component, createSignal, For, splitProps } from 'solid-js';
import { name, setName } from './singals';

const App: Component = () => {
  const [age, setAge] = createSignal(30);
  return (
    <section class="bg-slate-800 ">
      <div class="text-5xl text-blue-500 text-center pt-8">
        Hello {name().first} {name().last}
      </div>
      <div class="text-3xl text-blue-500 text-center">
        Your Normal Age is: {age()}
      </div>
      <DoubleAge age={age()} />
      <div class="flex mb-6">
        <form class="m-auto">
          <div class="mb-4">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              value={name().first}
              onInput={(e) =>
                setName({ ...name(), first: e.currentTarget.value })
              }
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-4">
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              value={name().last}
              onInput={(e) =>
                setName({ ...name(), last: e.currentTarget.value })
              }
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="age"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              type="number"
              id="last_name"
              value={age()}
              onInput={(e) => setAge(parseFloat(e.currentTarget.value))}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </form>
      </div>
      <HugeData />
    </section>
  );
};

interface DoubleAgeProps {
  age: number;
}
const DoubleAge = (props: DoubleAgeProps) => {
  const [local] = splitProps(props, ['age']);
  return (
    <div class="text-3xl text-blue-500 text-center pb-8">
      Your double Age is: {local.age * 2}
    </div>
  );
};

const HugeData = () => {
  const data = Array.from({ length: 1000 }, () => Math.random());
  return (
    <For each={data}>
      {(item) => <div class="text-base text-white text-center">{item}</div>}
    </For>
  );
};

export default App;
