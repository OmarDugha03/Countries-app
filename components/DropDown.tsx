"use client";
import { Listbox } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
type RegionName = {
  name: string;
};

export default function DropDown({}) {
  const reg = [
    { id: 1, name: "All", unavailable: false },
    { id: 2, name: "Africa", unavailable: false },
    { id: 3, name: "Asia", unavailable: false },
    { id: 4, name: "America", unavailable: false },
    { id: 5, name: "Europe", unavailable: false },
    { id: 6, name: "Oceanian", unavailable: false },
  ];

  const route = useRouter();

  const [selectedReg, setSelectedReg] = useState<RegionName>({ name: "All" });
  const handleSelectedRegion = (region: RegionName) => {
    setSelectedReg(region);
    if (region.name === "All") {
      route.push(`/`);
    } else {
      route.push(`/region/${region.name}`);
    }
  };

  useEffect(() => {
    route.push(`/`);
  }, []);
  return (
    <div className=" flex items-center justify-between px-4 mx-auto text-right  lg:mr-[60px]">
      <Listbox
        value={selectedReg}
        onChange={handleSelectedRegion}
        as="div"
        className="relative  w-full list-none md:mr-[80px] mr-[-40px] ">
        {({ open }) => (
          <>
            <Listbox.Button className="flex items-center justify-between py-3 text-lg font-bold rounded-md w-36 dark:text-slate-50 text-slate-900 bg-slate-300 bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <span className="px-10 text-center">{selectedReg.name}</span>
            </Listbox.Button>
            <AnimatePresence>
              {open && (
                <Listbox.Options
                  static
                  as={motion.div}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.5 },
                  }}
                  className="absolute right-0 mr-[-40px] md:mr-[80px] w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-slate-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {reg.map((selectedReg) => (
                    <Listbox.Option
                      key={selectedReg.id}
                      value={selectedReg}
                      disabled={selectedReg.unavailable}>
                      {({ active }) => (
                        <p
                          key={selectedReg.id}
                          className={`${
                            active ? "bg-cyan-700 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                          {selectedReg.name}
                        </p>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              )}
            </AnimatePresence>
          </>
        )}
      </Listbox>
    </div>
  );
}
