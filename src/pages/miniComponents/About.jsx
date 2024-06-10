

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/myImage.jpg"
              alt="avatar"
              className="bg-white  rotate-[340deg] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
            I'm Mohsin Ali, a Full Stack Developer passionate about creating stellar web experiences. With a knack for both backend architecture and frontend finesse, I specialize in crafting robust, user-friendly applications that propel businesses forward. Let's team up and bring your ideas to life in the digital realm!
            </p>
            <p>
            I have a passion for technology, movies, video games, and cooking. My ability to meet deadlines consistently sets me apart in my work.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
        My commitment to meeting deadlines is unwavering, and I possess the resilience to tackle challenges head-on, no matter how long they persist.
        </p>
      </div>
    </div>
  );
};

export default About;