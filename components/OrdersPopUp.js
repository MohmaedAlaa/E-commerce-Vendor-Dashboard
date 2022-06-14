import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
// import '../styles/OrdersPopUp.css'
export default function PopUp () {

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const closeIcon = (
    <svg class="h-6 w-6 text-[#707082]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div style={{'borderRadius':'10px'}}  className='popup'>
    <button onClick={onOpenModal} className="border border-5 px-2 py-1 rounded-[8px]">Open modal</button>
    <Modal open={open} onClose={onCloseModal} closeIcon={closeIcon} center>
      <div className='px-3 pb-16 pt-5 w-[750px] content-center	'>
        <h1 className='text-[24px] mb-3 '>Tracking Info</h1>
        <hr></hr>
        <div className='flex row'>
          <div class="w-full md:w-1/2 pr-5 mb-6 md:mb-0 my-5">
            <label class="block tracking-wide text-[#232323] text-[16px] mb-2" for="tracking-id">
              Tracking ID
            </label>
            <input class="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]" id="tracking-id" type="text" placeholder="Enter Tracking ID"/>
          </div>
          <div class="w-full md:w-1/2 mb-6 md:mb-0 my-5">
            <label class="block tracking-wide text-[#232323] text-[16px] mb-2" for="tracking-carrier">
              Tracking Carrier
            </label>
            <input class="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]" id="tracking-carrier" type="text" placeholder="DHL.UPS.DPD. _"/>
          </div>
        </div>
        <div>
        <h1 className='my-5 text-[16px]'>Order Status</h1>
        <div  class="flex row">
          <div class="form-check pr-10">
            <input class="form-check-input text-[#3D897A] appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#3D897A] checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition  mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label inline-block text-[#232323] text-[16px]" for="flexRadioDefault1">
              Paid
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input text-[#3D897A] appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#3D897A] checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition  mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            <label class="form-check-label inline-block text-[#232323] text-[16px]" for="flexRadioDefault2">
              Refunded
            </label>
          </div>
        </div>
        </div>  
        <div className='relative'>
          <div className='mt-6 absolute w-full left-[475px] w-1/2 flex row'>
            <button type="button" class=" w-1/3 focus:outline-none text-[#232323] bg-white hover:opacity-[90%] font-medium rounded-[10px] text-sm px-5 py-3 mr-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white" onClick={()=>onCloseModal()}>Cancel</button>
            <button type="button" class=" w-1/3 focus:outline-none text-white bg-[#3D897A] hover:opacity-[90%] font-medium rounded-[10px] text-sm px-5 py-3 mr-2 mb-2 dark:bg-[#3D897A] dark:hover:bg-[#3D897A] dark:focus:ring-[#3D897A]">Apply</button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
  );
};