function Economy()
{
    return(
        <div className="bg-black text-black relative">
            <h3 className="text-4xl text-white font-bold pl-8 leading-loose">Economy</h3>
            <div className="relative pl-8 pb-8">
                <img src="images\tendency-1445464.jpg" alt="" className="relative h-64 w-1/6"></img>
                <div className="absolute bg-gray-400 lg:left-72 md:left-48 sm:left-40 top-0 w-8/12 h-64 p-4">
                    <h2 className="font-black lg:text-4xl md:text-2xl sm:text-2xl pb-2">The Wobbling World Economy</h2>
                    <p className="lg:text-xl md:text-lg sm:text-lg">The World Bank lowered its estimate for global growth in 2022 to 3.2% from a January prediction of 4.1%. It’s planning to mobilize a funding package bigger than the Covid-19 response for nations to deal with various resulting and ongoing crises.</p>
                </div>
            </div>
            <div className="relative pl-8 pb-8">
                <img src="images\price-tag-japanese-yen-3268417.jpg" alt="" className="relative h-64 w-1/6"></img> 
                <div className="absolute bg-gray-400 lg:left-72 md:left-48 sm:left-40 top-0 w-8/12 h-64 p-4">
                    <h2 className="font-black lg:text-4xl md:text-2xl sm:text-2xl pb-2">Weak Yen</h2>
                    <p className="lg:text-xl md:text-lg sm:text-lg"> The yen extended its longest losing streak in at least half a century, spurring Finance Minister Shunichi Suzuki to say the impact of the moves could be harmful for the economy.</p>
                </div>
            </div>
            <div className="relative pl-8 pb-8">
                <img src="images\istockphoto-1322516870-612x612.jpg" alt="" className="relative h-64 w-1/6"></img>
                <div className="absolute bg-gray-400 lg:left-72 md:left-48 sm:left-40 top-0 w-8/12 h-64 p-4">
                    <h2 className="font-black lg:text-4xl md:text-2xl sm:text-2xl pb-2">Brazil Central Bank Strike</h2>
                    <p className="lg:text-xl md:text-lg sm:text-lg">The institution is in for a longer-than-expected battle against inflation as its own workers, together with others from Brazil’s public and private sectors, demand wage increases of as much as 26% to make up for losses in purchasing power. Meanwhile, economist Robin Brooks has become a social media sensation in Brazil for his bullish calls on the real.</p>
                </div>
            </div>
        </div>
    );
}
export default Economy;