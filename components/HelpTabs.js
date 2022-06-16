import { useState } from 'react'
import { Tab } from '@headlessui/react'
import FAQ from './FAQ'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
//   let [categories] = useState({
//     Guide: [
//       {
//         id: 1,
//         title: 'Does drinking coffee make you smarter?',
//         date: '5h ago',
//         commentCount: 5,
//         shareCount: 2,
//       },
//       {
//         id: 2,
//         title: "So you've bought coffee... now what?",
//         date: '2h ago',
//         commentCount: 3,
//         shareCount: 2,
//       },
//     ],
//     FAQ: [
//       {
//         id: 1,
//         title: 'Is tech making coffee better or worse?',
//         date: 'Jan 7',
//         commentCount: 29,
//         shareCount: 16,
//       },
//       {
//         id: 2,
//         title: 'The most innovative things happening in coffee',
//         date: 'Mar 19',
//         commentCount: 24,
//         shareCount: 12,
//       },
//     ],
//   })

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Guide
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              FAQ
            </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >

            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <FAQ/>
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
