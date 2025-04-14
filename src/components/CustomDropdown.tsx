"use client";

import { useState, useRef, useEffect } from "react";


interface CustomDropdownProps {
  hotels: { name: string }[];
  selectedHotel: { name: string };
  onChange: (hotel: { name: string }) => void;
}

export default function CustomDropdown({ hotels, selectedHotel, onChange }: CustomDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-[350px]" ref={dropdownRef}>
      <div
        className="flex items-center justify-between bg-white rounded-2xl px-7 py-5 shadow-md cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <span className="text-black font-medium text-lg">{selectedHotel.name}</span>
        </div>
      </div>
     
      {open && (
  <div className="absolute left-0 top-[110%] w-full bg-white shadow-lg rounded-xl max-h-60 overflow-y-auto z-50">
    {hotels.map((hotel) => (
      <div
        key={hotel.name}
        className="flex items-center px-4 py-3 gap-3 cursor-pointer hover:bg-gray-100"
        onClick={() => {
          onChange(hotel);
          setOpen(false);
        }}
      >
        <span className="text-black">{hotel.name}</span>
      </div>
    ))}
  </div>
)}

    </div>
  );
}
