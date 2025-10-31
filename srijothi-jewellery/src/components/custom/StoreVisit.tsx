import React from 'react';

const StoreVisit = () => {
  return (
    <div id="store-visit">
      <h2 className="text-brand-text text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Store Visit</h2>
      <div className="flex px-4 py-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg object-cover"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqlffrK-9Y8iNY2-4LU4YLwyjFgC0kpWkLFttgiZX3Tn1BXfQFr0MJcbWmky9p2oC3m_RVskHqpDwaecY8KI05lqyExK9oJigwa3NDU2-bYTfXFMGzvIExjvg9gbmShCJzONx5VPODGyQplKaC8QeSC07VxxFrHe8MtWGiZrG0iLNM611nwiJQOlbeKtEAteiw0NUMyROtCgqfZI1nyAl7PqJ4OifzOzyYTH9ANjEgU-rlcdnX7wK7UyN1IA7HTNXYWDzh2H5kpyYS")`,
          }}
        ></div>
      </div>
      <div className="flex w-full grow bg-brand-background @container p-4">
        <div className="w-full gap-1 overflow-hidden bg-brand-background @[480px]:gap-2 aspect-[3/2] rounded-lg grid grid-cols-[2fr_1fr_1fr]">
          <div
            className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoDBQMsjRbmvb8xt3gsc_TkU95fo3B6gooBm-ysiB0CdXpV4VaKDY-AMUdT7F_9oRfGCV6w7wAUQbk9Z3j8lLb21RW3Z0Bh1XRWQdExzBvauaqYnD1ABtVMoXLS34KY7VnKAu9cNQQUMiolbpgAVkYxW7w_DORZQcLcX5sBlB9TsaIl3-RhIcf6vRMP0YcdOupmycPThKmEFfIpZcwA-A9EDerDgdDzL_m495LXahudqwFlVpmYYVTu_QxZxIIlMScGOglebAhY2Ck")`,
            }}
          ></div>
          <div
            className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2 row-span-2"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfaRTEk4hjOjDN9xAiQYrany64eKYukxONBUdbXQU0CGkGgezXvkOaAfzD-08E26w1hy2rtr-2Bi6x-ggJnSpT-13AZNAXc4e7EXb8f2EQxGsEs14HI5Gi3TJ9u5bxwkJa1z6Ovroh_Chr7rQNB2jcmJnEqJX_cGqI0QRzyPnjfwuYC_yNDRTp8BYwADc1TuABB05H8iMI7Bt54PZ_7hhQ8VK0Ga6JwMueF6Joh86OyJu5oA19PUIp35J6KsCtvfZd0vBKABNsXWFu")`,
            }}
          ></div>
        </div>
      </div>
      <p className="text-brand-text text-base font-normal leading-normal pb-3 pt-1 px-4">
        Visit our store at Spencer Plaza, Chennai, to experience the beauty of our silver jewelry firsthand. Our store hours are from 10 AM to 9 PM, Monday to Sunday.
      </p>
    </div>
  );
};

export default StoreVisit;