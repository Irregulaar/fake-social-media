import CelHeader from "../components/CelHeader";
import ArrowLeftIcon from "@/icons/facebook/arrowleft.svg?react";
import CallIcon from "@/icons/facebook/call.svg?react";
import CamIcon from "@/icons/facebook/cam.svg?react";
import LockIcon from "@/icons/facebook/lock.svg?react";
import MenuIcon from "@/icons/facebook/menu.svg?react";
import SquareRoundedIcon from "@/icons/facebook/squarerounded.svg?react";
import ArrowBackIcon from "@/icons/facebook/arrowback.svg?react";
import CameraIcon from "@/icons/facebook/camera.svg?react";
import GalleryIcon from "@/icons/facebook/gallery.svg?react";
import MicrophoneIcon from "@/icons/facebook/microphone.svg?react";
import FaceHappyIcon from "@/icons/facebook/facehappy.svg?react";
import LikeIcon from "@/icons/facebook/like.svg?react";

function FacebookPage() {
  return (
    <div className="flex items-start justify-center w-full bg-[#121212] h-fit md:h-fit">
      <div className="flex flex-col h-full bg-white w-90">
        <CelHeader />

        <div className="flex flex-col h-full font-['Facebook_Sans']">
          <div className="flex flex-row items-center px-3 py-2 text-black">
            <ArrowLeftIcon className="w-5 h-5 mr-4 text-[#0863ff]" />

            <div className="flex flex-row items-center gap-3">
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              <div className="flex flex-col">
                <span className="font-medium">Jose Usuga</span>
                <span className="text-[12px] text-[#787878] font-medium">Activo(a) hace 33 minutos</span>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 ml-auto text-[#0863ff]">
              <CallIcon className="w-6 h-6" />
              <CamIcon className="w-7 h-7" />
            </div>
          </div>

          <div className="flex flex-col items-center self-center mb-8 mt-7">
            <div className="mb-2 bg-gray-500 rounded-full w-21 h-21"></div>
            <span className="font-bold text-center text-black text-[22px]">Jose Usuga</span>
            <span className="text-[12px] font-regular text-center mb-2">Son amigos(as) en Facebook</span>

            <span className="text-[14px] font-regular text-center bg-[#e1e5ea] px-3 py-1 rounded-[20px] mb-5">
              <span className="text-black">Ver perfil</span>
            </span>

            <span className="bg-[#f5f8fd] w-[90%] flex items-center flex-col p-2">
              <div className="flex flex-row items-center gap-2">
                <LockIcon className="w-2 h-2" />
                <span className="text-[12px] font-regular text-center">Cifrado de extremo a extremo</span>
              </div>
              <span className="text-[12px] font-regular text-center text-[#575757]">
                Los mensajes y las llamadas estan protegidos con cifrado de extremo a extremo.{" "}
                <span className="text-[#0863ff] font-bold">Mas informacion</span>
              </span>
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-[12px] font-regular text-center text-[#575757]">2:35 P.M.</span>

            <div className="flex flex-col w-full gap-5 px-2">
              <div className="flex flex-col self-end gap-0.5 max-w-[75%]">
                <span className="bg-[#0309b3] py-2 px-4 rounded-[20px] rounded-br-[5px] text-white self-end">Test</span>
                <span className="bg-[#0309b3] py-2 px-4 rounded-[20px] rounded-tr-[5px] text-white self-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                </span>
              </div>

              <div className="flex flex-col self-start gap-0.5 max-w-[85%]">
                <div className="flex flex-row items-center w-full gap-2">
                  <div className="self-end flex-shrink-0 w-8 h-8 bg-gray-500 rounded-full"></div>
                  <span className="bg-[#f1f1f6] py-2 px-4 rounded-[20px] text-black">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam quos aliquam ab? Reprehenderit, beatae
                    culpa a veritatis rerum omnis quis eveniet, amet maiores officia possimus dolorum architecto natus, eos
                    distinctio.
                  </span>
                </div>
              </div>

              <div className="flex flex-col self-end gap-0.5 max-w-[75%]">
                <span className="bg-[#0309b3] py-2 px-4 rounded-[20px] rounded-br-[5px] text-white self-end">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, autem asperiores culpa sequi hic totam vel
                  quia vitae unde corporis, neque, eos facere optio nulla nesciunt quam fugiat consequatur distinctio.
                </span>
                <span className="bg-[#0309b3] py-2 px-4 rounded-[20px] rounded-tr-[5px] text-white self-end">Test</span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center w-[95%] gap-3">
              <div className="flex-shrink-0">
                <CameraIcon className="w-5 h-5 text-[#0309b3]" />
              </div>
              <div className="flex-shrink-0">
                <GalleryIcon className="w-5 h-5 text-[#0309b3]" />
              </div>
              <div className="flex-shrink-0 ml-auto">
                <MicrophoneIcon className="w-4 h-4 text-[#0309b3]" />
              </div>
              <div className="flex flex-row justify-between items-center gap-2 bg-[#f1f1f6] px-3 py-1 rounded-[20px] flex-grow">
                <input
                  type="text"
                  className="text-[#000000] placeholder:text-[#727272] w-full bg-transparent outline-none"
                  placeholder="Mensage"
                />

                <div className="flex-shrink-0">
                  <FaceHappyIcon className="w-5 h-5 text-[#0309b3]" />
                </div>
              </div>
              <div className="flex-shrink-0 -ml-1">
                <LikeIcon className="w-5 h-5 text-[#0309b3]" />
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center w-full justify-around rounded-[25px] mt-5 mb-2 px-3 justify-self-end text-black">
            <MenuIcon className="w-5 h-5 opacity-60" />
            <SquareRoundedIcon className="w-5 h-5 opacity-60" />
            <ArrowBackIcon className="w-5 h-5 opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacebookPage;
