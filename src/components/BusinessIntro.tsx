import logo11 from '../assets/logo11.png'
import logo10 from '../assets/logo10.png'
import logo12 from '../assets/logo12.png'
import logo13 from '../assets/logo13.jpeg'

const BusinessIntro = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side: Images */}
        <div className="relative w-full h-full flex justify-center">
          <div className="w-60 h-72 rounded-xl overflow-hidden shadow-lg relative z-10">
            <img
              src={logo10}
              alt="Woman with headphones"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl absolute -bottom-8 -right-8 z-20">
            <img
              src={logo11}
              alt="Man working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side: Text */}
        <div className="text-left">
          <p className="uppercase tracking-widest text-sm text-gray-500 font-semibold mb-2">
            Creative Agency
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 leading-tight">
            We help your <br /> business grow
          </h2>
          <p className="text-gray-500 mt-4 mb-8 max-w-md">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center">
                <img src={logo12}/>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-900 text-lg">Creative design</h4>
                <p className="text-gray-500 text-sm">
                  Natus error sit voluptatem accusantium doloremque.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center">
                <img src={logo13}/>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-900 text-lg">Endless possibilities</h4>
                <p className="text-gray-500 text-sm">
                  Sit voluptatem accusantium doloremque laudan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessIntro;