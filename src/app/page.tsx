// {

import TodoUI from "./Todo";

export default async function Home() {
  return (
    <>
      <link rel="shortcut icon" href="tree.png" type="image/x-icon" />
      <main className="flex min-h-screen flex-col items-center  p-24">
        <TodoUI />
      </main>
    </>
  );
}

// }