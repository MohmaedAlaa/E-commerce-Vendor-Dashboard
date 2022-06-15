import { Fragment,useState } from "react";
import SortSelect from "./SortSelect";
import SupportTable from "./SupportTable";
import MyDialog from "./ModelCreateMessage.js";
import { MessagesList } from "/public/Data/MessagesListData";
export default function SupportList() {
  let [isOpen, setIsOpen] = useState(false)


  return (
    <div className="supportList  w-full flex flex-col">
      <h1 className="font-medium	text-[24px] w-full">Messages ({MessagesList?.length})</h1>
      <div className="flex flex-row justify-between mt-5">
        <div className="dropdown flex flex-row  align-middle justify-between w-[248px] ">
          <SortSelect />
        </div>

        <div className="flex">
         
          <button onClick={()=>setIsOpen(true)}
            type="button"
            className="inline-flex max-w-xs items-center justify-center rounded-md border border-transparent bg-[#3d897a] px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2"
          >
            + Add
          </button>
        </div>
      </div>
<div className="">

  <SupportTable MessagesList={MessagesList}/>
</div>

<MyDialog  isOpen={isOpen}  setIsOpen={setIsOpen}  />

    </div>
  );
}
