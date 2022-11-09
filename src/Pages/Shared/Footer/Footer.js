import React from 'react';
import {Link} from 'react-router-dom';
import {FaTwitter, FaYoutube, FaFacebookF} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <h2 className='text-4xl'>Photo-Fashion</h2>
            </div>
            <div>
                <span className="footer-title">Contact Me</span>
                <div className="grid grid-flow-col gap-4">
                    <Link>
                        <FaTwitter className='text-2xl'></FaTwitter>
                    </Link>
                    <Link>
                        <FaYoutube className='text-2xl'></FaYoutube>
                    </Link>
                    <Link>
                        <FaFacebookF className='text-2xl'></FaFacebookF>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;