import { useLayoutEffect, useRef, useState } from "react";
import SelectProductReviews from "../../components/SelectProductReviews";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { data } from "autoprefixer";
import { useRouter } from "next/router";
import { product } from "../productReviews";


export default function View() {
  const router = useRouter();
  const data = router.query;
  const pid = data.pid;
  return (

    <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row">
            <a href={'/productReviews'} className='text-[#3D897A] hover:underline'>
                Product Reviews
            </a>
            <ChevronRightIcon  className='text-[#686868] mt-1 mx-2' width={20} />
            <p className="text-[#686868]">Reviews details</p>
        </div>

        <div className="rounded-[14px] mt-5 bg-white" style={{'box-shadow': '2px 2px 20px #8A97A940'}}>
            {product.filter((product)=> product.id == pid).map((product)=>(
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
            ))}
        </div>
       
    </div>
  );
}