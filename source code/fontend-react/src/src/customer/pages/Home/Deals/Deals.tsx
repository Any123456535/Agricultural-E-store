import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealCard from "./DealCard";
import { useAppSelector } from "../../../../Redux Toolkit/Store";
import { Deal } from "../../../../types/dealTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate, useNavigation } from 'react-router-dom';

  const sports = [
  { name: "COLD&COUGH", img:"", categoryId: "" },
  { name: "HERBAL & AYURVED", img: "", categoryId: ""  },
  { name: "DIGESTIVE HEALTH", img: "", categoryId: ""  }, 
  { name: "HOMEOPATHIC", img: "", categoryId: ""  },
  { name: "WORKOUT SUPPLIMENTS", img: "https://th.bing.com/th/id/OIP.HpT8IwCvgZOoY71aFeIDtQHaDt?w=327&h=174&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "protein_workout_supplements"  },
  { name: "OMEGA3", img: "https://th.bing.com/th/id/OIP.xojNEizp8VGumtwoL7kGIwAAAA?w=259&h=182&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "omega_fish_oils"  },
  { name: "MINERALS", img: "https://th.bing.com/th/id/OIP.dklx-Kbu0tARI4yoNxfskAHaE5?w=253&h=180&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "minerals_antioxidants"  },
  { name: "SKIN CARE", img: "https://th.bing.com/th/id/OIP.hv9TQucO5qs0cH4YtIqf6gHaFj?w=290&h=180&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "skin_care"  },
  { name: "BABY CARE", img: "https://ts2.mm.bing.net/th?id=OIP.3zzmH2xWhTTMWa3h2iFEEgHaE8&pid=15.1", categoryId: "baby_care"  },
  { name: "HAIR CARE", img: "https://th.bing.com/th/id/OIP.nHCZZp9m2oYaRRdUEspYdwHaEQ?w=375&h=181&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "hair_care"  },
   
  ];
    const pros = [
  { name: "COLD&COUGH", img: "https://th.bing.com/th/id/OIP.7SlDRf0dIzuFDenf63fG6QHaEj?w=305&h=188&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "cold_cough_remediescold_cough_remedies" },
  { name: "HERBAL & AYURVED", img: "https://th.bing.com/th/id/OIP.kZcDTlaz4hJQ6mAOxc5V1gHaEJ?w=293&h=180&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "ayurvedic_herbal"  },
  { name: "DIGESTIVE HEALTH", img: "https://th.bing.com/th/id/OIP.xEtwuipqLwditAWJnvrygwHaD6?w=344&h=181&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "digestive_health"  }, 
  { name: "HOMEOPATHIC", img: "https://th.bing.com/th/id/OIP.XBVs6gRkFKaJ6yZnJDKV-gHaE7?w=298&h=199&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7", categoryId: "homeopathic"  },
  { name: "WORKOUT SUPPLIMENTS", img: "https://th.bing.com/th/id/OIP.HpT8IwCvgZOoY71aFeIDtQHaDt?w=327&h=174&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "protein_workout_supplements"  },
  { name: "OMEGA3", img: "https://th.bing.com/th/id/OIP.xojNEizp8VGumtwoL7kGIwAAAA?w=259&h=182&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "omega_fish_oils"  },
  { name: "MINERALS", img: "https://th.bing.com/th/id/OIP.dklx-Kbu0tARI4yoNxfskAHaE5?w=253&h=180&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "minerals_antioxidants"  },
  { name: "SKIN CARE", img: "https://th.bing.com/th/id/OIP.hv9TQucO5qs0cH4YtIqf6gHaFj?w=290&h=180&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "skin_care"  },
  { name: "BABY CARE", img: "https://ts2.mm.bing.net/th?id=OIP.3zzmH2xWhTTMWa3h2iFEEgHaE8&pid=15.1", categoryId: "baby_care"  },
  { name: "HAIR CARE", img: "https://th.bing.com/th/id/OIP.nHCZZp9m2oYaRRdUEspYdwHaEQ?w=375&h=181&c=7&r=0&o=5&cb=iwc2&pid=1.7", categoryId: "hair_care"  },
   
  ];
 
export default function DealSlider() {
   const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate(`/products/${sports[1].name}`);
    navigate(`/products/${pros[1].name}`);
  };
    const {homePage}=useAppSelector(store=>store)
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024, // Large screen
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768, // Tablet
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480, // Mobile
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],

    };
    return (<div>
       
        <div className="py-4 bg-white ml-20 mr-20">
    <h1 className='text-center text-lg lg:text-4xl font-bold text-[#00927c] pb-5 lg:pb-10'>Top Categories</h1>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="px-4"
      >
        {sports.map((sport, index) => (
          <SwiperSlide key={index} className="text-center">
            <img onClick={() => navigate(`/products/${sports[index].categoryId}`)}
              src={sport.img}
              alt={sport.name}
              className="w-full h-[200px] object-cover rounded-lg shadow-sm"
            />
            <p className="mt-2 font-semibold text-black">{sport.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

     <div className="py-4 bg-white ml-20 mr-20">
    <h1 className='text-center text-lg lg:text-4xl font-bold text-[#00927c] pb-5 lg:pb-10'>Most Bought Categories</h1>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="px-4"
      >
        {pros.map((pro, index) => (
          <SwiperSlide key={index} className="text-center">
            <img onClick={() => navigate(`/products/${pros[index].categoryId}`)}
              src={pro.img}
              alt={pro.name}
              className="w-full h-[200px] object-cover rounded-lg shadow-sm"
            />
            <p className="mt-2 font-semibold text-black">{pro.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </div>

    );
}