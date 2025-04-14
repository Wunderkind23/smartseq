import { Swiper, SwiperSlide } from 'swiper/react'
// import "swiper/css";
// import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { blogPosts } from './data';

const Latestarticle = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => (
            `<span class="${className}">${index + 1}</span>`
          )
        }}
        autoplay={{
          delay: 3000,     // 3 seconds between slides
          disableOnInteraction: false,  // keeps autoplay after user swipes
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{post.category}</p>
                <h3 className="text-lg font-semibold text-indigo-900 mt-2">{post.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {post.date} • {post.comments}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Latestarticle;
