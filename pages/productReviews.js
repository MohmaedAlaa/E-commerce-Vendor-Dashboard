/*
  This example requires Tailwind CSS v3.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useLayoutEffect, useRef, useState } from "react";
import SelectProductReviews from "../components/SelectProductReviews";

const product = [
  {
    product: "Polo Shirt",
    Rate: "5",
    Date: "23/5/2022-11:18 PM",
    Review: "Great shirt! The size is perfect , The color is better than",
  },
  {
    product: "Polo Shirt",
    Rate: "3",
    Date: "25/5/2022-11:18 PM",
    Review: "Great shirt! The size is perfect , The color is better than",
  },
  // More product...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function products() {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedproduct, setSelectedproduct] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedproduct.length > 0 && selectedproduct.length < product.length;
    setChecked(selectedproduct.length === product.length);
    setIndeterminate(isIndeterminate);
  }, [selectedproduct]);

  function toggleAll() {
    setSelectedproduct(checked || indeterminate ? [] : product);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }
  const myLoader = ({ src, width, quality }) => {
    return `../public/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Product Reviews <span className="text-[#686868]">(42)</span>
          </h1>
        </div>
      </div>
      <div className="mt-4 sm:mt-8  flex justify-between">
        <div className="flex gap-2 items-center">
          <SelectProductReviews />
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full table-fixed divide-y divide-gray-300"
                     style={{'box-shadow': '2px 2px 20px #8A97A940'}}>
                <thead className="mx-2">
                  <tr>
                    <th
                      scope="col"
                      className=" px-6 sm:w-16 sm:px-8 min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-500"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                    >
                      Rate
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                    >
                      Review
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {product.map((product) => (
                    <tr
                      key={product.email}
                      className={
                        selectedproduct.includes(product)
                          ? "bg-gray-50"
                          : undefined
                      }
                    >
                      <td
                        className={classNames(
                          "whitespace-nowrap py-4 pr-3 px-6 sm:w-16 sm:px-8 text-gray-500",
                          selectedproduct.includes(product)
                        )}
                      >
                        <div className="flex flex-row space-x-1">
                            <div style={{boxShadow: '0px 2px 6px #54566533' , borderRadius:'6px'}}>
                                <img src="/Img - product 1@2x.png" width={42.5} height={42.5} alt="product" className="px-1"/>
                            </div>
                            <p className="mt-3 pl-2">{product.product}</p>
                        </div>
                        
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="flex flex-row space-x-1">
                            <p>{product.Rate}</p><img src="/golden star.svg" alt="golden star"/>
                          </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.Date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <p  className='truncate w-80'>{product.Review}</p>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-[#3D897A] hover:text-[#3D897A] hover:underline"
                        >
                          View<span className="sr-only">, {product.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
