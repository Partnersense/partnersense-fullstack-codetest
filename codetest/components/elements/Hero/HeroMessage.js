
export default function HeroMessage() {

  return (
          <main className="mt-6 mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 ">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">New arrivals</span>{' '}
                <span className="block text-cyan-600 xl:inline">Spring 2022</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Thoughtfully designed objects for the workspace, home, and travel.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10"
                  >
                    Shop now
                  </a>
                </div>

              </div>
            </div>
          </main>
  )
}
