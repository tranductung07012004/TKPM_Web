import React  from 'react';
import BridalImage from '../Bridal';
import RentedCounterBox from '../RentedCounterBox';
import SatisfiedCounterBox from '../SatisfiedCounterBox';
import CategoryCard from '../CategoryCard';

const Home = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <nav className="flex z-10 items-center justify-start px-8 py-4 space-x-20 w-10/11">
        <img className="w-1/5 h-auto" src="./LOGO.svg" alt="Enchanted Weddings Logo" />

        {/* Container chứa menu và icon: sử dụng inline-grid để co lại theo nội dung */}
        <div className="flex flex-1 items-center gap-x-70 bg-[#fdfcf9] border border-[#EAEAEA] w-3/5 sm:w-2/5 md:w-2/5 h-[50px] rounded-lg">
          {/* Cột bên trái: khoảng trống lớn (có thể bỏ nếu không cần) */}
          <div></div>
          {/* Cột giữa: Nhóm chữ canh giữa */}
            <ul className="flex flex-grow space-x-8">
              <li className="text-[#C3937C] hover:text-[#6164bc] cursor-pointer">Home</li>
              <li className="text-[#C3937C] hover:text-[#6164bc] cursor-pointer">About</li>
              <li className="text-[#C3937C] hover:text-[#6164bc] cursor-pointer">Services</li>
              <li className="text-[#C3937C] hover:text-[#6164bc] cursor-pointer">Blog</li>
              <li className="text-[#C3937C] hover:text-[#6164bc] cursor-pointer">Contact</li>
            </ul>
          {/* Cột bên phải: Nhóm icon canh bên phải */}
          <div className="flex items-center space-x-4 ml-4 mr-4">
            <img className="w-5 h-8" src="./profile.svg" alt="Profile Icon" />
            <img className="w-6 h-8" src="./search.svg" alt="Search Icon" />
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-row items-center justify-between px-8 py-16 bg-gray-50">
        {/* Text content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-[#C3937C] mb-4">
            Here. Begins The <br/> Journey
          </h1>
          <p className="text-gray-600 mb-6">
            {/* Đoạn mô tả ngắn về dịch vụ hoặc giới thiệu */}
            We have a diverse selection of dresses for everyone,<br/> 
            providing you with ample choices at affordable prices.
          </p>
        </div>

        {/* Image placeholder (Hero Dress) */}
        <div className="flex flex-col justify-center md:w-1/2 mt-8 md:mt-0 ">
          
          <div className="absolute top-0">
            <SatisfiedCounterBox end={2564} />
          </div>
          <div className='absolute top-0 right-35'>
          <img
              src="./pic3.jpg"
              alt="Wedding Dress"
              className="
                w-[300px] h-[200px] object-cover
                rounded-br-[80px]
              "
            />
          </div>
          
          <div className="pt-[120px]">
            <img
              src="./pic4.jpg"
              alt="Wedding Dress"
              className="
                w-[300px] h-[500px] object-cover
                rounded-tl-[80px]
                rounded-tr-none
                rounded-bl-[80px]
                rounded-br-[80px]
              "
            />
          </div>                     
        </div>
        <div className='absolute top-60 right-35'>
            <img
              src="./pic1.jpg"
              alt="Wedding Dress"
              className="
                w-[300px] h-[300px] object-cover
                rounded-tl-[80px]
                rounded-br-[80px]
              "
            /> 
        </div>
           
        <div className="absolute top-150 right-35">
            <RentedCounterBox end={1884} />
        </div>
        
      </section>

      {/* LATEST BRIDAL DRESS SECTION */}
      <section className="flex flex-row justify-between bg-[#FBF8F1] py-16 px-8">
          {/* Dress Card 1 */}
          <div className="flex-1 bg-white rounded-lg shadow p-4 w-full h-[600px] md:w-1/3">
            <BridalImage 
              src="./pic1.jpg" 
              alt="Wedding Dress" 
            /> 
            <div className='flex flex-row justify-between items-center'>
              {/* Bên trái: h3 và h5 theo cột */}
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Floral Lace</h3>
                <h5 className="text-gray-600">Diana</h5>
              </div>

              {/* Bên phải: Giá */}
              <p className="text-gray-600">Price: <span className='text-[#C3937C]'>$450</span>/Per Day</p>
            </div>
          </div>

          {/* Middle Card for information */}
          <div className="flex-1 text-center mt-30 mb-8">
            <h2 className="text-3xl text-gray-800">Our Latest</h2>
             <h2 className='text-[#C3937C] text-[40px] font-[600]'>Bridal Dress</h2>
            <div className="flex items-center justify-center h-48 mx-8">
              <p>Discover the latest in dresses trends with our stunning collection must have been pieces. from sleek modern designs to  classics, these trending products are sure to elevate your special </p>
            </div>

             <button className="border border-[#C3937C] bg-white text-[#C3937C] px-4 py-2 rounded-lg hover:bg-[#C3937C] hover:text-white transition">
                  Explore more &gt;
            </button>
          </div>  

          {/* Dress Card 2 */}
          <div className="flex-1 bg-white rounded-lg shadow p-4 w-full h-[600px] md:w-1/3">
            <BridalImage 
              src="./pic4.jpg" 
              alt="Wedding Dress" 
            /> 
            <div className='flex flex-row justify-between items-center'>
              {/* Bên trái: h3 và h5 theo cột */}
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">Self Portrait</h3>
                <h5 className="text-gray-600">Orla</h5>
              </div>
              {/* Bên phải: Giá */}
              <p className="text-gray-600">Price: <span className='text-[#C3937C]'>$350</span>/Per Day</p>
            </div>
          </div>
      </section>

      {/* Category */}
      <section
        className="py-16 px-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/05/anh-co-dau.jpg')",
        }}
      >
        {/* Overlay (nếu cần)
        <div className="absolute inset-0 bg-[#fef6dc] bg-opacity-40"></div> */}

        <div className="max-w-6xl mx-auto">
          {/* Tiêu đề */}
          <h1 className="text-center text-4xl font-bold text-white mb-12">
            Our Categories
          </h1>

          {/* Grid chia card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              icon={
                <img
                  src="pic7.png" // Hoặc link URL
                  alt="Dress Icon"
                  className="w-30 h-30 object-contain"
                />
              }
              title="Dress for Moms"
              description="What to wear after tips"
              buttonText="See 283 models"
            />

            <CategoryCard
              icon={
                <img
                  src="pic8.png" // Hoặc link URL
                  alt="Dress Icon"
                  className="w-30 h-30 object-contain"
                />
              }
              title="Wedding Guest"
              description="Formal look good on these category"
              buttonText="See 356 models"
            />

            <CategoryCard
              icon={
                <img
                  src="pic9.png" // Hoặc link URL
                  alt="Dress Icon"
                  className="w-30 h-30 object-contain"
                />
              }
              title="Short Tie"
              description="Unique & unusual dress"
              buttonText="See 221 models"
            />
            <CategoryCard
              icon={
                <img
                  src="pic10.png" // Hoặc link URL
                  alt="Dress Icon"
                  className="w-30 h-30 object-contain"
                />
              }
              title="Short Tie"
              description="Unique & unusual dress"
              buttonText="See 221 models"
            />
            <CategoryCard
              icon={
                <img
                  src="pic11.png" // Hoặc link URL
                  alt="Dress Icon"
                  className="w-30 h-30 object-contain"
                />
              }
              title="Short Tie"
              description="Unique & unusual dress"
              buttonText="See 221 model"
            />
            <CategoryCard
              icon={
                <img
                  src="pic12.png" // Hoặc link URL
                  alt="Dress Icon"
                  className="w-30 h-30 object-contain"
                />
              }
              title="Short Tie"
              description="Unique & unusual dress"
              buttonText="See 221 models"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-8 bg-cover bg-center">
        <div className="max-w-6xl mx-auto">
          {/* Tiêu đề */}
          <h1 className="text-center text-[32px] font-[600] text-[#C3937C] mb-3">
            Our Services
          </h1>
          <p className="text-center text-[16px] text-[#0C0C0C]">
            We work hard to gain a trust on you
          </p>

          {/* Grid 4 cột trên desktop, 2 cột trên tablet, 1 cột trên mobile */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-tl-[50px] rounded-tr-[50px] overflow-hidden h-[600px] grid grid-rows-[minmax(150px,2fr)_1fr]">
              {/* Ảnh */}
              <div className="overflow-hidden">
                <img
                  src="pic1.jpg"
                  alt="Service 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Nội dung */}
              <div className="flex flex-col justify-between p-4">
                <h3 className="text-lg text-center font-semibold text-[#0C0C0C]">
                  Personalized dress for you
                </h3>
                <p className="text-[#0C0C0C] text-sm text-center overflow-auto">
                  Đây là đoạn text dài. We offer a large assortment of clothing for you, with which you can create whatever you desire on your mind. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <button className="border border-[#C3937C] bg-white text-[#C3937C] flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-lg hover:bg-[#C3937C] hover:text-white transition">
                  <img src="/icon3.png" alt="icon" className="w-4 h-4" />
                  Learn more &gt;
                </button>
              </div>
            </div>





            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-tl-[50px] rounded-tr-[50px] overflow-hidden h-[600px] grid grid-rows-[minmax(150px,auto)_1fr]">
              {/* Nội dung */}
              <div className="flex flex-col justify-between p-4">
                <h3 className="text-lg text-center font-semibold text-[#0C0C0C]">
                  Customize your dress size
                </h3>
                <p className="text-[#0C0C0C] text-sm text-center">
                  All sewing patterns are made to measure for your size measurements by our expert designers according to the unique technologies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <button className="border border-[#C3937C] bg-white text-[#C3937C] flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-lg hover:bg-[#C3937C] hover:text-white transition">
                  <img src="/icon3.png" alt="icon" className="w-4 h-4" />
                  Learn more &gt;
                </button>
              </div>

              {/* Ảnh */}
              <div className="overflow-hidden">
                <img
                  src="pic2.jpg"
                  alt="Service 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>



            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-tl-[50px] rounded-tr-[50px] overflow-hidden h-[600px] grid grid-rows-[minmax(150px,2fr)_1fr]">
              {/* Ảnh */}
              <div className="overflow-hidden">
                <img
                  src="pic3.jpg"
                  alt="Service 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Nội dung */}
              <div className="flex flex-col justify-between p-4">
                <h3 className="text-lg text-center font-semibold text-[#0C0C0C]">
                  Virtual outfit try-on with AI
                </h3>
                <p className="text-[#0C0C0C] text-sm text-center overflow-auto">
                  Instantly see how clothes look on you without the need for physical fitting. Our AI models adapt to various body types and sizes to provide a realistic fitting experience.
                </p>
                <button className="border border-[#C3937C] bg-white text-[#C3937C] flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-lg hover:bg-[#C3937C] hover:text-white transition">
                  <img src="/icon3.png" alt="icon" className="w-4 h-4" />
                  Learn more &gt;
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-tl-[50px] rounded-tr-[50px] overflow-hidden h-[600px] grid grid-rows-[minmax(150px,auto)_1fr]">
              {/* Nội dung */}
              <div className="flex flex-col justify-between p-4">
                <h3 className="text-lg text-center font-semibold text-[#0C0C0C]">
                  Professional consultation
                </h3>
                <p className="text-[#0C0C0C] text-sm text-center">
                  Your dress consultation give you a chance to try on all different dress styles with the help of a professional consultant. Your dress consultation give you a chance to try on all different dress styles with the help of a professional consultant.
                </p>
                <button className="border border-[#C3937C] bg-white text-[#C3937C] flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-lg hover:bg-[#C3937C] hover:text-white transition">
                  <img src="/icon3.png" alt="icon" className="w-4 h-4" />
                  Learn more &gt;
                </button>
              </div>

              {/* Ảnh */}
              <div className="overflow-hidden">
                <img
                  src="pic4.jpg"
                  alt="Service 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
