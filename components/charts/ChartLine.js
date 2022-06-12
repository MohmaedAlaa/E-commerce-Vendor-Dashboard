import { Line } from "react-chartjs-2";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

export const options = {
  plugins: {
    legend: { display: true },
  },
  elements: {
    line: {
      tension: 0.1,
      borderWidth: 2,

      fill: "start",
      borderColor: "#D4D4D4",
    },
    point: { p1: { backgroundColor: "#8A97A940" }, radius: 3, hitRadius: 1 },
  },
  scales: {
    xAxis: {
      display: true,
      grid: {
        display: false,
      },
    },
    yAxis: {
      display: true,
      beginAtZero: true,
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
};

var OrginData = [10, 50, 60, 70, 30, 40, 50, 80, 60, 70, 50, 90];

export const argMax = (array) => {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
};

export const argMin = (array) => {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] < r[0] ? a : r))[1];
};

var color = OrginData.map((x) => "#D4D4D4");
color[argMax(OrginData)] = "#3D897A";
color[argMin(OrginData)] = "#EE6363";

export const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: OrginData,
      backgroundColor: color,
    },
  ],
};

export default function ChartLine({empty}) {
  return (
    <div className=" relative  p-4  md:basis-1/2 sm:basis-1/1 md:max-w-[48%]  rounded-[14px] m-2  h-[270px]	 bg-[#fff]  border shadow-md md:flex-row  ">
      <div className="text-xl w-auto absolute ">Sold Amounts</div>
      <div className="flex flex-wrap justify-between w-[1/4]  ">
        {/* start dropdown */}

        <Menu as="div" className="relative inline-block text-right ml-auto">
          <div>
            <Menu.Button className="inline-flex justify-center w-full ml-auto ">
              Monthly
              <ChevronDownIcon
                className="-mr-1 ml-auto h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      daily
                    </a>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Monthly
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Yearly
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* end dropdown */}
      </div>

      {empty ? (
        <div className="m-auto flex  flex-col justify-center items-center h-full pb-5 ">
          <div className="m-auto text-center flex  flex-col justify-center items-center">
            <Image
              className=" "
              src={"/ChartLineEmpty.svg"}
              width={114}
              height={104}
              alt="empty product"
            />
          </div>
          <div className="m-auto text-center flex  flex-col justify-center items-center">
          Nothing is sold yet!
          </div>
        </div>
      ) : (
      
      
      <div className="flex flex-wrap justify-between    ">
        <div className="flex  flex-col  mt-10 w-[75%] ">
          <div className="flex w-full h-full  ">
            {ChartJS.register(
              CategoryScale,
              LinearScale,
              PointElement,
              LineElement
            )}
            <Line data={data} options={options} />
          </div>
        </div>

        <div className="flex flex-col   w-[25%] content-between	mb-10">
          <div className="flex flex-wrap columns-1 justify-between mb-auto ">
            <div className="flex flex-wrap justify-between mb-2 ">
              <span className="text-[#3D897A] pr-2 text-[40px] h-auto leading-4	">
                &#8226;
              </span>
              <span className="text-black text-xs">Highest Amount</span>
            </div>

            <div className="flex flex-wrap justify-between  ">
              <span className="text-[#EE6363] pr-2 text-[40px] h-auto leading-4	">
                &#8226;
              </span>
              <span className="text-black text-xs ">Lowest Amount</span>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
}
