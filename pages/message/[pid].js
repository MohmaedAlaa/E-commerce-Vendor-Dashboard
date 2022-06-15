import React ,{useState} from "react";
import Image from "next/image";
import Link from 'next/link'
// import { ChevronRight, ThreeDRotation } from '@mui/icons-material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { PermMedia, Label, Room, EmojiEmotions, Cancel } from "@mui/icons-material";

import arrow from "/public/Icons/arrow.svg";
// import screen from "/public/images/Screenshot1.png";
import deleteIcon from "/public/Icons/delete.svg";
import MyDialog from "../../components/support/ModelImage"
import  {MessagesList}  from "/public/Data/MessagesListData";
import { useRouter } from 'next/router'

// import {useRecoilState} from "recoil";

export default function Message() {
  let [isOpen, setIsOpen] = useState(false)


  const router = useRouter()
  


const Message=MessagesList.filter(item=>item.id==router.query.pid)[0];

  return (
    <div className="Messages max-w-[847px] mx-auto  flex flex-col ">
      <div className="my-5 flex flex-row ">
        <div>    

     <Link  href="/support">
          <a className="text-[#3D897A] ">  Messages</a>
           </Link>
        </div>
        <div className=" relative">
          <Image src={arrow} className="absolute top-5 " alt=" arrow" />
          {/* <ArrowForwardIosIcon/> */}
        </div>{" "}
        <div> Message details</div>
      </div>

      <div className="rounded-[14px] my-2  bg-white drop-shadow-2xl p-4 flex flex-col">
        <div className="flex flex-row 	w-full border-b pb-3">
          <div className="text-lg font-medium pt-2">Feedback</div>
          <div className="flex flex-row justify-between	w-full ml-5  ">
            <div className=" 	 ">
              
              
              
            <span
                  className={`${
                    Message?.Status == "Solved"
                      ? "text-[#3D897A]  bg-[#3D897A] bg-opacity-25"
                      : "text-[#F88700] bg-[#EE6363] bg-opacity-25"
                  } inline-flex   text-xs font-semibold leading-5 p-2  rounded-xl `}
                >
                  {String(Message?.Status)}
                </span>
              
              
              
              
              
              
              </div>
            <div className="text-[#EE6363] p-2 pb-1 bg-[#EE636322] rounded-[6px]	 ">
              <Image src={deleteIcon} alt="deleteIcon" />
            </div>
          </div>
        </div>

        <div class="pt-5">
        {Message?.Feedback}
        </div>
        <div className="py-4">
        
          <button onClick={()=>setIsOpen(true)}>  <img src={`${Message?.image}`} alt="screen" height={151} width={269}/>
           </button><MyDialog  isOpen={isOpen}  setIsOpen={setIsOpen} image={Message?.image}  />
        </div>
        <div className="mt-5 pt-5 border-t flex flex-row  justify-between w-full">
          <div>#{Message?.id}</div>
          <div>{Message?.date}</div>
        </div>
      </div>
    </div>
  );
}
