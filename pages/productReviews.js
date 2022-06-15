import { useLayoutEffect, useRef, useState ,useEffect } from "react";
import SelectProductReviews from "../components/SelectProductReviews";
import PopUp from "../components/ProductReviewsFilter";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Link from 'next/link'

export const product = [
  { id : '1',
    product: "Polo Shirt",
    rate: "5",
    date: "23/5/2022-11:18 PM",
    review: "Great shirt! The size is perfect , The color is better than Great shirt! The size is perfect , The color is better than",
    description:'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus aliquam elitaelementum commodo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Praesent eujusto quis mi dapibus fermentum.In posuere sollicitudin imperdiet.'
  },
  { 
    id : '2',
    product: "Polo Shirt",
    rate: "3",
    date: "25/5/2022-11:18 PM",
    review: "Great shirt! The size is perfect , The color is better than Great shirt! The size is perfect , The color is better than",
    description:'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Vivamus aliquam elitaelementum commodo.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Praesent eujusto quis mi dapibus fermentum.In posuere sollicitudin imperdiet.'
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

  const arrow = useRef();
  const onArrowClickDown = () => {
    
    if(arrow.current.classList.value == 'flex gap-2 items-center text-[#686868] cursor-pointer transition-[all-0.3s-0.1s-ease-in-out]'){
      arrow.current.classList.add('rotate-180')
    }
    else{
      arrow.current.classList.value == 'flex gap-2 items-center text-[#686868] cursor-pointer rotate-180 transition-[all-0.3s-0.1s-ease-in-out]'
      arrow.current.classList.remove('rotate-180')
    }
    product= product.slice(0).reverse()
    console.log(product)
  };
  
  const isEmpty = (object) => {
    for (const property in object) {
      return false;
    }
    return true;
  }
  // const isRevers = () => {
  //   if(arrow.current.classList.value.includes('rotate-180')){
  //     return true;
  //     console.log(true);
  //   }
  //   return false;
  //   console.log(falseZ)
  // }
  // useEffect(() => {
  //  isRevers()
  // }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Product Reviews <span className="text-[#686868]">(42)</span>
          </h1>
        </div>
      </div>
      <div className="flex row gap-x-5">
        <div className="mt-4 sm:mt-8  flex justify-between">
          <div className="flex gap-2 items-center">
            <SelectProductReviews />
          </div>
        </div>

        <div className='mt-4 sm:mt-9  flex justify-between w-[20px]'>
          <div className='flex gap-2 items-center text-[#686868] cursor-pointer transition-[all-0.3s-0.1s-ease-in-out]' ref={arrow} onClick={()=>(onArrowClickDown())}>
            <ArrowUpwardIcon />
          </div>
        </div>

        <div className="mt-4 sm:mt-8 flex justify-between">
          <div className="flex gap-2 items-center">
            <PopUp />
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col"  style={{'box-shadow':'0px 10px 60px #DCDCDC8C'}}>
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg px-10 py-4 bg-white">
              {
                !isEmpty(product)?
                <table className="min-w-full table-fixed divide-y divide-gray-300">
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
                  <tbody className=" bg-white">
                    { 
                     product.map((product) => (
                      
                      <tr
                        key={product.email}
                        // className="hover:bg-[#F2F4F7] duration-700"
                      >
                        {console.log(arrow)}
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 pr-3 px-6 sm:w-16 sm:px-8 text-gray-500",
                            selectedproduct.includes(product)
                          )}
                        >
                          <div className="flex flex-row space-x-1">
                              <div className="bg-white" style={{boxShadow: '0px 2px 6px #54566533' , borderRadius:'6px'}}>
                                  <img src="/Img - product 1@2x.png" width={42.5} height={42.5} alt="product" className="px-1"/>
                              </div>
                              <p className="mt-3 pl-2">{product.product}</p>
                          </div>
                          
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="flex flex-row space-x-1">
                              <p>{product.rate}</p><img src="/golden star.svg" alt="golden star"/>
                            </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {product.date}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <p  className='truncate w-[400px]'>{product.review}</p>
                        </td>
                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link href={`/productReviews/${product.id}`}>
                          <a className="text-[#3D897A] hover:text-[#3D897A] hover:underline"> View</a>
                        </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                :
                <div className="lg:block relative flex-1 w-full bg-white px-[325.2px] py-24 w-full">
                  <img
                  className="object-cover"
                  src="/Reviews.svg"
                  alt=""
                  />
                  <p className='ml-9 mt-5 text-[18px] w-full'>No reviews yet!</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
