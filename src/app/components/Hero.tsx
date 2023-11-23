import Image from "next/image";
import { IoIosPlay } from "react-icons/io";

const Hero = () => {
    return ( 
        <main className="w-full flex flex-col md:flex-row items-center justify-between bg-hotpink py-20 px-[5%]">
            <section className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center md:justify-start gap-3">
                <p className="text-[14px] text-green font-bold ">BEST DESTINATIONS AROUND THE WORLD</p>
                <h1 className="text-5xl xl:text-6xl text-blue font-extrabold w-full lg:w-[80%] text-center md:text-left">Travel, Enjoy and live a new and full life</h1>
                <p className="text-[12px] text-litepurple font-bold w-full lg:w-[80%] xl:w-[60%] text-center md:text-left">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the</p>

                <div className="flex items-center gap-4">
                <a href="" className="py-3 px-5 rounded-md bg-orange text-white text-[14px] font-bold flex items-center">Find Out More</a>
                <a href="" className="py-3 px-5 rounded-md text-litegrey text-[14px] font-bold flex items-center gap-2 hover:shadow-md transition delay-200" ><IoIosPlay className="text-2xl text-white p-[7px] rounded-full bg-green"/> Play Demo</a>
                </div>
            </section>

            <section className="w-full md:w-[50%]">
                <Image src="/img/hero-img.png" width={500} height={500} alt="heroimg" className="w-full dangling-picture"/>
            </section>
        </main>
     );
}
 
export default Hero;