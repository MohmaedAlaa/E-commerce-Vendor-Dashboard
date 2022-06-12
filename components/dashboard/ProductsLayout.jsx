import React,{useState} from "react";
// import {ProductsData} from '/ProductsData'
import { ProductsData } from './../../public/ProductData';
import ProductsEmpty from './../ProductsEmpty';
export default function ProductsLayout() {
  const [products,setProducts]=useState(ProductsData);
  // setProducts([]);
  return (
    <div className=" relative  p-4   rounded-[14px] m-2  min-h-[517px]	 bg-[#fff]  border shadow-md md:flex-row  ">
      <div className="flax flax-col">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl font-semibold text-gray-900">
            Products ({products.length})
          </h1>
          {products.length>0&&(   <button
            type="button"
            className="inline-flex max-w-xs items-center justify-center rounded-md border border-transparent bg-[#3d897a] px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2"
          >
            + Add
          </button>)}
        </div>
{products.length>0?(
        <div class=" overflow-x-auto  sm:rounded-lg mt-5  relative max-h-[450px] overflow-y-scroll scroll-bar">
          <table class="w-full text-sm text-left table-auto	 ">
            <thead>
              <tr class="text-xs  border-b  table-fixed  w-full ">
                <th scope="col" class="pr-6 py-3">
                  Product
                </th>
                 <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Sub-Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
               
                <th scope="col" class="px-6 py-3">
                Unit Price
                </th>
                <th scope="col" class="px-6 py-3">
               State
                </th>
                <th scope="col" class="pl-6 py-3">
                Date
                </th>
              </tr>
            </thead>
            
            <tbody className="">
            
            {products.map((product) => (

              <tr class="">
                <th
                  scope="row"
                  class="pr-6 py-4 font-medium text-gray-500 dark:text-white whitespace-nowrap"
                >
                    
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 ">
                          <img
                            className="h-10 w-10  object-cover "
                            src={product.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-500">
                            {product.Product}
                          </div>
                         
                        </div>
                      </div>
                    
                </th>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {product.Category}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {product.SubCategory}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {product.Quantity}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {product.UnitPrice}
                    </td>

             <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      <span
                        className={`${
                          product.Status === "Active"
                            ? "text-[#3D897A]  bg-[#3D897A] bg-opacity-25"
                            : "text-[#EE6363] bg-[#EE6363] bg-opacity-25"
                        } inline-flex rounded-full px-2 text-xs font-semibold leading-5 `}
                      
                      >
                     {String(product.Status)} 
                      </span>

                    </td>

                    <td className="whitespace-nowrap pl-6 py-4 text-sm text-gray-500">
                      {product.date}
                    </td> 
             </tr> 
            





            ))}
            </tbody>
          </table>
        </div>

        ):(
          <ProductsEmpty/>
        )}
      </div>
    </div>
  );
}
