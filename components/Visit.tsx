'use client'
import React, { useEffect } from "react";

const Visit = () => {
  useEffect(() => {
    // Mengatur nilai input date ke tanggal hari ini saat komponen dimuat
    const today = new Date().toISOString().split("T")[0];
    const dateInput = document.getElementById("date") as HTMLInputElement;
    if (dateInput) {
      dateInput.value = today;
    }
  }, []);

  return (
    <>
      <div
        id="visit"
        className="container mx-auto flex px-6 sm:px-[100px] pt-[64px] h-auto"
      >
        <div className="w-full">
          <p>
            NABASTALA <span className="text-[#8C8C8C]">VISIT</span>
          </p>
          <div className="w-full border-b-2 mt-[10px]"></div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center px-6 sm:px-[100px] h-auto">
        <p className="mt-[32px] text-justify uppercase text-xs sm:text-[12px] text-[#8C8C8C] tracking-wide leading-6">
          Welcome to the official ticket purchasing system for Nabastala
          National Park! To ensure your visit goes smoothly and complies with
          national park regulations, you can easily purchase entry tickets
          through this platform. Through our ticket purchasing service, you can
          choose the date of your visit, the type of ticket that suits your
          needs and better organize your visit. Every ticket purchase you make
          also supports nature conservation and maintenance of Nabastala
          National Park. Thank you for your support!
        </p>
        <div className="container mt-[32px]">
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-[12px] text-[#8C8C8C] font-medium">
                  FULL NAME
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-[#D9D9D9] text-[#8C8C8C] text-[12px] block w-full py-[15px] px-[10px] uppercase"
                  placeholder="NAUFAL CHOIRUL ANANDA"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-[12px] text-[#8C8C8C] font-medium">
                  VISIT DATE
                </label>
                <input
                  type="date"
                  id="date"
                  className="bg-[#D9D9D9] text-[#8C8C8C] text-[12px] block w-full py-[15px] px-[10px] uppercase"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-[12px] text-[#8C8C8C] font-medium">
                  TICKET TYPE
                </label>
                <select
                  id="type"
                  className="bg-[#D9D9D9] text-[#8C8C8C] text-[12px] block w-full py-[15px] px-[10px] uppercase"
                >
                  <option selected>ADULTS</option>
                  <option value="AK">ADULTS & KIDS</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-[12px] text-[#8C8C8C] font-medium">
                  NUMBER OF TICKET
                </label>
                <input
                  type="number"
                  id="first_name"
                  className="bg-[#D9D9D9] text-[#8C8C8C] text-[12px] block w-full py-[15px] px-[10px] uppercase"
                  placeholder="01"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-neutral-950 tracking-wider text-[12px] font-medium w-full py-[15px] text-center"
            >
              ORDER TICKET
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Visit;
