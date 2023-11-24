import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
    return (
        <main className="px-[5%] py-[70px] bg-white special-font">
            <section className="">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex flex-col gap-2 mb-5 md:mb-0 w-full md:w-auto items-center md:items-start justify-center md:justify-start">
                        <Image src="/img/footer-logo.png" width={100} height={100} alt="logo"  data-aos="fade-down"/>
                        <p className="text-[12px] text-litegrey font-semibold w-full md:max-w-[200px] text-center md:text-left" data-aos="fade-down">Book your trip in minute, get full Control for much longer. </p>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text[18px] text-litedark font-extrabold" data-aos="fade-down">Company</h1>

                        <div className="text-[15px] text-litegrey font-semibold flex flex-col gap-2">
                            <a href="" className="hover:text-orange transition delay-200" data-aos="fade-down">About</a>
                            <a href="" className="hover:text-orange transition delay-200" data-aos="fade-down">Careers</a>
                            <a href="" className="hover:text-orange transition delay-200" data-aos="fade-down">Mobile</a>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text[18px] text-litedark font-extrabold" data-aos="fade-down">Contact</h1>

                        <div className="text-[15px] text-litegrey font-semibold flex flex-col gap-2">
                            <a href="" className="hover:text-orange transition delay-200" data-aos="fade-down">Help/FAQ</a>
                            <a href="" className="hover:text-orange transition delay-200" data-aos="fade-down">Press</a>
                            <a href="" className="hover:text-orange transition delay-200" data-aos="fade-down">Affilates</a>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text[18px] text-litedark font-extrabold" data-aos="fade-down">More</h1>

                        <div className="text-[15px] text-litegrey font-semibold flex flex-col gap-2">
                            <a href="" className="hover:text-orange transition delay-200" data-aos="fade-down">Airlinefees</a>
                            <a href="" className="hover:text-orange transition delay-200" data-aos="fade-down">Airline</a>
                            <a href="" className="hover:text-orange transition delay-200" data-aos="fade-down">Low fare tips</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center md:items-start justify-center md:justify-start w-full md:w-auto mt-5 md:mt-0">
                        <div className="flex items-center gap-4" data-aos="fade-down">
                            <FaFacebookF className="text-4xl p-2 text-litedark bg-white rounded-full shadow-md cursor-pointer" />
                            <CiInstagram className="text-4xl p-2 text-litedark bg-white rounded-full shadow-md cursor-pointer" />
                            <FaTwitter className="text-4xl p-2 text-litedark bg-white rounded-full shadow-md cursor-pointer" />
                        </div>

                        <p className="text-[20px] text-litegrey font-bold" data-aos="fade-down">Discover our app</p>

                        <div className="flex items-center gap-4" data-aos="fade-down">
                            <div className="flex items-center justify-center gap-1 bg-black py-2 px-5 rounded-full cursor-pointer">
                                <Image src="/img/google-play.png" width={20} height={20} alt="img" />
                                <div>
                                    <h3 className="text-[13px] font-extrabold text-white">GET IT ON</h3>
                                    <p className="text-[11px] font-semi-bold text-white">GOOGLE PLAY</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-1 bg-black py-2 px-5 rounded-full cursor-pointer">
                                <Image src="/img/apple.png" width={20} height={20} alt="img" />
                                <div>
                                    <h3 className="text-[11px] font-semibold text-white">Avalible on the</h3>
                                    <p className="text-[13px] font-extrabold text-white">Apple Store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Footer;