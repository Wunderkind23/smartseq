import Slider, { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonials } from './data';

const ArrowLeft = (props: CustomArrowProps) => (
  <button
    onClick={props.onClick}
    className="absolute left-[-2rem] z-10 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-2 hover:bg-gray-100 transition"
    aria-label="Previous slide"
  >
    <FiChevronLeft className="w-5 h-5 text-gray-700" />
  </button>
);

const ArrowRight = (props: CustomArrowProps) => (
  <button
    onClick={props.onClick}
    className="absolute right-[-2rem] z-10 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-2 hover:bg-gray-100 transition"
    aria-label="Next slide"
  >
    <FiChevronRight className="w-5 h-5 text-gray-700" />
  </button>
);

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-100 py-16 px-4 relative">
      <div className="max-w-3xl mx-auto text-center">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index}>
              <div className="flex flex-col items-center space-y-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <p className="text-lg text-gray-700 max-w-xl mx-auto italic">"{t.text}"</p>
                <div className="text-3xl text-cyan-500">❝</div>
                <div>
                  <p className="text-indigo-900 font-bold text-lg">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
