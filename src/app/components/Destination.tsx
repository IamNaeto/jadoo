import Image from "next/image";
import { TiLocationArrow } from "react-icons/ti";

const Destination = () => {
    interface Destination {
        img: string;
        location: string;
        amount: string;
        days: string;
        sideImg: string;
    }

    const destination: Destination[] = [
        {
            img: "/img/rome.png",
            location: "Rome, Italy",
            amount: "$5,42k",
            days: "10 Days Trip",
            sideImg: ""
        },
        {
            img: "/img/london.jpg",
            location: "London, UK",
            amount: "$4.2k",
            days: "12 Days Trip",
            sideImg: ""
        },
        {
            img: "/img/europe.png",
            location: "Full Europe",
            amount: "$15k",
            days: "28 Days Trip",
            sideImg: "/img/Decore2.png"
        },
    ]
    return (
        <main className="relative w-full py-[50px] px-[5%] grid grid-cols-1 gap-6">
            <section className="flex flex-col items-center text-center gap-4">
                <p className="text-[18px] text-litegrey font-bold special-font">Top Selling</p>
                <h1 className="text-5xl font-bold">Top Destinations</h1>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 lg:gap-8 xl:gap-16 special-font">
                {destination.map((destinations, index) => 
                <div className="relative flex flex-col rounded-2xl shadow-sm" key={index}>
                    <div className="relative z-10">
                        <div className="h-[350px]">
                            <Image src={destinations.img} width={300} height={300} alt="img" className="w-full h-full rounded-tl-2xl rounded-tr-2xl" />
                        </div>
                        <div className="grid grid-cols-1 gap-2 p-4">
                            <div className="text-[18px] text-litegrey font-medium flex items-center justify-between gap-4">
                                <p>{destinations.location}</p> <p>{destinations.amount}</p>
                            </div>
                            <div className="text-[16px] text-litegrey font-medium flex items-center gap-1">
                                <TiLocationArrow className="text-litedark text-xl" /> <p>{destinations.days}</p>
                            </div>
                        </div>
                    </div>

                    {destinations.sideImg && <Image src={destinations.sideImg} width={80} height={80} alt="img" className="absolute right-[-20px] sm:right-[-30px] lg:right-[-50px] bottom-[90px]"/>}
                </div>
                )}
            </section>
        </main>
    );
}

export default Destination;