import React, { useState } from "react";
import AudioBg from "./AudioBg";
import { ReactTyped } from "react-typed";
import Take from "./Take";

const AboutUs = () => {
  const newAlbums = [
    "anggasanti.JPG",
    "pegang.JPG",
    "angga.JPG",
    "cinta.jpeg",
    "bareng.JPG",
  ];
  const [foto, setFoto] = useState(newAlbums[0]);
  const [take, settake] = useState(false)

  const handleNext = () => {
    const currentIndex = newAlbums.indexOf(foto);
    const nextIndex = (currentIndex + 1) % newAlbums.length;
    setFoto(newAlbums[nextIndex]);
  };

  const handleTake = () =>{
    settake(!take)
  }

  return (
    <div>
      <AudioBg />

      <div className="flex justify-center items-center flex-col h-screen max-w-[1110px] mx-auto gap-4">
        <div className="w-[70%] rounded-md overflow-hidden shadow-lg">
          <img
            className="w-full hover:scale-105 rounded-md shadow-md"
            src={`./img/${foto}`}
            alt=""
          />
        </div>
        <p
          className="cursor-pointer px-3 py-2 bg-[tomato] rounded-md hover:bg-[#990000] text-[#fff5e1] font-semibold font-poppins shadow-lg"
          onClick={handleNext}
        >
          NEXT 💕
        </p>

        <ReactTyped
          className="text-slate-900 font-bold text-3xl font-GreatVibes text-center"
          strings={[
            "As the stars shimmer in the night sky, so does your love illuminate my world ❣️",
            "Happy Valentine's Day to the one who is the moon to my night and the sunshine to my day. Here's to a love that transcends time and space💖",
            "As the stars shimmer in the night sky, so does your love illuminate my world ❣️. Happy Valentine's Day to the one who is the moon to my night and the sunshine to my day. Here's to a love that transcends time and space. From Ur Love Angga💖",
          ]}
          typeSpeed={100}
          backSpeed={30}
        />
      </div>

      <div className="h-screen flex justify-center items-center">
        <div className="border border-[rgba(0,0,0,0.1)] w-[60%] p-6 rounded-md shadow-lg relative">
          <div className="flex justify-center items-center flex-col gap-6">
            <div className="w-[30%]">
              <img className="w-full" src="./img/foru.gif" alt="" />
            </div>
            <p className="text-justify font-light font-poppins">I apologize if I don't possess the material wealth that others might have and can offer to you. However, what I lack in worldly possessions, I hope to make up for in the intangible gifts of love, understanding, and unwavering companionship. My heart is yours, and I promise to cherish and support you in ways that extend far beyond the material realm. Happy Valentine's Day.</p>

            <button onClick={handleTake} className="uppercase font-poppins px-3 py-3 bg-[tomato] rounded-lg font-bold hover:bg-[#990000] text-[#fff5e1]">Take Please</button>

          </div>
          {!take ? <Take kelihatan="scale-0" /> : <Take kelihatan="scale-100" />}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
