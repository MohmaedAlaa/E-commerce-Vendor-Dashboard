import React from "react";
import Image from "next/image";
import arrow from "/public/Icons/arrow.svg"
import screen from "/public/images/Screenshot1.png"
import deleteIcon from '/public/Icons/delete.svg'
import { MessagesList } from "/public/Data/MessagesListData";

export default function Message() {
  return (
    <div className="Messages max-w-[847px] mx-auto  flex flex-col ">
      <div className="my-5 flex flex-row ">
       <div><a href="/support" className="text-[#3D897A] ">Messages</a></div>  <div  className=" relative"><Image src={arrow} className="absolute top-5 "  alt=" arrow" /></div> <div> Message details</div>
      </div>

      <div className="rounded-[14px] my-2  bg-white drop-shadow-2xl p-4 flex flex-col">
        <div className="flex flex-row 	w-full border-b pb-3">
          <div className="text-lg font-medium pt-2">Feedback</div>
          <div className="flex flex-row justify-between	w-full ml-5  ">
            <div className="  p-2 bg-[#3D897A22] rounded-xl	 ">
              Solved
            </div>
            <div className="text-[#EE6363] p-2 pb-1 bg-[#EE636322] rounded-xl	 ">
            <Image src={deleteIcon} alt="deleteIcon" />
            
            
           
            </div>
          </div>
        </div>

        <div class="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam elit a elementum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu justo quis mi dapibus fermentum. In posuere sollicitudin imperdiet.</div>
     <div className="py-4">
     <Image src={screen} alt="" height={151} width={269} /></div>
     <div className="mt-5 pt-5 border-t flex flex-row  justify-between w-full">
        <div>#015676df
     </div>
     <div>25/5/2022 - 11:18 PM
     </div>
      </div>
    </div></div>
  );
}
