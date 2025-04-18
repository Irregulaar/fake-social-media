import CelHeader from "../components/CelHeader";
import ArrowLeftIcon from "@/icons/twitter/arrowleft.svg?react";
import CallIcon from "@/icons/twitter/call.svg?react";
import CameraIcon from "@/icons/twitter/camera.svg?react";
import GalleryIcon from "@/icons/twitter/gallery.svg?react";
import GifIcon from "@/icons/twitter/gif.svg?react";
import VoiceprintIcon from "@/icons/twitter/voiceprint.svg?react";
import MenuIcon from "@/icons/twitter/menu.svg?react";
import SquareRoundedIcon from "@/icons/twitter/squarerounded.svg?react";
import ArrowBackIcon from "@/icons/twitter/arrowback.svg?react";

function TwitterPage() {
  return (
    <div className="flex items-start justify-center w-full h-fit md:h-screen">
      <div className="flex flex-col h-full bg-black w-100">
        <CelHeader />
        <div className="font-['Twitter_Chirp'] flex flex-col h-fit md:h-full">
          <div className="flex flex-row items-center px-5 py-6 text-white">
            <ArrowLeftIcon className="w-5 h-5 mr-5" />

            <div className="flex flex-row items-center gap-3">
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
              <span className="font-medium">_Safecito_</span>
            </div>

            <div className="flex flex-row items-center gap-3 ml-auto">
              <CameraIcon className="w-5 h-5 opacity-50" />
              <CallIcon className="w-5 h-5 opacity-50" />
            </div>
          </div>

          <div className="flex flex-col self-center items-center justify-center text-white w-[90%] mb-3">
            <div className="mb-1 bg-gray-500 rounded-full w-13 h-13"></div>

            <div className="flex flex-col items-center justify-center mb-2">
              <span className="text-[13px] mb-[-5px] tracking-wide">_Safecito_</span>
              <span className="text-[14px] text-[#787878] tracking-wide">@Safe_cito</span>
            </div>

            <span className="mb-3 text-center w-[70%] text-[14px]">
              Roblox developer Frontend enthusiast Python Hater She/Her
            </span>

            <span className="text-[14px] font-medium text-[#787878] mb-4">872 seguidores</span>

            <div className="w-full h-px bg-white opacity-20"></div>
          </div>

          <div className="flex flex-col h-full text-white">
            <span className="text-[13px] font-bold self-center">abril 01, 2024</span>

            <div className="flex flex-col items-start gap-1 p-3">
              <span className="text-[14px] bg-[#253134] p-3 w-fit h-fit rounded-[20px]">hello!</span>
              <span className="text-[13.5px] bg-[#253134] p-3 h-fit rounded-[20px] text-balance rounded-bl-none w-fit max-w-[70%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </span>
              <span className="text-[13px] text-[#787878]">12:11 p. m.</span>
            </div>

            <div className="flex flex-col items-end gap-1 p-3">
              <span className="text-[13.5px] bg-[#1b9bed] p-3 h-fit rounded-[20px] text-balance rounded-br-none w-fit max-w-[70%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </span>
              <span className="text-[13px] text-[#787878]">12:11 p. m.</span>
            </div>
          </div>

          <div className="flex flex-row items-center w-[95%] self-center rounded-[25px] bg-[#253134] gap-3 px-3 py-2 mt-auto text-white">
            <GalleryIcon className="w-5 h-5" />
            <GifIcon className="w-5 h-5" />
            <input type="text" className="text-white bg-transparent outline-none" placeholder="Escribir un mensaje" />
            <VoiceprintIcon className="w-5 h-5 ml-auto text-[#6d5abc]" />
          </div>
        </div>

        <div className="flex flex-row items-center w-full justify-around rounded-[25px] mt-5 mb-2 px-3 justify-self-end text-white">
          <MenuIcon className="w-5 h-5 opacity-60" />
          <SquareRoundedIcon className="w-5 h-5 opacity-60" />
          <ArrowBackIcon className="w-5 h-5 opacity-60" />
        </div>
      </div>
    </div>
  );
}

export default TwitterPage;
