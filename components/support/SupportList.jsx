import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import SortSelect from "./SortSelect";
import SupportTable from "./SupportTable";

export default function SupportList() {
  return (
    <div className="supportList  w-full flex flex-col">
      <h1 className="font-medium	text-[24px] w-full">Messages (2)</h1>
      <div className="flex flex-row justify-between mt-5">
        <div className="dropdown flex flex-row  align-middle justify-between w-[248px] ">
          <SortSelect />
        </div>

        <div className="flex">
         
          <button
            type="button"
            className="inline-flex max-w-xs items-center justify-center rounded-md border border-transparent bg-[#3d897a] px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2"
          >
            + Add
          </button>
        </div>
      </div>
<div className="">

  <SupportTable/>
</div>



    </div>
  );
}
