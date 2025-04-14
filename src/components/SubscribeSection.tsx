import { BsSend } from "react-icons/bs";


const SubscribeSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* Left Text */}
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">
          Subscribe for the <br /> exclusive updates!
        </h2>

        {/* Right Form */}
        <form className="w-full">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 rounded-full py-3 px-5 text-sm text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="mt-4 sm:mt-0 sm:ml-4 inline-flex gap-4 items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full px-6 py-3 transition-all"
              >
                <BsSend />
                Subscribe
              </button>
            </div>

            <label className="text-sm text-gray-500 flex items-center">
              <input type="checkbox" className="mr-2" />
              I agree to the{' '}
              <a href="#" className="text-indigo-600 underline">Privacy Policy</a>.
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;