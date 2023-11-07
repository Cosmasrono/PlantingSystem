import React from 'react';
import Image from 'next/image';

function App() {
  return (
    <main className="bg-green-500 min-h-screen flex flex-col items-center justify-center">
      <header>
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Your Plant Paradise
        </h1>
        <p className="text-lg text-white">
          Discover a world of greenery with our wide selection of plants.
        </p>
        <a
          href="/"
          className=" inline-block px-6 py-3 bg-blue-500 text-white rounded-full animate__animated animate__fadeIn"
        >
          Refresh 
        </a>
      </header>
      <section
        id="shop"
        className=" mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 animate__animated animate__fadeIn"
      >
        <div className="max-w-sm m-4 rounded-lg overflow-hidden shadow-lg bg-white">
          <Image
            src="https://media.istockphoto.com/id/1462151150/photo/hands-growing-a-young-plant.webp?b=1&s=170667a&w=0&k=20&c=3bxKMJnLAxZ3IFhagOBLlhNxn1VWciv9c-n-eArYA-s="
            alt="Plant 1"
            width={1260}
            height={750}
            layout="responsive"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Beautiful Plant 1</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-4 rounded-lg overflow-hidden shadow-lg bg-white">
        <Image
            src="https://media.istockphoto.com/id/1462151150/photo/hands-growing-a-young-plant.webp?b=1&s=170667a&w=0&k=20&c=3bxKMJnLAxZ3IFhagOBLlhNxn1VWciv9c-n-eArYA-s="
            alt="Plant 1"
            width={1260}
            height={750}
            layout="responsive"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Beautiful Plant 2</h2>
            <p className="text-gray-600">
              Another beautiful plant description.
            </p>
          </div>
        </div>
        <div className="max-w-sm m-4 rounded-lg overflow-hidden shadow-lg bg-white">
        <Image
            src="https://media.istockphoto.com/id/1462151150/photo/hands-growing-a-young-plant.webp?b=1&s=170667a&w=0&k=20&c=3bxKMJnLAxZ3IFhagOBLlhNxn1VWciv9c-n-eArYA-s="
            alt="Plant 1"
            width={1260}
            height={750}
            layout="responsive"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Beautiful Plant 3</h2>
            <p className="text-gray-600">
              Description of the third beautiful plant.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
