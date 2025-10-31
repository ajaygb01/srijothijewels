import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIdze7YXG-4i8eN8qELYWWQfsFjhlUuHliCZ2GESRpyXJKtGtW5-xxzIGHTBoPro4Oa3wBT7kFNmOOm1lXy4Z5A4QZkW7Suugk-a9RAylRBf4dSjFxB_ycX5Ipzi0aZrt7xEYZNKTiO32EU5C2auLdNhSJ7jRR41dScRr7k00YQWbU3ObcQltFLLa4mn3dyC8p8p7Z0mABSomYzMxZ4FHDWfPGe4oXgMTkBvmzopUd4CHtCFEk4KnsEGSEHb_Gw13QNmNTaLY_gJKd")`,
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Discover the Elegance of Silver
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Exquisite 92.5% sterling silver jewelry and articles, crafted with precision and care.
            </h2>
          </div>
          <Link href="#collections">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-brand-primary text-brand-text text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
              <span className="truncate">Shop Now</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;