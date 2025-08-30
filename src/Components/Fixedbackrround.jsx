import DownloadPriceList from "./Download";

export default function BackgroundGif() {
  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/cta.gif')" }}
    >
      <div
        className="flex flex-col items-center justify-center 
        h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-screen
        bg-black/50 gap-4 sm:gap-5 px-4 text-center sm:text-justify"
      >
        {/* Heading */}
        <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
          90% Discount Available
        </h1>

        {/* Subtitle */}
        <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl">
          We sell exclusive Standard fireworks products to our valuable
          customers in all working days with reasonable rates.
        </p>

        {/* Key Points */}
        <div className="space-y-1 lg:space-y-2 text-white text-xs sm:text-sm md:text-base max-w-xl">
          <p>1. SUPERIOR QUALITY PRODUCTS</p>
          <p>2. SOUND INFRASTRUCTURE</p>
          <p>3. REASONABLE RATE</p>
          <p>4. 100% CUSTOMER SATISFACTION</p>
        </div>

        {/* Download Button */}
        <div className="mt-4 sm:mt-6">
          <DownloadPriceList />
        </div>
      </div>
    </div>
  );
}
