import { Fragment, useRef, useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, XIcon } from '@heroicons/react/outline'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function PopUp () {

  const [open, setOpen] = useState(false);  
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const cancelButtonRef = useRef(null)

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

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0 w-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-1 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:p-6">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 border-b-[2px]">
                    <h1 className='text-[24px] mb-5'>Filter</h1>
                    </Dialog.Title>

                    <div className='py-3 w-[750px] content-center	'>
                      <h1 className='text-[16px] mt-3 '>Date Range</h1>
                      <div className='flex row'>
                        <div class="w-full md:w-1/2 pr-5 mb-6 md:mb-0 my-5 flex row relative">
                          <label class="block tracking-wide text-[#707082] text-[16px] mr-2 mt-3 " for="tracking-id">
                            from
                          </label>
                          <CalendarTodayOutlinedIcon className='pointer-events-none w-8 h-8 absolute left-[310px] top-2 text-[#707082]'/>
                          <input class="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]" maxlength="25" id="tracking-id" type="text" placeholder="dd/mm/yy"/>
                        </div>
                        <div class="w-full md:w-1/2 mb-6 md:mb-0 my-5 flex row relative">
                          <label class="block tracking-wide text-[#707082] text-[16px] mr-2 mt-3" for="tracking-carrier">
                            to
                          </label>
                          <CalendarTodayOutlinedIcon className='pointer-events-none w-8 h-8 absolute left-[330px] top-2 text-[#707082]'/>
                          <input class="appearance-none block w-full bg-[#F9F9F9] text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]" maxlength="25" id="tracking-carrier" type="text" placeholder="dd/mm/yy"/>
                        </div>
                      </div>
                      <div>
                      <h1 className='my-5 text-[16px]'>Rate</h1>
                      <div class="flex row gap-10">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white text-[#3D897A] checked:bg-[#3D897A] checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1" />
                          <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox1"><div className='flex row gap-2'>5<img src="/golden star.svg" alt="golden star" /></div></label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white text-[#3D897A] checked:bg-[#3D897A] checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2" />
                          <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2"><div className='flex row gap-2'>4<img src="/golden star.svg" alt="golden star" /></div></label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white text-[#3D897A] checked:bg-[#3D897A] checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2" />
                          <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2"><div className='flex row gap-2'>3<img src="/golden star.svg" alt="golden star" /></div></label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white text-[#3D897A] checked:bg-[#3D897A] checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2" />
                          <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2"><div className='flex row gap-2'>2<img src="/golden star.svg" alt="golden star" /></div></label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white text-[#3D897A] checked:bg-[#3D897A] checked:border-[#3D897A] focus:outline-none focus:ring-[#3D897A] transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2" />
                          <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2"><div className='flex row gap-2'>1<img src="/golden star.svg" alt="golden star" /></div></label>
                        </div>
                      </div>
                      </div>  

                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-1/4 focus:outline-none text-white bg-[#3D897A] hover:opacity-[90%] font-medium rounded-[10px] text-sm px-5 py-3 mr-2 mb-2 dark:bg-[#3D897A] dark:hover:bg-[#3D897A] dark:focus:ring-[#3D897A]"
                    onClick={() => setOpen(false)}
                  >
                    Apply
                  </button>
                  <button
                    type="button"
                    className="w-1/4 focus:outline-none text-[#232323] bg-white hover:opacity-[90%] font-medium rounded-[10px] text-sm px-5 py-3 mr-2 mb-2 dark:bg-white dark:hover:bg-white dark:focus:ring-white"
                    onClick={() => setOpen(false)}
                  >
                    Reset
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  </div>
  );
};