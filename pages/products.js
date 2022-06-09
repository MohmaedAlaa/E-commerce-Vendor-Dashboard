import { useLayoutEffect, useRef, useState, useEffect } from "react";
import ProductsEmpty from "../components/ProductsEmpty";
import ProductsTable from "../components/ProductsTable";
import Select from "../components/Select";

// const people = [
//   {
//     id: 1,
//     Product: "Polo shirt",
//     Category: "Men",
//     SubCategory: "Clothing",
//     Quantity: "120",
//     UnitPrice: "€ 30",
//     Status: true,
//     date: "24/5/2022",
//     image:
//       "https://images.unsplash.com/photo-1625910513520-bed0389ce32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=60",
//   },
//   {
//     id: 2,
//     Product: "Polo shirt",
//     Category: "Men",
//     SubCategory: "Clothing",
//     Quantity: "120",
//     UnitPrice: "€ 30",
//     Status: false,
//     date: "24/5/2022",
//     image:
//       "https://images.unsplash.com/photo-1625910513520-bed0389ce32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=60",
//   },
//   {
//     id: 3,
//     Product: "Polo shirt",
//     Category: "Men",
//     SubCategory: "Clothing",
//     Quantity: "120",
//     UnitPrice: "€ 30",
//     Status: true,
//     date: "24/5/2022",
//     image:
//       "https://images.unsplash.com/photo-1625910513520-bed0389ce32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=60",
//   },
// ];

export default function Products() {
  const [people, setPeople] = useState([
    {
      id: 1,
      Product: "Polo shirt",
      Category: "Men",
      SubCategory: "Clothing",
      Quantity: "120",
      UnitPrice: "€ 30",
      Status: "Active",
      date: "24/5/2022",
      image:
        "https://images.unsplash.com/photo-1625910513520-bed0389ce32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=60",
    },
    {
      id: 2,
      Product: "Polo shirt",
      Category: "Men",
      SubCategory: "Clothing",
      Quantity: "120",
      UnitPrice: "€ 30",
      Status: "Active",
      date: "24/5/2022",
      image:
        "https://images.unsplash.com/photo-1625910513520-bed0389ce32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=60",
    },
    {
      id: 3,
      Product: "Polo shirt",
      Category: "Men",
      SubCategory: "Clothing",
      Quantity: "120",
      UnitPrice: "€ 30",
      Status: "false",
      date: "24/5/2022",
      image:
        "https://images.unsplash.com/photo-1625910513520-bed0389ce32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=60",
    },
  ]);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Products (120)
          </h1>
        </div>
      </div>
      <div className="mt-4 sm:mt-8  flex justify-between">
        <div className="flex gap-2 items-center">
          <Select />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex max-w-xs items-center justify-center rounded-md border border-1 bg-gray-50 px-8 py-2 text-sm font-medium text-gray-900 shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3d897a]"
          >
            Bulk Edit
          </button>
          <button
            type="button"
            className="inline-flex max-w-xs items-center justify-center rounded-md border border-transparent bg-[#3d897a] px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2"
          >
            + Add
          </button>
        </div>
      </div>
      {people.length == 0 ? (
        <ProductsEmpty />
      ) : (
        <ProductsTable people={people} />
      )}

      <button className="px-4" onClick={() => setPeople([])}>
        empty
      </button>
      <button
        className="px-4"
        onClick={() =>
          setPeople([
            {
              id: 1,
              Product: "Polo shirt",
              Category: "Men",
              SubCategory: "Clothing",
              Quantity: "120",
              UnitPrice: "€ 30",
              Status: true,
              date: "24/5/2022",
              image:
                "https://images.unsplash.com/photo-1625910513520-bed0389ce32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=60",
            },
            {
              id: 2,
              Product: "Polo shirt",
              Category: "Men",
              SubCategory: "Clothing",
              Quantity: "120",
              UnitPrice: "€ 30",
              Status: false,
              date: "24/5/2022",
              image:
                "https://images.unsplash.com/photo-1625910513520-bed0389ce32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=60",
            },
            {
              id: 3,
              Product: "Polo shirt",
              Category: "Men",
              SubCategory: "Clothing",
              Quantity: "120",
              UnitPrice: "€ 30",
              Status: true,
              date: "24/5/2022",
              image:
                "https://images.unsplash.com/photo-1625910513520-bed0389ce32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=60",
            },
          ])
        }
      >
        people
      </button>
    </div>
  );
}
