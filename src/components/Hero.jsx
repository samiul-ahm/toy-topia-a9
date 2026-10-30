import img1 from "../assets/bluecopy1.jpg";
import img2 from "../assets/duckcopy.jpg";
import img3 from "../assets/woodycopy1.jpg";

const Hero = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          alt="Tailwind CSS slide example"
          src={img1}
          className="w-full h-96 rounded-2xl "
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          alt="Tailwind CSS slide example"
          src={img2}
          className="w-full h-96 rounded-2xl "
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          alt="Tailwind CSS slide example"
          src={img3}
          className="w-full h-96 rounded-2xl "
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
