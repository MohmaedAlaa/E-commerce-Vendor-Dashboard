import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <aside className="z-30 bg-[#3D897A] flex-shrink-0 hidden shadow-sm w-64 overflow-y-auto text-white font-bold lg:block">
          <div className="flex flex-col gap-4 p-4">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/products">
              <a>products</a>
            </Link>
            <Link href="/Table">
              <a>Table</a>
            </Link>
            <Link href="/Table2">
              <a>Table2</a>
            </Link>
          </div>
        </aside>
        <main>{children}</main>
      </div>
      <footer>footer</footer>
    </>
  );
}
