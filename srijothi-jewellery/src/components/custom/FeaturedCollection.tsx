import React from 'react';
import Image from 'next/image';

const featuredItems = [
  {
    name: 'Silver Rings',
    description: 'Explore our collection of finely crafted silver rings.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgyhOYv93bQExQH8D113cQQCR3TTg2cGhd0YafEK6gy4C-gWkjZoFcyvcUD7jMYdTIzuW4gpQ7rV88JPWe_IK7n_P2SiGqNXeeDOZFfJXiqHVmP2r8FqHiQV5kFpGLWQL3FqEoBlDQlisiR-unfLSNsxW3NbjdnrUgabDdV7LiUzuhxzjaAKmSUkiDu0jBj7qVXgP9lGURQOEAOYnZvRODVmXf1x5LtBhykCJ98gEq_fvivEuP1lrqkzfOzmQdQP5SNlHcMrKMS_nF',
  },
  {
    name: 'Silver Bracelets',
    description: 'Discover our range of elegant silver bracelets.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDozbobLoNV_n7Pwnaflt66XMItSUkPj3BfDko0YwqIVA8cgBfTaSJ_C9J2jUtwPhfgJnYELeMayL3grVP26RtmFDhrm1CeY2A_-EODSgZ3a_wiQkTcPAyBQy7jMrqPMZ8-CspSYGthWh4DHZVOogzdU-cUsvKNd7ILr83nntPA0CiqeWLaW9yn8QS-rrTB6RVUO_IbKYnAz4NjbtlisBo7K8drjC4F4TaYz740mKPGyAZwX3-vxrh4ogKFThPJrzzOlpYn2iWvNx55',
  },
  {
    name: 'Silver Anklets',
    description: 'Adorn your ankles with our beautiful silver anklets.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMXGWAcG3G1Clsjjr9PQTTDZInV3e4kaSRq90ddFd95_QMR2DsGNqU0utzNuoZab2IkmxyZUF5TTvaObeDLu76x8rsyxcDAAv9BPWQ48kCmgH6shDGF7wOy74ZS_-kIXlu6f7yoNpj32DpxJ46aFXwCTeCJ3ykL27UGQVtjz0r9lY3N7XHbDEy6zDJS2Jg4GP-9OVw3-_PnG1ldyd6yuU1pKxGCv_1jlTjwJX0qjfEBJC47ORLCBC3tZcBAaHWhI2x6O3czSj4gY2J',
  },
];

const FeaturedCollection = () => {
  return (
    <div>
      <h2 className="text-brand-text text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Featured Collection
      </h2>
      <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {featuredItems.map((item, index) => (
            <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div className="w-full aspect-square relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  unoptimized // Since the images are from external URLs
                />
              </div>
              <div>
                <p className="text-brand-text text-base font-medium leading-normal">{item.name}</p>
                <p className="text-brand-secondary text-sm font-normal leading-normal">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;