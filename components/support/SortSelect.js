import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

const people = [
  { id: 1, name: "Recent" },
  { id: 2, name: "Solved" },
  { id: 3, name: "Pending" },
  { id: 4, name: "Old" },
 
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SortSelect() {
  const [selected, setSelected] = useState(people[0]);
 
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="flex flex-wrap flex-row justify-between " >

          <Listbox.Label className=" text-sm font-medium text-[#686868] align-middle my-auto ">
            Sort By
          </Listbox.Label>
          <div className=" relative">
            <Listbox.Button className="bg-white relative w-[195px] border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-[#3d897a] focus:border-[#3d897a] sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-48  bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-gray-900 bg-[#3d897a] bg-opacity-25"
                          : "text-gray-900",
                        "cursor-default select-none w-48 relative py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block w-40"
                          )}
                        >
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-[#3d897a]",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
