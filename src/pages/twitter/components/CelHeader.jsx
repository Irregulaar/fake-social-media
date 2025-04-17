import WifiIcon from "@/icons/wifi.svg?react";
import SignalIcon from "@/icons/signal.svg?react";
import BatteryIcon from "@/icons/battery.svg?react";

function CelHeader() {
  return (
    <div className="flex flex-row items-center justify-between px-8 pt-0.5 text-white font-['Poppins']">
      <span className="tracking-widest text-[12px]">11:41</span>
      <div className="flex flex-row items-center justify-center">
        <WifiIcon className="w-5 h-5" />
        <SignalIcon className="w-3 h-3" />
        <div className="flex flex-row items-center ml-1">
          <span className="text-[12px] mr-[-3px] mt-[2px] tracking-wide">100%</span>
          <BatteryIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default CelHeader;
