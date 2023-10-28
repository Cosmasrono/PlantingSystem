import React from 'react';
// import 'animate.css/animate.css'; // Import the animate.css library
 

function App() {
  return (
    <div className="bg-green-500 min-h-screen flex flex-col items-center justify-center">
      <header className="text-center animate__animated animate__fadeInUp">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Your Plant Paradise
        </h1>
        <p className="text-lg text-white">
          Discover a world of greenery with our wide selection of plants.
        </p>
        <a href="#shop" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-full animate__animated animate__fadeIn">
          Shop Now
        </a>
      </header>
      <section
        id="shop"
        className="flex flex-wrap justify-center -mt-8 animate__animated animate__fadeIn"
      >
        <div className="max-w-sm m-4 rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            src="plant1.jpg"
            alt="Plant 1"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Beautiful Plant 1</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-4 rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            src="plant2.jpg"
            alt="Plant 2"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Exotic Plant 2</h2>
            <p className="text-gray-600">
              Suspendisse auctor orci eget ex fermentum dapibus.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-4 rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            src="plant3.jpg"
            alt="Plant 3"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Rare Plant 3</h2>
            <p className="text-gray-600">
              Vestibulum interdum augue eget viverra faucibus.
            </p>
          </div>
        </div>
      </section>
      <footer className="mt-12 text-center animate__animated animate__fadeInUp">
        <p className="text-white">&copy; 2023 Your Plant Paradise</p>
      </footer>
    </div>
  );
}

export default App;
