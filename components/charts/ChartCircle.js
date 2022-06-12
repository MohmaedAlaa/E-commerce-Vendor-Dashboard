import { Doughnut } from "react-chartjs-2";
import { doughnutOptions, doughnutData } from "./chartsData";
import { Chart, ArcElement } from "chart.js";
import Image from "next/image";

export default function ChartCircle({empty}) {

  return (
    <div className=" relative  p-4  md:basis-1/2 sm:basis-1/1 md:max-w-[48%]  rounded-[14px] m-2  h-[270px]	 bg-[#fff]  border shadow-md md:flex-row  ">
      <div className="text-xl w-auto absolute ">Orders</div>
      {empty ?(
        <div className="m-auto flex  flex-col justify-center items-center h-full pb-5 ">
          <div className="m-auto text-center flex  flex-col justify-center items-center">
            <Image
              className=" "
              src={"/ChartCircleEmpty.svg"}
              width={122}
              height={180}
              alt="empty product"
            />
          </div>
          <div className="m-auto text-center flex  flex-col justify-center items-center">
            No orders yet!
          </div>
        </div>
      ):(
        <div className="flex flex-wrap justify-between    ">
          <div className="flex  flex-col  mt-10 w-[50%] divide-y divide-[#EEEEEE]">
            <div className="flex flex-wrap justify-between py-3 ">
              <div className="flex text-[#686868]	">Total orders</div>
              <div className="flex text-black font-medium		 ">120</div>
            </div>
            <div className="flex flex-wrap justify-between py-3 ">
              <div className="flex text-[#686868]	">Pending orders</div>
              <div className="flex text-black font-medium		 ">8</div>
            </div>
            <div className="flex flex-wrap justify-between py-3 ">
              <div className="flex text-[#686868]	">Cancelled orders</div>
              <div className="flex text-black font-medium		 ">5</div>
            </div>
            <div className="flex flex-wrap justify-between py-3 ">
              <div className="flex text-[#686868]	">Successful orders</div>
              <div className="flex text-black font-medium		 ">97</div>
            </div>
          </div>

          <div className="flex flex-col pl-10  w-[50%] content-between	">
            <div className="flex items-center w-auto m-auto relative">
              <Doughnut
                data={doughnutData}
                options={doughnutOptions}
                className="chart"
                width={115}
                height={115}
              />
              {Chart.register(ArcElement)}

              <div className="flex justify-center items-center	  absolute w-[75%] h-[75%] 	 text-[#3D897A] bg-emerald-100 rounded-full  opacity-80 left-[13%]  border-4	border-[#fff] text-2xl ">
                60%
              </div>
            </div>
            <div className="flex flex-wrap columns-2 justify-between mt-auto ">
              <div className="flex flex-wrap justify-between  ">
                <span className="text-[#3D897A] pr-3 text-[40px] h-auto leading-4	">
                  &#8226;
                </span>
                <span className="text-black">Successful</span>
              </div>
              <div className="flex flex-wrap justify-between  ">
                <span className="text-[#F3D030] pr-3 text-[40px] h-auto leading-4	">
                  &#8226;
                </span>
                <span className="text-black">Pending</span>
              </div>
              <div className="flex flex-wrap justify-between  ">
                <span className="text-[#EE6363] pr-3 text-[40px] h-auto leading-4	">
                  &#8226;
                </span>
                <span className="text-black">Cancelled</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
