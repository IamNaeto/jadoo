import Image from "next/image";

const Sponsors = () => {
    interface SponsorsLogo{
        img: string
    }

    const sponsorsLogo : SponsorsLogo[] =[
        {
            img: "/img/axon.png",
        },
        {
            img: "/img/jetstar.png",
        },
        {
            img: "/img/expedia.png",
        },
        {
            img: "/img/qantas.png",
        },
        {
            img: "/img/alitalia.png",
        },
    ]
    return ( 
        <main className="px-[5%] py-[50px] flex items-center justify-center md:justify-between basis-56 flex-wrap gap-6">
            {sponsorsLogo.map((sponsors, index) =>
            <div className="p-2 md:p-4 rounded-xl bg-white hover:shadow-md shadow-md md:shadow-none flex items-center justify-center h-[100px]" key={index}>
                <Image src={sponsors.img} width={100} height={100} alt="img" className="object-contain h-full"/>
            </div>
            )}
        </main>
     );
}
 
export default Sponsors