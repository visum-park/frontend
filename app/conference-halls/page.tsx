import Carousel from "../components/Carousel";

const images = [
  "/images/conference/conferenceHall.jpeg",
  "/images/conference/backview.jpeg",
  "/images/conference/backview2.jpeg",
  "/images/conference/backview3.jpeg",
];

const Conference = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#BC9F64] mb-4">
            Conference Halls
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            Modern, spacious conference halls designed for meetings, workshops,
            and corporate events in a professional and comfortable setting.
          </p>

          <div className="h-1 w-24 mx-auto mt-6 rounded-full bg-[#BC9F64]" />
        </div>

        {/* Carousel */}
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <Carousel
              images={images}
              autoSlideInterval={5000}
              height="h-[420px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conference;
