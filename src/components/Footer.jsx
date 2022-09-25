import React from "react";
import { FaInstagram } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import{FaFacebook} from "react-icons/fa";

function Footer()
{
    return(
        <div className="divide-y bg-black text-white px-16">
            <div></div>
            <div className="pt-4">
                <span className="font-bold text-4xl">Newsify</span>
                <span className="absolute font-medium text-3xl right-16">Contact us</span>
                <div className="absolute right-20 text-2xl pt-2 pl-4 flex gap-6 hover:cursor-pointer"><FaTwitter/><FaInstagram/><FaFacebook/></div>
                <p className="bottom-0 text-center text-xl pt-10 pb-6">© 2022 Abhay Semwal. All rights reserved.</p>
            </div>
        </div>
    );
}
export default Footer;