import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <aside className="z-30 bg-blue-100 flex-shrink-0 hidden shadow-sm w-64 overflow-y-auto bg-Primary dark:bg-gray-800 lg:block">
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
          </div>
        </aside>
        <main>{children}</main>
      </div>
      <footer>footer</footer>
    </>
  );
}
