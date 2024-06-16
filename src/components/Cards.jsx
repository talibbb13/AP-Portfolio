import BrandLogo from "./BrandLogo";
import CreateButton from "./CreateButton";
import CreateCard from "./CreateCard";

function Cards() {
  return (
    <div className="min-h-screen px-14 flex justify-between flex-wrap">
      <CreateCard
        centerImg={<BrandLogo width="5rem" textColor={"#CDEA68"} />}
        width="w-[45vw]"
        bgColor={"bg-[#014D43]"}
        textColor={"#CDEA68"}
        sideBtn={
          <CreateButton
            children={`© 2019-2020`}
            textColor="text-[#CDEA68]"
            className="border-[#CDEA68]"
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
        width="w-[23vw]"
        bgColor={"bg-[#212121]"}
        sideBtn={<CreateButton children={`RATING 5.5 ON CLUTCH`} />}
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
        bgColor={"bg-[#212121]"}
        sideBtn={<CreateButton children={`BUSINESS BOOTCAMP ALUMNI`} />}
      />
    </div>
  );
}

export default Cards;
