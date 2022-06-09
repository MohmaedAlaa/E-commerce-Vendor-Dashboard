import { useLayoutEffect, useRef, useState } from "react";
import SelectProductReviews from "../components/SelectProductReviews";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { data } from "autoprefixer";

const product = [
    {
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
    // More product...
  ];

export default function orderDetails() {
    
  return (

    <div className="px-4 sm:px-6 lg:px-8">

        {/* {product?console.log(product):console.log('loading')} */}
        <div className="flex flex-row">
            <a href={'/orders'} className='text-[#3D897A] hover:underline'>
                orders
            </a>
            <ChevronRightIcon  className='text-[#686868] mt-1 mx-2' width={20} />
            <p className="text-[#686868]">order details</p>
        </div>

        <div className="flex flex-row my-5 gap-x-2">
            <div className="bg-[#EE6363] text-white rounded-[14px]  w-80 h-20 ">
                <div className="px-7 flex flex-row relative mt-6">
                    <p className="mt-1">Subtotal</p>
                    <p className="absolute right-7 text-[20px]">$ 30.96</p>
                </div>   
            </div>
            <div className="bg-[#F3D030] text-white rounded-[14px]  w-80 h-20">
                <div className="px-7 flex flex-row relative mt-6">
                    <p className="mt-1"> Shipping</p>
                    <p className="absolute right-7 text-[20px]">$ 00.00</p>
                </div>   
            </div>
            <div className="bg-[#3D897A] text-white rounded-[14px]  w-80 h-20">
                <div className="px-7 flex flex-row relative mt-6">
                    <p className="mt-1">Total</p>
                    <p className="absolute right-7 text-[20px]">$ 30.96</p>
                </div>   
            </div>
        </div>
        
        <div className="rounded-[14px]" style={{'box-shadow': '2px 2px 20px #8A97A940'}}>
            <div className="p-6">
                {product.map((product)=>(
                    <div>
                        <h1 className="text-[20px]">Order Summary</h1>
                        <hr className="my-3 border border-[#CDCFDC]"></hr>
                    <div  className="flex row gap-5">
                        <div>
                            <div className="flex row relative gap-10 mb-5">
                                <p className="text-[#686868]">Orders code</p>
                                <p>{product.code}</p>
                            </div>
                            <div  className="flex row relative gap-10 mb-5">
                                <p className="text-[#686868]">Shipping address</p>
                                <p>{product.ShippingAddress}</p>
                            </div>
                            <div  className="flex row relative gap-10">
                                <p className="text-[#686868]">Order date</p>
                                <p>{product.data}</p>
                            </div>
                        </div>

                    <hr className="border-l-2.5 h-28 border border-[#CDCFDC]"></hr>

                    <div>
                        <div  className="flex row relative gap-10 mb-5">
                            <p className="text-[#686868]">Orders status</p>
                            <p className={product.status == 'paid'?
                                "inline-flex rounded-full bg-[#3D897A] bg-opacity-25 px-2 text-xs font-semibold leading-5 text-[#3D897A]"
                                :"inline-flex rounded-full bg-[#F88700] bg-opacity-25 px-2 text-xs font-semibold leading-5 text-[#F88700]"}>
                                {product.status}
                            </p>
                        </div>
                        <div  className="flex row relative gap-10 mb-5">
                            <p className="text-[#686868]">Total amount</p>
                            <p>{product.amount}</p>
                        </div>
                        <div  className="flex row relative gap-10">
                            <p className="text-[#686868]">Payment method </p>
                            <p>{product.paymentMethod}</p>
                        </div>
                    </div>
                </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="rounded-[14px] mt-7 min-w-full divide-y divide-gray-300" style={{'box-shadow': '2px 2px 20px #8A97A940'}}>
            <div className="p-6">
                <h1 className="text-[20px]">Order Details</h1>
                <hr className="my-3 border border-[#CDCFDC]"></hr>
                <table className="min-w-full divide-y divide-gray-300" cellspacing="0" cellpadding="0" style={{'border':'none'}}>

                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[#686868] sm:pl-6  "
                      >
                        NO.
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-[#686868]"
                      >
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-[#686868]"
                      >
                        Variation
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-[#686868]"
                      >
                        SKU
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-[#686868]"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-[#686868]"
                      >
                        Price
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 bg-white">
                    {product.map((product) => (
                      <tr key={product.code}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                            <div className="ml-4 text-gray-500">
                              {product.no}
                            </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[#232323]">
                          <div>{product.code}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[#232323]">
                          <div>{product.variation}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[#232323]">
                          {product.SKU}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[#232323]">
                          {product.quantity}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-[#232323]">
                          {product.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
        </div>
       
    </div>
  );
}
