import { useLayoutEffect, useRef, useState } from "react";
import Tabs from "../components/HelpTabs";
import FAQ from "../components/FAQ";

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

  // useLayoutEffect(() => {
  //   const isIndeterminate =
  //     selectedproduct.length > 0 && selectedproduct.length < product.length;
  //   setChecked(selectedproduct.length === product.length);
  //   setIndeterminate(isIndeterminate);
  //   checkbox.current.indeterminate = isIndeterminate;
  // }, [selectedproduct]);

  function toggleAll() {
    setSelectedproduct(checked || indeterminate ? [] : product);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  function isEmpty(object) {
    for (const property in object) {
      return false;
    }
    return true;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Help
          </h1>
        </div>
      </div>
        {/* <FAQ/> */}
        <Tabs/>

    </div>
  );
}
