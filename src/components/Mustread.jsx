function Mustread()
{
    return(
        <div className="bg-black text-white relative">
            <h3 className="text-4xl font-bold pl-8 leading-loose">Must Read</h3>
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-10 px-8 pb-8">
                <div className="relative">
                    <div className="relative flex justify-center text-6xl border-gray-300 bg-gray-100 ">
                        <img src="images\prince-charles-prince-of-wales-poses-for-an-official-news-photo-1586373686.jpg" alt="" className="relative"></img>
                        <div className="absolute bottom-0 bg-gray-600 opacity-80 p-4">
                            <h1 className="z-10 text-3xl font-medium text-black px-10 pb-2">King Charles to host world leaders as UK readies for queen's funeral</h1>
                            <hr className="absolute w-9/12 left-14"></hr>
                            <p className="text-white text-2xl px-10 font-light pt-2">The first members of the public were already camping out in advance to catch a glimpse of Monday's grand farewell at Westminster Abbey, which is expected to bring London to a standstill and be watched by billions of viewers worldwide</p>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="relative flex justify-center text-6xl border-gray-300 bg-gray-100 ">
                        <img src="images\edgar-moran-LboRnt38jpA-unsplash.jpg" alt="" className="relative h-9/12"></img>
                        <div className="absolute bottom-0 bg-gray-600 opacity-80 p-4">
                            <h1 className="z-10 text-3xl font-medium text-black px-10 pb-2">Chinese astronauts go on spacewalk from new station</h1>
                            <hr className="absolute w-9/12 left-14"></hr>
                            <p className="text-white text-2xl px-10 font-light pt-2">China is building its own space station after being excluded by the US from the International Space Station because its military runs the country's space program. American officials see a host of strategic challenges from China's space ambitions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default Mustread;