import React from 'react';

// Komponen untuk Halaman Beranda (Home Page)
const HomePage = () => (
  <>
    <main className="flex-1 flex flex-col md:flex-row items-center justify-start p-8 md:p-18">
      {/* Konten Kiri (Teks) */}
      <div className="md:w-full md:flex-row">
        {/* Judul menggunakan font-brittany */}
        <h1 className="text-[#59ac77] text-[100px] font-brittany leading-none mb-10">
          Hello!
        </h1>
        <p className="font-poppins text-[28px] !text-[#d25d5d] italic leading-relaxed">
          At <span className="!text-[#59ac77]">Planorama</span>, we connect customers with the best event organizer (EO) vendors in one simple platform. Whether you are planning a wedding, corporate event, birthday party, or community gathering, we make it easier for you to find, consult, and collaborate with trusted EO vendors who will turn your vision into reality.
        </p>
      </div>
      
      {/* Konten Kanan (Gambar) - Disesuaikan agar "terpotong" */}
      <div className="relative md:w-1/2 mt-8 md:mt-0">
        <div className="relative md:w-full h-auto mt-8 md:mt-0 flex justify-start">
          <img src="/bunga besar.png" alt="Bunga Besar" />
        <div className="absolute top-1/2 left-1/3">
          <img src="/bungakecil.png" alt="Bunga Kecil" />
        </div>
        </div>
      </div>
    </main>

    {/* Kutipan kecil di bawah konten utama */}
    <div className="w-full text-center py-10">
      <p className="font-poppins text-[23px] text-[#aa6a3a] italic max-w-2x1 mx-auto">
        Start your journey with Planorama today and create unforgettable events with the perfect EO partner!
      </p>
    </div>
  </>
);

// Komponen untuk Halaman Tentang Kami (About Us Page)
const AboutUsPage = () => (
  <main className="flex-1 flex flex-col items-center p-8 md:p-16">
    {/* Konten halaman About Us */}
      <h2 className="text-[#59ac77] text-[45px] font-brittany mb-4">
        Plan your moments, celebrate with elegance.
      </h2>
      <p className="font-poppins text-[25px] text-[#d25d5d] leading-relaxed mb-4">
        At Planorama, we believe that every event deserves to be unforgettable. Founded with a passion for creativity and a vision to simplify event planning, Planorama serves as a digital marketplace that connects customers with trusted Event Organizer (EO) vendors.
      </p>
      <p className="font-poppins text-[25px] text-[#d25d5d] leading-relaxed mb-4">
        What makes us unique is our special focus on floral decoration—bringing elegance, beauty, and freshness to every celebration. Whether it's a wedding, birthday, or corporate gathering, we help clients find the perfect EO partner while ensuring that every flower arrangement comes directly from our curated stock.
      </p>
      <h3 className="font-poppins text-[25px] font-semibold text-[#aa6a3a] mb-4">Our mission is simple:</h3>
      <ul className="list-disc list-inside font-poppins text-[25px] text-[#d25d5d] leading-relaxed">
        <li>To empower EO vendors by giving them a platform to reach more customers.</li>
        <li>To assist clients in discovering and booking the right vendor with ease and transparency.</li>
        <li>To elevate events with creative floral concepts that leave lasting impressions.</li>
      </ul>
      <p className="font-poppins text-[25px] text-[#d25d5d] leading-relaxed mt-4">
        With Planorama, planning your event is no longer stressful—it's seamless, inspiring, and full of possibilities.
      </p>
  </main>
);

// Komponen utama
const App = () => {
  const [activePage, setActivePage] = React.useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutUsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-[#f5d2d2] min-h-screen flex flex-col">
      {/* Navbar dengan warna baru */}
      <nav className="bg-[#ffb0b9] shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo menggunakan font-amsterdam */}
          <div className="flex text-[28px] font-amsterdam font-bold">
            <span className="text-[#f75270]">Plan</span>
            <span className="text-[#59ac77]">orama</span>
          </div>

          {/* Menu Navigasi menggunakan font-poppins */}
          <div className="flex space-x-6 font-poppins text-[20px] !text-[#aa6a3a] font-semibold">
            <a 
              onClick={() => setActivePage('home')}
              className={`!text-[#aa6a3a] hover:text-pink-500 transition-colors duration-300 ${activePage === 'home' ? 'underline' : ''} cursor-pointer`}>
                Home
            </a>
            <a 
              onClick={() => setActivePage('about')}
              className={`!text-[#aa6a3a] hover:text-pink-500 transition-colors duration-300 ${activePage === 'about' ? 'underline' : ''} cursor-pointer`}>
                About Us
            </a>
            <a className="!text-[#aa6a3a] hover:text-pink-500 transition-colors duration-300">Our Vendor</a>
            <a className="!text-[#aa6a3a] hover:text-pink-500 transition-colors duration-300">Consultation</a>
            <a className="!text-[#aa6a3a] hover:text-pink-500 transition-colors duration-300">Testimonial</a>
          </div>
        </div>
      </nav>

      {renderPage()}

      {/* Taskbar di bagian bawah */}
      <footer className="bg-[#ffb0b9] py-4 text-center">
        <p className="font-poppins text-[10px] text-[#000000] leading-relaxed max-w-2xl mx-auto px-4">
          &copy; 2025 Planorama. All rights reserved. Planorama is a digital platform that connects customers with trusted Event Organizer (EO) vendors, with a special focus on floral decoration and creative event concepts. Every content, design, and service provided on this website is developed by the Planorama team for educational and professional purposes. Unauthorized use, reproduction, or distribution of any material without written consent is strictly prohibited.
        </p>
      </footer>
    </div>
  );
};

export default App;