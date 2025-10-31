import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 px-5 py-10 text-center">
      <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
        <Link href="/privacy" className="text-brand-secondary text-base font-normal leading-normal min-w-40">Privacy Policy</Link>
        <Link href="/terms" className="text-brand-secondary text-base font-normal leading-normal min-w-40">Terms of Service</Link>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#">
          <div className="text-brand-secondary" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
              ></path>
            </svg>
          </div>
        </a>
      </div>
      <p className="text-brand-secondary text-base font-normal leading-normal">© 2024 Srijothi Jewellery. All rights reserved.</p>
    </footer>
  );
};

export default Footer;