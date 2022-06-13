import { useLayoutEffect, useRef, useState } from "react";
import Select from "../components/Select";
import Link from 'next/link'
import Example from "../components/ordersDropDown";
import PopUp from "../components/PopUp";

export const product = [
  { id:'1',
    code: "#123234ggd",
    no: "1",
    amount: "$ 30",
    ShippingAddress:'Röpkestraße 35,Düsseldorf,40235,Germany',
    orderDate:"23/5/2022-11:18 PM",
    orderStatus:'pending',
    paymentMethod:'Paypal',
    variation:'XL.Blue',
    SKU:'XLpoloshirt001',
    quantity:'1',
    status:'pending'
  },
  { 
    id:'2',
    code: "#878654gd",
    no: "2",
    amount: "$ 50",
    ShippingAddress:'Röpkestraße 35,Düsseldorf,40235,Germany',
    orderDate:"23/5/2022-11:18 PM",
    orderStatus:'pending',
    paymentMethod:'Paypal',
    variation:'XL.Blue',
    SKU:'XLpoloshirt001',
    quantity:'1',
    status:'pending'
},
  // More product...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function products() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedproduct, setSelectedproduct] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedproduct.length > 0 && selectedproduct.length < product.length;
    setChecked(selectedproduct.length === product.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedproduct]);

  function toggleAll() {
    setSelectedproduct(checked || indeterminate ? [] : product);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Orders <span className="text-[#686868]">(2)</span>
          </h1>
        </div>
      </div>
      <div className="mt-4 sm:mt-8  flex justify-between">
        <div className="flex gap-2 items-center">
          <Example />
                        
        

        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="relative w-12 px-6 sm:w-16 sm:px-8"
                    >
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-[#3D897A] text-[#3D897A] focus:ring-[#3D897A] sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-500"
                    >
                      Order Code
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                    >
                      NO.of product
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                    >
                      Tracking Info
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
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedproduct.includes(product) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-[#3D897A]" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#3D897A] focus:ring-[#3D897A] sm:left-6"
                          value={product.email}
                          checked={selectedproduct.includes(product)}
                          onChange={(e) =>
                            setSelectedproduct(
                              e.target.checked
                                ? [...selectedproduct, product]
                                : selectedproduct.filter((p) => p !== product)
                            )
                          }
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        <Link href={`/orders/${product.id}`}>
                          {product.code}
                        </Link>
                        <orderDetails product={product} />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.no}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.amount}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <PopUp />
                      </td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm  text-gray-500 font-medium sm:pr-6">
                        <button className="border border-5 px-2 py-1 rounded-[8px]">Download Invoice</button>
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
