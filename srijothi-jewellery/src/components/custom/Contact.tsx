import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="text-brand-text text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact / Enquiry</h2>
      <p className="text-brand-text text-base font-normal leading-normal pb-3 pt-1 px-4">For any inquiries or assistance, please contact us or send a message via WhatsApp.</p>
      <div className="flex justify-end overflow-hidden px-5 pb-5">
        <a href="https://wa.me/91XXXXXXXXXX?text=Hi%20Srijothi%20Jewellery%2C%20I%27m%20interested%20in%20%5BSKU%5D%20-%20%5BName%5D" target="_blank" rel="noopener noreferrer">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 bg-brand-primary text-brand-text text-base font-bold leading-normal tracking-[0.015em] min-w-0 px-2 gap-4 pl-4 pr-6">
            <div className="text-brand-text" data-icon="WhatsappLogo" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
              </svg>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;