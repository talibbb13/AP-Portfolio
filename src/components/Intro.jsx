import { RxArrowTopRight } from "react-icons/rx";
import CreateButton from "./CreateButton";
import CreateStringBand from "./CreateStringBand";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

function Intro() {
  const socialMedia = [
    { icon: <TbBrandGithubFilled />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <TiSocialLinkedin />, link: "#" },
  ];
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="main bg-[#CDEA68] text-black px-4 md:px-14 rounded-lg min-h-screen relative z-50"
    >
      <div className="min-h-screen py-10 text-lg md:text-2xl">
        <h1 className="text-3xl md:text-5xl md:pr-[10vw] py-12 md:py-24 text-[#212121] tracking-tight leading-tight md:leading-none font-semibold">
          Aspiring Frontend Developer <br /> Bringing Your Digital Ideas to
          Reality
        </h1>
        <div className="pt-5 md:pt-10 pb-10 md:pb-20 text-[#40452D] flex flex-col md:flex-row justify-between">
          <h6 className="w-full md:w-[30vw] font-normal">
            What you can expect:
          </h6>
          <div className="w-full md:w-[30vw] md:mr-12 font-medium mt-4 md:mt-0">
            <p>
              Innovative Frontend Solutions: I create responsive and visually
              appealing web applications using the latest technologies such as
              HTML, CSS, JavaScript, and modern frameworks like React. Whether
              it's a static landing page or a dynamic web app, I ensure the
              final product is both functional and aesthetically pleasing.
            </p>
            <br />
            <p>
              Cutting-Edge Techniques: Leveraging tools like Tailwind CSS,
              Bootstrap, and GSAP, I bring a unique touch to each project. My
              expertise in Context API, Redux Toolkit, and Appwrite allows me to
              manage state efficiently and integrate backend services
              seamlessly. <br /> Interactive and Engaging Designs: With a focus
              on user experience, I use GSAP and Locomotive Scroll to create
              smooth animations and interactive elements that captivate users
              and keep them engaged.
            </p>
          </div>
          <div className="flex flex-col gap-3 self-center md:self-start justify-self-end font-normal mt-4 md:mt-0">
            <h6>SM:</h6>
            {socialMedia.map((sm, ind) => (
              <a
                target="_blank"
                key={ind}
                href={sm.link}
                className="cover text-black bg-white rounded-full flex justify-center items-center h-10 w-10 hover:opacity-70"
              >
                <div className="text-2xl">{sm.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <CreateStringBand color="black" />

      <div className="mt-[10vw] md:mt-[7vw] text-3xl md:text-6xl flex flex-col md:flex-row justify-between pb-12">
        <div className="mb-6 md:mb-0">
          <h3 className="pb-4 md:pb-7 text-[#3a3f27] font-medium">Approach:</h3>
          <a href="https://github.com/talibbb13/" target="_blank">
            {" "}
            <CreateButton
              px="px-[1rem] md:px-[2rem]"
              py="py-[0.5rem] md:py-[1rem]"
              bgColor="bg-[#212121]"
              className="border-none"
              textColor="text-white"
              icon={<RxArrowTopRight className="text-[#3a3f27]" />}
              children={"Discover My Process"}
            ></CreateButton>
          </a>
        </div>
        <div>
          <img
            className="mt-5 md:mt-0 rounded-lg w-full md:w-auto h-auto md:min-h-[80vh]"
            src="https://i.imgur.com/je6DX73.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
