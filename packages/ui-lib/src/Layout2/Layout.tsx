import '../index.css';

export const Layout = () => (
  <>
    <header className="bg-amber-400 p-5">
      <h1 className="text-2xl md:text-4xl">Header2</h1>
    </header>

    <div className="bg-white my-5 w-full h-screen flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
        <h1 className="text-2xl md:text-4xl">Sidebar</h1>
      </aside>
      <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
        <h1 className="text-2xl md:text-4xl">Main Content</h1>
      </main>
    </div>

    {/* <footer className="bg-slate-800 mt-auto p-5">
      <h1 className="text-2xl md:text-4xl text-white">Footer</h1>
    </footer> */}
  </>
);
