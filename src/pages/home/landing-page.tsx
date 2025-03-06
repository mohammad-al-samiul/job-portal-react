export const LandingPage = () => {
  return (
    <main>
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img
              src="/logo.png"
              className="h-14 sm:h-24 lg:h-32"
              alt="Hirrd Logo"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
    </main>
  );
};
