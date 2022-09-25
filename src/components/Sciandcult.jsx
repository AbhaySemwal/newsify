function Sciandcult()
{
    return(
        <div className="bg-black text-white relative">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-10 px-8 pb-8">
                <div className="relative">
                    <h3 className="text-4xl font-bold pl-8 text-center leading-loose top-0">Science</h3>
                    <div className="relative flex justify-center text-6xl border-gray-300 bg-gray-100">
                        <img src="images\Wallpaper.jpg" alt="" className="relative"></img>
                        <div className="absolute bottom-0 bg-gray-600 opacity-80 p-4">
                            <h1 className="z-10 text-3xl font-medium text-black px-10 pb-2">First direct look at Neptune’s rings in more than 30 years</h1>
                            <hr className="absolute w-9/12 left-14"></hr>
                            <p className="text-white text-2xl px-10 font-light pt-2">In an infrared image released September 21, Neptune and its gossamer diadems of dust take on an ethereal glow against the inky backdrop of space.</p>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <h3 className="text-4xl font-bold pl-8 text-center leading-loose top-0">Culture</h3>
                    <div className="relative flex justify-center text-6xl border-gray-300 bg-gray-100 ">
                        <img src="images\—Pngtree—veterans day with badge as_6941787.png" alt="" className="relative bg-black"></img>
                        <div className="absolute bottom-0 bg-gray-600 opacity-80 p-4">
                            <h1 className="z-10 text-3xl font-medium text-black px-10 pb-2">‘Salute To Troops’</h1>
                            <hr className="absolute w-9/12 left-14"></hr>
                            <p className="text-white text-2xl px-10 font-light pt-2">The effort will begin with a “Salute To Troops” event at the Tech Port Arena on Veterans Day, Nov. 11, featuring pianist and Jazz TX proprietor Doc Watkins hosting what he called “90 minutes from the glory days of the variety show era.” </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sciandcult;