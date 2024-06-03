import heroImage from '../assets/heroImage.png'
import iphone_hero_1 from '../assets/iphone_hero_1.png'
import iphone_hero_2 from '../assets/iphone_hero_2.png'
import ellipses from '../assets/ellipses.png'

const Hero = () => {
  return (

    <div className="w-full flex justify-center p-4">
      <div className="flex w-4/5">
        <div className="flex flex-col w-1/2">
          <h1 className="text-45xl  capitalize font-roboto font-[100px] leading-[64px]">Make the Best <br /> Financial Decisions</h1>
          <p className='font-roboto mt-[-20px] text-[18px] capitalize text-gray-100'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br />
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex gap-10 font-roboto">
            <div className="flex gap-2 justify-center items-center px-5 py-1 w-32 bg-black text-white rounded-md">
              <p className="cursor-pointer font-bold">Get Started</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="8" viewBox="0 0 25 8" fill="none">
                <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z" fill="white" />
              </svg>
            </div>
            <div className="flex gap-2 w-36 justify-center items-center">
              <div className="border border-solid border-black rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 13" fill="none">
                  <path d="M1 11.0809V1.91907C1 1.52282 1.43894 1.28402 1.77163 1.49929L8.85124 6.08021C9.15574 6.27724 9.15574 6.72276 8.85124 6.91978L1.77163 11.5007C1.43894 11.716 1 11.4772 1 11.0809Z" fill="black" stroke="black" />
                </svg>
              </div>
              <p className='font-bold'>Watch Video</p>
            </div>
          </div>

          <div className='mt-6'>
            <img
              src={heroImage}
              alt="heroImage"
              loading="lazy" />
          </div>
        </div>

        <div className="relative">
          <img className="absolute top-[-120px] left-[-70px]  h-[900px] w-[600px] z-30 object-contain"
            src={iphone_hero_1} alt="iphone1" />

          <img className="absolute top-[-36px] left-[56px]  h-[900px] w-[600px] z-20 object-contain"
            src={iphone_hero_2} alt="iphone2" />

          <img className="absolute top-[48px] left-[182px]  h-[900px] w-[600px] z-10 object-contain"
            src={iphone_hero_1} alt="iphone1" />

          <img className="absolute z-0 top-[-45px] left-[15px]"
            src={ellipses} alt="ellipses" />
        </div>

      </div>
    </div>
  );
};

export default Hero;
