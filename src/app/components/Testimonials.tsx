import { GoDotFill } from "react-icons/go";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    interface TestimonialData{
        img: string,
        review: string,
        name: string,
        company: string
    }

    const testimonialsData: TestimonialData[] = [
        {
            img: "/img/user1.png",
            review: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
            name: "Mike taylor",
            company: "Lahore, Pakistan",

        },
        {
            img: "/img/user2.png",
            review: "“This service is a game-changer! I was skeptical at first, but after trying it, I'm hooked. The results were instant, and I couldn't be happier.”",
            name: "Chris Thomas",
            company: "CEO of Red Button",

        },
        {
            img: "/img/user3.png",
            review: "“The customer support is also top-notch. They were quick to respond and helped me with any questions I had.”",
            name: "John Smith",
            company: "CEO of Energize Your Life Co",

        }
    ]

  const handleArrowUpClick = () => {
    if (currentIndex > 0) {
      const newTestimonialsData = [...testimonialsData];
      [newTestimonialsData[currentIndex], newTestimonialsData[currentIndex - 1]] = [
        newTestimonialsData[currentIndex - 1],
        newTestimonialsData[currentIndex],
      ];
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleArrowDownClick = () => {
    if (currentIndex < testimonialsData.length - 1) {
      const newTestimonialsData = [...testimonialsData];
      [newTestimonialsData[currentIndex], newTestimonialsData[(currentIndex + 1) % testimonialsData.length]] = [
        newTestimonialsData[(currentIndex + 1) % testimonialsData.length],
        newTestimonialsData[currentIndex],
      ];
      setCurrentIndex((currentIndex + 1) % testimonialsData.length);
    }
  };

  const handleDotClick = (index : any) => {
    setCurrentIndex(index);
  };

    return ( 
        <main className="px-[5%] py-[100px] grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="grid gap-4">
                <p className="text-[18px] text-litegrey font-semibold special-font text-center md:text-left" data-aos="fade-down">Testimonials</p>
                <h1 className="text-3xl md:text-5xl font-extrabold w-full md:max-w-[70%] text-center md:text-left" data-aos="fade-down">What People Say About Us.</h1>

                <div className="flex items-center gap-2 justify-center md:justify-start" data-aos="slide-right">
                    <GoDotFill className={`text-2xl text-litedark ${currentIndex === 0 ? 'text-litedark' : 'text-litegrey'} cursor-pointer`} onClick={() => handleDotClick(0)}/>
                    <GoDotFill className={`text-2xl text-litedark ${currentIndex === 1 ? 'text-litedark' : 'text-litegrey'} cursor-pointer`}  onClick={() => handleDotClick(1)}/>
                    <GoDotFill className={`text-2xl text-litedark ${currentIndex === 2 ? 'text-litedark' : 'text-litegrey'} cursor-pointer`}  onClick={() => handleDotClick(2)}/>
                </div>
            </section>

            <section className="flex items-center justify-center gap-4 mt-10 md:mt-0 special-font">
                <div className="relative">
                    <div className="p-4 rounded-xl shadow-lg bg-white w-[85%] md:w-[70%] grid gap-3 relative z-10 " data-aos="fade-down">
                        <Image src={testimonialsData[currentIndex].img} width={50} height={50} alt="img" className="absolute top-[-30px] left-[100px] md:left-[-20px]"/>
                        <p className="text-[13px] md:text-[15px] text-litegrey">{testimonialsData[currentIndex].review}</p>

                        <h1 className="text-[16px] md:text-[18px] text-litegrey font-semibold">{testimonialsData[currentIndex].name}</h1>
                        <p className="text-[12px] md:text-[14px] text-litegrey">{testimonialsData[currentIndex].company}</p>
                    </div>

                    <div className="p-4 rounded-xl shadow-sm border-[#F7F7F7] border bg-white w-[85%] md:w-[70%] grid gap-3 absolute left-[50px] top-[70px]" data-aos="fade-down">
                        <Image src={testimonialsData[(currentIndex + 1) % testimonialsData.length].img} width={50} height={50} alt="img" className="absolute top-[-30px] left-[100px] md:left-[-20px]"/>
                        <p className="text-[13px] md:text-[15px] text-litegrey">{testimonialsData[(currentIndex + 1) % testimonialsData.length].review}</p>

                        <h1 className="text-[16px] md:text-[18px] text-litegrey font-semibold">{testimonialsData[(currentIndex + 1) % testimonialsData.length].name}</h1>
                        <p className="text-[12px] md:text-[14px] text-litegrey">{testimonialsData[(currentIndex + 1) % testimonialsData.length].company}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4" data-aos="slide-right">
        <IoIosArrowUp
          className={`text-2xl ${currentIndex === 0 ? 'text-litegrey' : 'text-litedark'} cursor-pointer`}
          onClick={handleArrowUpClick}
        />

        <IoIosArrowDown
          className={`text-2xl ${
            currentIndex === testimonialsData.length - 1 ? 'text-litegrey' : 'text-litedark'
          } cursor-pointer`}
          onClick={handleArrowDownClick}
        />
      </div>
            </section>
        </main>
     );
}
 
export default Testimonials;