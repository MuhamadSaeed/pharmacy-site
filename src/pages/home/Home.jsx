import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "./home.css"

import products from "../../Products";
// imgss
import H1 from '../../assets/ho1.webp'
import H2 from '../../assets/ho2.webp'
import sw1 from '../../assets/sw1.webp'
import sw2 from '../../assets/sw2.webp'
import sw3 from '../../assets/sw3.webp'

import { useEffect } from "react";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";  

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const testi = [
  { id: 1, name: "أحمد", opin: "منذ أن استخدمت التطبيق لأول مرة، أصبح من التطبيقات الأساسية التي لا يمكن الاستغناء عنها. أنا معجب جدًا بالخدمة الممتازة، وسرعة التوصيل، وإمكانية تخصيص الطلب. إنه يوفر الكثير من الوقت!" },
  { id: 2, name: "علي", opin: "منذ أن استخدمت التطبيق لأول مرة، أصبح من التطبيقات الأساسية التي لا يمكن الاستغناء عنها. أنا معجب جدًا بالخدمة الممتازة، وسرعة التوصيل، وإمكانية تخصيص الطلب. إنه يوفر الكثير من الوقت!" },
  { id: 3, name: "خالد", opin: "منذ أن استخدمت التطبيق لأول مرة، أصبح من التطبيقات الأساسية التي لا يمكن الاستغناء عنها. أنا معجب جدًا بالخدمة الممتازة، وسرعة التوصيل، وإمكانية تخصيص الطلب. إنه يوفر الكثير من الوقت!" },
  { id: 11, name: "يوسف", opin: "منذ أن استخدمت التطبيق لأول مرة، أصبح من التطبيقات الأساسية التي لا يمكن الاستغناء عنها. أنا معجب جدًا بالخدمة الممتازة، وسرعة التوصيل، وإمكانية تخصيص الطلب. إنه يوفر الكثير من الوقت!" },
  { id: 1111, name: "محمد", opin: "منذ أن استخدمت التطبيق لأول مرة، أصبح من التطبيقات الأساسية التي لا يمكن الاستغناء عنها. أنا معجب جدًا بالخدمة الممتازة، وسرعة التوصيل، وإمكانية تخصيص الطلب. إنه يوفر الكثير من الوقت!" },
];

function Home() {
  const { addToCart } = useContext(CartContext);  

  const pics = [sw1, sw2, sw3 ];

  const categories = [...new Set(products.map((product) => {
    console.log(product);    
    return product.category; 
  }))];
  
  console.log(categories);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

 
  return (
    <section>
{/* 
    <div className="text-center m-3 p-3 rounded" >
    All medications are dispensed from pharmacies licensed by the Ministry of Health and require a prescription from a specialized doctor.
    </div> */}
    <div className="textAl text-center m-3 p-3 rounded" >
      جميع الادوية يتم صرفها من صيدليات مرخصة من وزارة الصحة و بوجود وصفة طبية من طبيب متخصص
    </div>

    <div>
    <div className="container my-4">
      <div className="row g-4">
        <div className="col-md-3 d-none d-md-block">
          <div className="mb-3">
            <img src={H1} alt="" className="img-fluid rounded" />
          </div>
          <div>
            <img src={H2} alt="" className="img-fluid rounded" />
          </div>
        </div>

        <div className="col-md-9">
          <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 4000 }}
              loop={true}
              className="swiper-container"
            >
              {pics.map((pic, index) => (
                <SwiperSlide key={index}>
                  <img src={pic} className="img-fluid " />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
    </div>

    <div className="container my-5">
      {categories.map((category, index) => (
          <div key={index} className="category-section mb-5">
            <Link  to={`/category/${category}`} className="btn btncolr">عرض الكل</Link>
          <div className="d-flex justify-content-between align-items-center mb-3 arabic-text">
            <h3 className="fw-bold arabic-text">{category}</h3>
          </div>
            {/* this to remember me to make a component for swiper,, later  */}
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={3}
            spaceBetween={10}
            loop={false}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              300: { slidesPerView: 1 },
            }}
          >
            {products.filter(product => product.category === category).map(product => (
                <SwiperSlide key={product.id}>
                  <div className="card">
                    <Link to={`/product/${product.id}`} style={{margin: "auto", padding: "20px"}}>
                      <img src={product.image} style={{maxHeight: "250px", maxWidth: "250px"}} className="card-img-top" alt={product.name} />
                    </Link>
                    <div className="card-body text-center">
                      {/* <p className="card-text">{product.name}</p> */}
                      <p className="card-text fs-4">{product.name}</p>
                      <h5 className="">{product.price} جنيه</h5>
                      <button className="btn btncolr m-2" onClick={() => addToCart(product)}>أضافة الى السلة</button>
                        <Link to={`/product/${product.id}`} className="btn btncolr">عرض التفاصيل</Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      ))}
    </div>

    <div className="container mt-5">
      <h2 className="mt-5 mb-3 text-center arabic-text">ما رأي عملاء عن خدماتنا</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation
        loop={true}
        modules={[Navigation]}
        breakpoints={{
          300: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testi.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="card py-5 px-3 shadow-sm ">
              <h5 className="text-center mb-4 fs-2">{product.name}</h5>
              <p className=" arabic-text">{product.opin}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
</section>
  )
}

export default Home