import { GoDotFill } from "react-icons/go";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const Testimonials = () => {
    return ( 
        <main className="px-[5%] py-[100px] grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="grid gap-4">
                <p className="text-[18px] text-litegrey font-semibold special-font text-center md:text-left">Testimonials</p>
                <h1 className="text-3xl md:text-5xl font-extrabold w-full md:max-w-[70%] text-center md:text-left">What People Say About Us.</h1>

                <div className="flex items-center gap-2 justify-center md:justify-start">
                    <GoDotFill className="text-2xl text-litedark"/>
                    <GoDotFill className="text-2xl text-litegrey"/>
                    <GoDotFill className="text-2xl text-litegrey"/>
                </div>
            </section>

            <section className="flex items-center justify-center mt-10 md:mt-0 special-font">
                <div className="relative">
                    <div className="p-4 rounded-xl shadow-md bg-white w-[85%] md:w-[70%] grid gap-3 relative z-10 ">
                        <Image src="/img/user1.png" width={50} height={50} alt="img" className="absolute top-[-30px] left-[150px] md:left-[-20px]"/>
                        <p className="text-[13px] md:text-[15px] text-litegrey">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>

                        <h1 className="text-[16px] md:text-[18px] text-litegrey font-semibold">Mike taylor</h1>
                        <p className="text-[12px] md:text-[14px] text-litegrey">Lahore, Pakistan</p>
                    </div>

                    <div className="p-4 rounded-xl border-[#F7F7F7] border bg-white w-[85%] md:w-[70%] grid gap-3 absolute left-[50px] top-[70px]">
                        <Image src="/img/user1.png" width={50} height={50} alt="img" className="absolute top-[-30px] left-[150px] md:left-[-20px]"/>
                        <p className="text-[13px] md:text-[15px] text-litegrey">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>

                        <h1 className="text-[16px] md:text-[18px] text-litegrey font-semibold">Mike taylor</h1>
                        <p className="text-[12px] md:text-[14px] text-litegrey">Lahore, Pakistan</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <IoIosArrowUp className="text-2xl text-litegrey cursor-pointer"/>

                    <IoIosArrowDown className="text-2xl text-litedark cursor-pointer"/>
                </div>
            </section>
        </main>
     );
}
 
export default Testimonials;