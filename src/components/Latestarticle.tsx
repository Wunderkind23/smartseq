import { blogPosts } from './data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from './Title';
import Title2 from './Title2';

const Latestarticle = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-16 py-16">
      <div className='flex flex-col items-center mb-8'>
        <Title2 title='OUR BLOG'/>
        <Title title='Latest articles'/>
      </div>
      <Slider {...settings}>
        {blogPosts.map((post, index) => (
          <div key={index} className="px-2 h-full">
            <div className="rounded-lg overflow-hidden shadow-md bg-white h-full flex flex-col">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{post.category}</p>
                  <h3 className="text-lg font-semibold text-indigo-900 mt-2">{post.title}</h3>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  {post.date} • {post.comments}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Latestarticle;
