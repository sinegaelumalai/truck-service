import busimg from "../assets/busimg.png";
import bike1 from "../assets/bike1.png";
import bike2 from "../assets/bike2.png";
import bike3 from "../assets/bike3.png";
import bike4 from "../assets/bike4.png";
import btsection from "../assets/btsection.png";
import mapimg from "../assets/mapimg.png";
import travelsimg from "../assets/travelsimg.png";
import footerimg from "../assets/footerimg.png";
import flogo from "../assets/flogo.png";
import toplogo from "../assets/toplogo.png";

const LandingPage = () => {
    return (
        <>

            <div className="min-h-screen bg-[#f7f7f7] overflow-hidden">
                {/* Top Bar */}
                <div className="hidden lg:flex items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16 py-3 text-sm text-gray-600 border-b bg-[#f8f8f8]">
                    <div className="flex items-center gap-8 xl:gap-12">
                        <div className="border-r pr-6 xl:pr-10">
                            <p className="font-medium">📍 Наш адрес:</p>
                            <p>г. Бишкек, ул. Ляляля 69</p>
                        </div>

                        <div>
                            <p className="font-medium">🕒 График работы:</p>
                            <p>С 8:00 до 22:00 без выходных</p>
                        </div>
                    </div>

                    <div className="text-right">
                        <p>📞 +7 (708) 51 51 518</p>
                        <p>+7 (700) 51 51 518</p>
                    </div>
                </div>

                {/* Navbar */}
                <nav className="bg-white px-4 md:px-8 lg:px-12 xl:px-16 py-4 md:py-5 flex items-center justify-between shadow-sm">
                    {/* Logo */}
                    <div className="flex items-center shrink-0">
                        <img
                            src={toplogo}
                            alt="Logo"
                            className="w-[85px] sm:w-[100px] md:w-[120px] object-contain"
                        />
                    </div>

                    {/* Menu */}
                    <ul className="hidden lg:flex items-center gap-8 xl:gap-12 text-[16px] xl:text-[18px] text-gray-700 font-medium">
                        <li className="cursor-pointer hover:text-blue-600">Это мы</li>
                        <li className="cursor-pointer hover:text-blue-600">Почему мы?</li>
                        <li className="cursor-pointer hover:text-blue-600">А вот поэтому</li>
                        <li className="cursor-pointer hover:text-blue-600">Контакты</li>
                    </ul>

                    {/* Button */}
                    <button className="bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-md text-sm md:text-base font-medium hover:bg-blue-700 transition shrink-0">
                        Заказать звонок
                    </button>
                </nav>

                {/* Hero Section */}
                <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16 py-10 md:py-16 lg:py-20 gap-10">

                    {/* Left Content */}
                    <div className="w-full lg:w-[45%] text-center lg:text-left">
                        <h1 className="text-[34px] sm:text-[46px] md:text-[58px] lg:text-[72px] font-bold leading-tight text-[#2d2d2d]">
                            Affordable truck service
                        </h1>

                        <p className="mt-4 md:mt-6 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-600 leading-7 md:leading-8 lg:leading-9">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br className="hidden md:block" />
                            Nunc odio in et, lectus sit lorem id integer.
                        </p>

                        <button className="mt-6 md:mt-8 bg-blue-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-lg text-sm md:text-lg font-medium hover:bg-blue-700 transition">
                            Чета сделать
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                        <img
                            src={busimg}
                            alt="Truck"
                            className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] object-contain"
                        />
                    </div>
                </section>
            </div>

            {/* // secondsection------------------------------- */}

            {/* Services Section */}
            {/* Services + Bottom Sections */}
            <section className="bg-[#f7f7f7] py-14 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl md:text-[52px] font-bold text-[#2d2d2d] leading-tight">
                        Любые услуги за ваши денишки
                    </h2>
                    <p className="mt-4 text-base sm:text-lg md:text-[22px] text-gray-500 leading-7 md:leading-9">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                        <br className="hidden md:block" />
                        odio in et, lectus sit lorem id integer.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-[1400px] mx-auto">
                    {/* Card 1 */}
                    <div className="bg-[#f1f2f5] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 min-h-[250px]">
                        <div className="max-w-[260px] text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#333] leading-8">
                                Б/у запчасти для грузовых авто из Европы
                            </h3>
                            <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg leading-7">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <img src={bike1} alt="" className="w-[160px] sm:w-[190px] md:w-[220px] object-contain" />
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#f1f2f5] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 min-h-[250px]">
                        <div className="max-w-[260px] text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#333] leading-8">
                                Автомойка грузовых и легковых авто
                            </h3>
                            <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg leading-7">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <img src={bike2} alt="" className="w-[170px] sm:w-[200px] md:w-[230px] object-contain" />
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#f1f2f5] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 min-h-[250px]">
                        <div className="max-w-[260px] text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#333] leading-8">
                                Магазин аксессуаров
                            </h3>
                            <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg leading-7">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <img src={bike3} alt="" className="w-[180px] sm:w-[220px] md:w-[250px] object-contain" />
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#f1f2f5] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 min-h-[250px]">
                        <div className="max-w-[260px] text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#333] leading-8">
                                Пункт замены масла легковых авто
                            </h3>
                            <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg leading-7">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <img src={bike4} alt="" className="w-[150px] sm:w-[180px] md:w-[200px] object-contain" />
                    </div>
                </div>

                {/* Brand */}
                <div className="w-full max-w-[1400px] mx-auto pt-10">
                    <img src={btsection} alt="Brand" className="w-full rounded-2xl object-cover" />
                </div>

                {/* Map */}
                <div className="w-full max-w-[1400px] mx-auto pt-10">
                    <img src={mapimg} alt="Map" className="w-full object-cover rounded-2xl" />
                </div>

                {/* Travel */}
                <div className="w-full max-w-[1400px] mx-auto pt-10">
                    <img src={travelsimg} alt="Travel" className="w-full rounded-2xl object-cover" />
                </div>

                {/* Contact Section */}
                <section
                    className="w-full min-h-[420px] bg-cover bg-center flex items-center justify-end px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-10"
                    style={{ backgroundImage: `url(${footerimg})` }}
                >
                    <div className="bg-white rounded-xl p-4 md:p-5 w-full max-w-[290px] shadow-md">
                        {/* Heading */}
                        <h2 className="text-[26px] md:text-[30px] font-bold text-[#2d2d2d] leading-tight">
                            Остались <br /> вопросы?
                        </h2>

                        {/* Paragraph */}
                        <p className="mt-2 text-gray-500 text-xs md:text-sm leading-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc odio in et, lectus sit lorem id integer.
                        </p>

                        {/* Form */}
                        <div className="mt-4 space-y-2">
                            <input
                                type="text"
                                placeholder="Имя"
                                className="w-full bg-[#f3f4fb] px-3 py-2 rounded-md outline-none text-sm"
                            />

                            <input
                                type="text"
                                placeholder="Номер телефона"
                                className="w-full bg-[#f3f4fb] px-3 py-2 rounded-md outline-none text-sm"
                            />

                            <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                                Отправить
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="bg-[#111111] text-white w-full py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                    <div className="w-full max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">

                            {/* Logo */}
                            <div className="flex justify-center sm:justify-start">
                                <img
                                    src={flogo}
                                    alt="Logo"
                                    className="w-[90px] md:w-[110px] object-contain"
                                />
                            </div>

                            {/* Menu */}
                            <div className="text-center sm:text-left">
                                <h3 className="text-lg md:text-xl font-semibold mb-4">Главная</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>Это мы</li>
                                    <li>Кто мы</li>
                                    <li>Почему мы?</li>
                                    <li>Остались вопросы</li>
                                    <li>Контакты</li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="text-center sm:text-left">
                                <h3 className="text-lg md:text-xl font-semibold mb-4">Контакты</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>+7 (708) 802 88 88</li>
                                    <li>+7 (708) 803 88 88</li>
                                    <li>+7 (708) 51 51 518</li>
                                    <li>+7 (700) 51 51 518</li>
                                    <li className="pt-2">📞 +7 (708) 802 88 88</li>
                                    <li>📍 г. Бишкек, ул. Ляляля 69</li>
                                </ul>
                            </div>

                            {/* Social */}
                            <div className="text-center sm:text-left">
                                <h3 className="text-lg md:text-xl font-semibold mb-4">
                                    Следите за нами
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>📘 truck_service_officlaL</li>
                                    <li>📷 truck_service_officlaL</li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom */}
                        <div className="border-t border-gray-700 mt-8 pt-4 text-gray-400 text-xs text-center sm:text-left">
                            Copyright © Truck Services 2022. All rights reserved.
                        </div>
                    </div>
                </footer>
            </section>

        </>
    );
};

export default LandingPage;