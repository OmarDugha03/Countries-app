import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
export default function Example() {
  const reg = ["Africa", "Asia", "America", "Europe", "Oceanian"];
  return (
    <div className=" flex items-center justify-between px-4 mx-auto text-right  lg:mr-[40px]">
      <Menu as="div" className="relative inline-block w-full py-2 text-left ">
        {({ open }) => (
          <>
            <Menu.Button className="flex items-center justify-between px-8 py-3 text-lg font-bold rounded-md dark:text-slate-50 text-slate-900 bg-slate-300 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Region
              <ChevronDownIcon width={30} />
            </Menu.Button>
            <AnimatePresence>
              {open && (
                <Menu.Items
                  static
                  as={motion.div}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.5 },
                  }}
                  className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {reg.map((item) => (
                    <Menu.Item key={item}>
                      {({ active }) => (
                        <p
                          key={item}
                          className={`${
                            active ? "bg-cyan-700 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                          {item}
                        </p>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              )}
            </AnimatePresence>
          </>
        )}
      </Menu>
    </div>
  );
}
