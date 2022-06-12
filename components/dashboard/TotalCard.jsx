
import Image from "next/image";

export default function TotalCard() {
  const Empty=false;
  return (
    <div  className="flex flex-wrap md:justify-between justify-center">
      <div className="relative flex flex-wrap justify-between  w-[244px] h-[102px] rounded-[14px] m-1 my-3 	 bg-[#577B7A]  border shadow-md md:flex-row md:max-w-xl ">
        <div className="flex flex-col justify-between p-4 pl-7 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
           {Empty?(0):('120$')} 
          </h5>
          <p className="mb-3 font-normal text-white dark:text-white">
          Products
          </p>
        </div>
        <div className="flex flex-col justify-between  top-3 right-0  h-auto absolute ">
        <Image className=" " src={"/bg-TotalCardImg.svg"} width={84}
                height={35}  alt="empty product"/>
   
        </div>
      </div>
      <div className="relative flex flex-wrap justify-between  w-[244px] h-[102px] rounded-[14px] m-1 my-3 	 bg-[#EE6363]  border shadow-md md:flex-row md:max-w-xl ">
        <div className="flex flex-col justify-between p-4 pl-7 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
           {Empty?(0):('120$')} 
          </h5>
          <p className="mb-3 font-normal text-white dark:text-white">
          Total Sold
          </p>
        </div>
        <div className="flex flex-col justify-between  top-3 right-0  h-auto absolute ">
        <Image className=" " src={"/bg-TotalCardImg.svg"} width={84}
                height={35}  alt="empty product"/>
   
        </div>
      </div>
      <div className="relative flex flex-wrap justify-between  w-[244px] h-[102px] rounded-[14px] m-1 my-3 	 bg-[#F3D030]  border shadow-md md:flex-row md:max-w-xl ">
        <div className="flex flex-col justify-between p-4 pl-7 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
          {Empty?(0):('€ 2.3 K')} 
          </h5>
          <p className="mb-3 font-normal text-white dark:text-white">
          Total Earnings
          </p>
        </div>
        <div className="flex flex-col justify-between  top-3 right-0  h-auto absolute ">
        <Image className=" " src={"/bg-TotalCardImg.svg"} width={84}
                height={35}  alt="empty product"/>
   
        </div>
      </div>
      <div className="relative   flex flex-wrap justify-between  w-[244px] h-[102px] rounded-[14px] m-1 my-3 	 bg-[#3D897A]  border shadow-md md:flex-row md:max-w-xl ">
        <div className="flex flex-col justify-between p-4 pl-7 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {Empty?(0):('120$')} 
          </h5>
          <p className="mb-3 font-normal text-white dark:text-white  ">
          Successful Orders
          </p>
        </div>
        <div className="flex flex-col justify-between  top-3 right-0  h-auto absolute ">
        <Image className=" " src={"/bg-TotalCardImg.svg"} width={84}
                height={35}  alt="empty product"/>
   
        </div>
      </div>
             
    </div>
  );
}
