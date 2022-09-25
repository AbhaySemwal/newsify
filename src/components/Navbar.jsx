function Navbar()
{
    return(
    <div className="relative bg-gradient-to-b from-black">
        <h1 class="absolute z-10 lg:text-8xl md:text-6xl sm:text-4xl font-bold text-gray-200 top-5 left-8">NEWSIFY</h1>
        <div className="absolute z-10 space-x-8 lg:text-2xl md:text-xl sm:text-sm text-gray-200 right-8 lg:top-8 md:top-6 sm:top-4">
            <span className="hover:cursor-pointer hover:text-gray-400">Home</span>
            <span className="hover:cursor-pointer hover:text-gray-400">Contact</span>
            <span className="hover:cursor-pointer hover:text-gray-400">About us</span>
            <span><button className="bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-2xl">Login</button></span>
        </div>
        <img src="images\ukraine-war-credit-https-www-facebook-com-1349514.jpg" alt="" className="relative w-screen lg:h-screen md:h-auto object-cover mix-blend-overlay"/>
        <div className="absolute text-white top-1/3 left-8 ">
            <h2 className="font-semi-bold lg:text-6xl md:text-4xl sm:text-2xl">Russia-Ukraine War</h2>
            <p className="font-light lg:text-2xl md:text-xl sm:text-lg text-white lg:pr-80 md:pr-18 pr-10 pt-6">Ukrainian forces battled Russian troops on multiple fronts, including the outskirts of Kyiv. 
            US President Joe Biden said Russia's Vladimir Putin "is the aggressor" and would bear the consequences.
            In the Kharkiv region, the towns of Izyum and Kupiansk, both key hubs for the supply of Russian forces in Donbas, were taken by Ukraine on Saturday.
            Russia still holds about a fifth of the country, but the Russian retreat is being seen by many analysts as a very significant Ukrainian success
            </p>
        </div>
        <div className="bg-zinc-800 text-gray-100 lg:space-x-8 md:space-x-6 sm:space-x-3 font-light lg:text-3xl md:text-xl sm:text-xl flex items-center justify-center p-6">
            <span className="hover:cursor-pointer hover:text-gray-400">Entertainment</span>
            <span className="hover:cursor-pointer hover:text-gray-400">Sports</span>
            <span className="hover:cursor-pointer hover:text-gray-400">Business</span>
            <span className="hover:cursor-pointer hover:text-gray-400">Tech</span>
            <span className="hover:cursor-pointer hover:text-gray-400">World</span>
            <span className="hover:cursor-pointer hover:text-gray-400">Education</span>
            <span className="hover:cursor-pointer hover:text-gray-400">Health</span>
            <span className="hover:cursor-pointer hover:text-gray-400">Science</span>
        </div>
    </div>
    );
}
export default Navbar;