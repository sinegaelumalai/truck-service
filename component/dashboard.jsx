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
                <div className="hidden md:flex items-center justify-between px-20 py-3 text-sm text-gray-600 border-b bg-[#f8f8f8]">
                    <div className="flex items-center gap-12">
                        <div className="border-r pr-10">
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
                <nav className="bg-white px-20 py-5 flex items-center justify-between shadow-sm">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src={toplogo}
                            alt="Logo"
                            className="w-[120px] md:w-[130px] object-contain"
                        />
                    </div>

                    {/* Menu */}
                    <ul className="hidden md:flex gap-14 text-[18px] text-gray-700 font-medium">
                        <li className="cursor-pointer hover:text-blue-600">Это мы</li>
                        <li className="cursor-pointer hover:text-blue-600">Почему мы?</li>
                        <li className="cursor-pointer hover:text-blue-600">
                            А вот поэтому
                        </li>
                        <li className="cursor-pointer hover:text-blue-600">Контакты</li>
                    </ul>

                    {/* Button */}
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition">
                        Заказать звонок
                    </button>
                </nav>

                {/* Hero Section */}
                <section className="flex flex-col md:flex-row items-center justify-between px-20 py-20">
                    {/* Left Content */}
                    <div className="max-w-[520px]">
                        <h1 className="text-[72px] font-bold leading-[82px] text-[#2d2d2d]">
                            Affordable truck service
                        </h1>

                        <p className="mt-8 text-[22px] text-gray-600 leading-9">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br />
                            Nunc odio in et, lectus sit lorem id integer.
                        </p>

                        <button className="mt-10 bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
                            Чета сделать
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-[58%] mt-14 md:mt-0 flex justify-end">
                        <img
                            src={busimg}
                            alt="Truck"
                            className="w-full max-w-[900px] object-contain"
                        />
                    </div>
                </section>
            </div>

            {/* // secondsection------------------------------- */}

            {/* Services Section */}
            <section className="bg-[#f7f7f7] py-20 px-6 md:px-20">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-[52px] font-bold text-[#2d2d2d] leading-tight">
                        Любые услуги за ваши денишки
                    </h2>
                    <p className="mt-4 text-[24px] text-gray-500 leading-9">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                        <br />
                        odio in et, lectus sit lorem id integer.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* Card 1 */}
                    <div className="bg-[#f1f2f5] rounded-2xl p-8 flex justify-between items-center min-h-[270px]">
                        <div className="max-w-[260px]">
                            <h3 className="text-[28px] font-bold text-[#333] leading-9">
                                Б/у запчасти для грузовых авто из Европы
                            </h3>
                            <p className="mt-5 text-gray-500 text-[20px] leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc odio in et, lectus sit lorem id integer.
                            </p>
                        </div>
                        <img src={bike1} alt="" className="w-[220px] object-contain" />
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#f1f2f5] rounded-2xl p-8 flex justify-between items-center min-h-[270px]">
                        <div className="max-w-[260px]">
                            <h3 className="text-[28px] font-bold text-[#333] leading-9">
                                Автомойка грузовых и легковых авто
                            </h3>
                            <p className="mt-5 text-gray-500 text-[20px] leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc odio in et, lectus sit lorem id integer.
                            </p>
                        </div>
                        <img src={bike2} alt="" className="w-[230px] object-contain" />
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#f1f2f5] rounded-2xl p-8 flex justify-between items-center min-h-[270px]">
                        <div className="max-w-[260px]">
                            <h3 className="text-[28px] font-bold text-[#333] leading-9">
                                Магазин аксессуаров
                            </h3>
                            <p className="mt-5 text-gray-500 text-[20px] leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc odio in et, lectus sit lorem id integer.
                            </p>
                        </div>
                        <img src={bike3} alt="" className="w-[250px] object-contain" />
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#f1f2f5] rounded-2xl p-8 flex justify-between items-center min-h-[270px]">
                        <div className="max-w-[260px]">
                            <h3 className="text-[28px] font-bold text-[#333] leading-9">
                                Пункт замены масла легковых авто
                            </h3>
                            <p className="mt-5 text-gray-500 text-[20px] leading-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc odio in et, lectus sit lorem id integer.
                            </p>
                        </div>
                        <img src={bike4} alt="" className="w-[200px] object-contain" />
                    </div>

                </div>

                {/* Brand Section */}
                <section className="bg-[#f7f7f7] px-6 md:px-20 pt-10">
                    <div className="max-w-6xl mx-auto">
                        <img
                            src={btsection}
                            alt="Brand Section"
                            className="w-full object-contain rounded-2xl"
                        />
                    </div>
                </section>

                {/* Map Section */}
                <section className=" md:px-20 pb-20">

                    {/* Right Map Image */}
                    <div>
                        <img
                            src={mapimg}
                            alt="Map"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </section>

                {/* Travel Image Section */}
                <section className="bg-[#f7f7f7] px-6 md:px-20">
                    <div className="max-w-6xl mx-auto">
                        <img
                            src={travelsimg}
                            alt="Travel"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </section>

                {/* Contact Section */}
                <section
                    className="w-full min-h-[450px] bg-cover bg-center flex items-center justify-end px-6 md:px-20"
                    style={{ backgroundImage: `url(${footerimg})` }}
                >
                    <div className="bg-white rounded-xl p-4 md:p-5 w-full max-w-[290px] shadow-md">

                        {/* Heading */}
                        <h2 className="text-[28px] md:text-[32px] font-bold text-[#2d2d2d] leading-tight">
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
                {/* Footer Section */}
                <footer className="bg-[#111111] text-white w-full py-10 flex justify-center">
                    <div className="w-full max-w-[1255px] px-6 md:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

                            {/* Logo */}
                            <div className="flex justify-center md:justify-start">
                                <img
                                    src={flogo}
                                    alt="Logo"
                                    className="w-[120px] object-contain"
                                />
                            </div>

                            {/* Menu */}
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-semibold mb-4">Главная</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>Это мы</li>
                                    <li>Кто мы</li>
                                    <li>Почему мы?</li>
                                    <li>Остались вопросы</li>
                                    <li>Контакты</li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-semibold mb-4">Контакты</h3>
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
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-semibold mb-4">Следите за нами</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>📘 truck_service_officlaL</li>
                                    <li>📷 truck_service_officlaL</li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom line */}
                        <div className="border-t border-gray-700 mt-8 pt-4 text-gray-400 text-xs text-center md:text-left">
                            Copyright © Truck Services 2022. All rights reserved.
                        </div>
                    </div>
                </footer>
            </section>

        </>
    );
};

export default LandingPage;