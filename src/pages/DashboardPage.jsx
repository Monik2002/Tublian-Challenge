import { useEffect, useState } from "react";
import NavigationComponent from "../components/NavigationComponent ";
import FilterPanelHeader from "../components/FilterPanelHeader";
import FilterPanellHeader from "../components/FilterPanellHeader";
import FilterPanelHeaderComponent from "../components/FilterPanelHeaderComponent";
import MobileComponent from "../components/MobileComponent";

const DashboardPage = () => {
  const [selectedOption, setSelectedOption] = useState("high streetcred");
  const [showDropdown, setShowDropdown] = useState(false);
  const [navWidth, setNavWidth] = useState(window.innerWidth < 1025 ? 32 : 200); // Default width based on window size
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setNavWidth(window.innerWidth < 1025 ? 32 : 200); // Update width based on window size
      setIsSmallScreen(window.innerWidth < 391);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = ["high streetcred", "Option 1", "Option 2", "Option 3"];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div className="w-full relative bg-base-900-light overflow-hidden flex flex-row items-start justify-start pt-[0.5rem] px-[1rem] pb-[0rem] box-border gap-[1.5rem] leading-[normal] tracking-[normal] mq975:pl-[1.5rem] mq975:pr-[1.5rem] mq975:box-border mq725:pl-[1.5rem] mq725:pr-[1.5rem] mq725:box-border">
      <div
        className={`${
          window.innerWidth < 1024 ? "w-[1.625rem]" : "w-[12.625rem]"
        } flex flex-col items-start justify-start pt-[1.5rem] px-[0rem] pb-[0rem] box-border mq390:hidden`}
        style={{ width: `${navWidth}px` }}
      >
        <NavigationComponent />
      </div>

      <main
        className={`flex-1 rounded-t-xl rounded-b-none box-border overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[10rem] gap-[1.25rem] text-left text-[1.25rem] text-base-900-dark font-text-xsm-font-bold border-[1px] ${
          isSmallScreen ? "" : "border-solid"
        } border-base-50-dark mq725:pb-[4.25rem] mq725:box-border mq975:max-w-full mq1025:pb-[6.5rem] mq1025:box-border mq725:max-w-full`}
      >
        <div
          className={`${
            isSmallScreen ? "" : "border-solid"
          } self-stretch flex flex-row items-start justify-between pt-[1rem] px-[2.5rem] pb-[0.875rem] gap-[1.25rem] border-b-[1px] border-base-50-dark mq725:flex-wrap z-[99]`}
        >
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <b className="relative leading-[2rem] mq450:text-[1rem] mq450:leading-[1.625rem]">
              Find Developers
            </b>
          </div>
          <div>
            {isSmallScreen && (
              <div className="absolute top-0 right-0">
                <MobileComponent />
              </div>
            )}
          </div>
          <div className="relative" style={{ width: "250px" }}>
            <div
              className="rounded-3xs bg-base-50-dark flex flex-row items-start justify-center py-[0.375rem] px-[1.437rem] gap-[0.375rem] text-[1rem] border-[1px] border-solid border-base-100-dark cursor-pointer whitespace-nowrap"
              onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown visibility
            >
              <div className="relative leading-[1.5rem] font-medium">
                {selectedOption ? `Sort By ${selectedOption}` : "Sort By"}
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.185rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1.125rem] h-[1.125rem] relative"
                  alt=""
                  src="/vuesaxlineararrowdown.svg"
                />
              </div>
            </div>
            {/* Dropdown options */}
            {showDropdown && (
              <div className="absolute top-full left-0 w-full bg-base-50-dark border-[1px] border-solid border-base-100-dark rounded-b-xl z-10">
                {options.map((option) => (
                  <div
                    key={option}
                    className="py-2 px-4 cursor-pointer hover:bg-base-100-dark"
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <FilterPanelHeader />
        <FilterPanellHeader />
        <FilterPanelHeaderComponent />
      </main>
    </div>
  );
};
export default DashboardPage;
