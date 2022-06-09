import { useLayoutEffect, useRef, useState } from "react";
import SelectProductReviews from "../components/SelectProductReviews";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { data } from "autoprefixer";

const product = [
  {
    product: "Polo Shirt",
    rate: "5",
    date: "23/5/2022-11:18 PM",
    review: "Great shirt! The size is perfect , The color is better than",
    description:'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus aliquam elitaelementum commodo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Praesent eujusto quis mi dapibus fermentum.In posuere sollicitudin imperdiet.'
  },
  // More product...
];

export default function View({product}) {
    
  return (

    <div className="px-4 sm:px-6 lg:px-8">

        {product?console.log(product):console.log('loading')}
        <div className="flex flex-row">
            <a href={'/productReviews'} className='text-[#3D897A] hover:underline'>
                Product Reviews
            </a>
            <ChevronRightIcon  className='text-[#686868] mt-1 mx-2' width={20} />
            <p className="text-[#686868]">Reviews details</p>
        </div>

        <div className="rounded-[14px] mt-5" style={{'box-shadow': '2px 2px 20px #8A97A940'}}>
      
              <div className="p-6">
              
                <div className="flex row">
                    <h1>Great Shirt!</h1>
                    <div className="flex row ml-2">
                      {product.rate == '1'?<img src="/golden star.svg" alt="golden star"/>:
                      product.rate == '2'? <><img src="/golden star.svg" alt="golden star" /><img src="/golden star.svg" alt="golden star" /></>:
                      product.rate == '3'? <><img src="/golden star.svg" alt="golden star" /><img src="/golden star.svg" alt="golden star" /><img src="/golden star.svg" alt="golden star" /></>:
                      product.rate == '4'? <><img src="/golden star.svg" alt="golden star" /><img src="/golden star.svg" alt="golden star" /><img src="/golden star.svg" alt="golden star" /><img src="/golden star.svg" alt="golden star" /></>:
                      <><img src="/golden star.svg" alt="golden star" /><img src="/golden star.svg" alt="golden star" /><img src="/golden star.svg" alt="golden star" /><img src="/golden star.svg" alt="golden star" /><img src="/golden star.svg" alt="golden star" /></>
                      }
                    </div>
                </div>

                <div className="text-[#707082]">
                  <div className="my-3">
                      <p >{product.date}</p>
                  </div>
                  
                  <hr className="my-3"></hr>

                  <div>
                    <p>
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
           
        </div>
       
    </div>
  );
}
