import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
export default function PopUp () {

  const [open, setOpen] = useState(false);  
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  // const [open, openModal] = useState(false)

  //   const toggleModal = () => {
  //       openModal(!open)
  //   };
    
  const closeIcon = (
    <svg class="h-6 w-6 text-[#707082]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div style={{'borderRadius':'10px'}}  className='popup'>
    <button onClick={onOpenModal} className="text-[#707082] text-[14px] px-2 py-1 flex row gap-2 mt-2">
      <div className='rotate-90'>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" className='h-5 w-5'>
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </div>
      Filter
    </button>
    <Modal open={open} onClose={onCloseModal} closeIcon={closeIcon} center>
      <div className='px-3 pb-16 pt-5 w-[750px] content-center	'>
        <h1 className='text-[24px] mb-3 '>Filter</h1>
        <hr></hr>
        <h1 className='text-[16px] mt-3'>Commission Range</h1>
        <div className='flex row'>
          <div class="w-full md:w-1/2 pr-5 mb-6 md:mb-0 my-5 flex row relative">
            <label class="block tracking-wide text-[#707082] text-[16px] mr-2 mt-3 " for="tracking-id">
              min
            </label>
            <div>
                <div className='border-l-[1px] border-[#D4D4D4] absolute text-[#707082] left-[250px] h-[45px]'></div>
                <div className=' absolute text-[#707082] left-[280px] top-3 h-9'>EUR</div>
            </div>
            <input class="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]" maxlength="20" id="tracking-id" type="text" placeholder="0"/>
          </div>
          <div class="w-full md:w-1/2 mb-6 md:mb-0 my-5 flex row relative">
            <label class="block tracking-wide text-[#707082] text-[16px] mr-2 mt-3" for="tracking2-id">
              max
            </label>
            <div>
                <div className='border-l-[1px] border-[#D4D4D4] absolute text-[#707082] left-[275px] h-[45px]'></div>
                <div className=' absolute text-[#707082] left-[305px] top-3 h-9'>EUR</div>
            </div>
            <input class="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]" maxlength="20" id="tracking2-id" type="text" placeholder="0"/>
          </div>
        </div>
        <h1 className='text-[16px] mt-5'>Date Range</h1>
        <div className='flex row'>
          <div class="w-full md:w-1/2 pr-5 mb-6 md:mb-0 my-5 flex row relative">
            <label class="block tracking-wide text-[#707082] text-[16px] mr-2 mt-3 " for="tracking3-id">
              from
            </label>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"  className='pointer-events-none w-8 h-8 absolute left-[295px] top-2 text-[#707082]'>
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <input class="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]" maxlength="25" id="tracking3-id" type="text" placeholder="dd/mm/yy"/>
          </div>
          <div class="w-full md:w-1/2 mb-6 md:mb-0 my-5 flex row relative">
            <label class="block tracking-wide text-[#707082] text-[16px] mr-2 mt-3" for="tracking4-id">
              to
            </label>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"  className='pointer-events-none w-8 h-8 absolute left-[313px] top-2 text-[#707082]'>
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <input class="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]" maxlength="25" id="tracking4-id" type="text" placeholder="dd/mm/yy"/>
          </div>
        </div>
        <div>
            <h1 className='my-5 text-[16px]'>Payment Status</h1>
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
            <button type="button" class=" w-1/3 focus:outline-none text-[#232323] bg-white hover:opacity-[90%] font-medium rounded-[10px] text-sm px-5 py-3 mr-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white" onClick={()=>onCloseModal()}>Reset</button>
            <button type="button" class=" w-1/3 focus:outline-none text-white bg-[#3D897A] hover:opacity-[90%] font-medium rounded-[10px] text-sm px-5 py-3 mr-2 mb-2 dark:bg-[#3D897A] dark:hover:bg-[#3D897A] dark:focus:ring-[#3D897A]">Apply</button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
  );
};