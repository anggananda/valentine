import React,{useState} from 'react'
import { ReactTyped } from 'react-typed'
import { Link } from 'react-router-dom';

const generateRandomIndex = (max, prevIndex) => {
    let newIndex = prevIndex;
    while (newIndex === prevIndex) {
        newIndex = Math.floor(Math.random() * max);
    }
    return newIndex;
};

const Main = () => {
    const [pilihan, setPilihan] = useState("right-[0px]")
    const [prevIndex, setPrevIndex] = useState(0);

    const handlePilih = () =>{
        const arrPilihan = ["right-[-200px] top-[-300px]","right-[-400px] top-[-100px]","right-[-100px] top-[-400px]","right-[-250px] top-[-150px]"]

        const maxIndex = arrPilihan.length;
        const randomIndex = generateRandomIndex(maxIndex, prevIndex);
        setPilihan(arrPilihan[randomIndex]);
        setPrevIndex(randomIndex);
        
    }
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="max-w-[1200px] rounded-md px-5 py-14 border border-[rgba(0,0,0,0.1)] shadow-lg mx-auto flex justify-center items-center flex-col gap-6 bg-[#ffb6c1]">
            <ReactTyped
                className="text-[#fff5e1] font-bold text-4xl font-GreatVibes text-center"
                strings={["Happy Valentine My Love 💕", ]}
                typeSpeed={120}
                backSpeed={60}
                loop
            />

            <div>
                <img className="w-full" src="./img/main2.gif" alt="" />
            </div>

            <div className="flex justify-center items-center flex-col gap-6">
                <h1 className="font-poppins text-lg font-semibold">Will you be my Valentine and make my heart soar?</h1>

                <div className="flex items-center gap-4 relative w-[250px] mt-6">
                    <Link className="px-8 py-3 shadow-md font-poppins font-bold uppercase text-[#fff5e1] fixed cursor-pointer bg-[tomato] rounded-lg hover:bg-[#990000]" to="/yes">Yes</Link>
                    <p className={`absolute right-0 ${pilihan}  px-8 py-3 shadow-md font-poppins font-bold uppercase text-[#fff5e1] cursor-pointer bg-[tomato] rounded-lg hover:bg-slate-600`} onMouseOver={handlePilih}>Nop</p>
                </div>
            </div>

            {/* <ReactTyped
                className="text-xl text-center"
                strings={["As the stars shimmer in the night sky, so does your love illuminate my world ❣️", "Happy Valentine's Day to the one who is the moon to my night and the sunshine to my day. Here's to a love that transcends time and space💖"
            ]}
                typeSpeed={100}
                backSpeed={50}
            /> */}
        </div>
    </div>
  )
}

export default Main