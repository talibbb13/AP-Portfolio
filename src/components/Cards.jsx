import BrandLogo from "./BrandLogo";
import CreateButton from "./CreateButton";
import CreateCard from "./CreateCard";

function Cards() {
  return (
    <div className="px-4 sm:px-8 md:px-14 flex justify-between flex-wrap py-7 gap-4">
      <CreateCard
        centerImg={<BrandLogo width="5rem" textColor={"#CDEA68"} />}
        width="w-full sm:w-[45vw] md:w-[30vw]"
        bgColor={"bg-[#014D43]"}
        textColor={"#CDEA68"}
        sideBtn={
          <CreateButton
            children={`© 2019-2020`}
            textColor="text-[#CDEA68]"
            className="border-[#CDEA68] hidden sm:block"
            px="px-[.3rem]"
            py="py-0"
            fontSize="text-[.5rem] sm:text-[1vw]"
          />
        }
      />

      <CreateCard
        centerImg={
          <div className="h-[2.5rem]">
            <img
              className="h-full w-full"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
          </div>
        }
        width="w-full sm:w-[45vw] md:w-[20vw]"
        bgColor={"bg-[#212121]"}
        sideBtn={
          <CreateButton
            children={`RATING 5.5 ON CLUTCH`}
            className="hidden sm:block"
            px="px-[.3rem]"
            py="py-0"
            fontSize="text-[.5rem] sm:text-[1vw]"
          />
        }
      />

      <CreateCard
        centerImg={
          <div className="h-[3.5rem]">
            <img
              className="h-full w-full"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
          </div>
        }
        width="w-full sm:w-[45vw] md:w-[20vw]"
        bgColor={"bg-[#212121]"}
        sideBtn={
          <CreateButton
            children={`BUSINESS BOOTCAMP ALUMNI`}
            className="hidden sm:block"
            px="px-[.3rem]"
            py="py-0"
            fontSize="text-[.5rem] sm:text-[1vw]"
          />
        }
      />
    </div>
  );
}

export default Cards;
