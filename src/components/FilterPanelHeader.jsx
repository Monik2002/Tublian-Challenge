import { useState, useEffect } from "react";

const FilterPanelHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("fullTime");
  const [showFilterText, setShowFilterText] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowFilterText(window.innerWidth > 1200);
      setIsSmallScreen(window.innerWidth < 391);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize on initial render
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.25rem] text-base-500-dark-secondary font-text-xsm-font-bold">
      <div className="w-[63.5rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.5rem] max-w-full">
          {isSmallScreen ? (
            ""
          ) : (
            <div className="flex-1 rounded-3xs bg-base-50-dark box-border overflow-hidden flex flex-row items-start justify-start py-[0.625rem] px-[1rem] gap-[1rem] min-w-[31.5rem] max-w-full border-[1px] border-solid border-base-100-dark mq725:min-w-full sm:min-w-[31.5rem]">
              <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative"
                  alt=""
                  src="/vuesaxlinearsearchnormal.svg"
                />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                className="flex-1 [border:none] [outline:none] font-medium font-text-xsm-font-bold text-[1.25rem] bg-[transparent] h-[2rem] relative leading-[2rem] text-base-500-dark-secondary text-left inline-block p-0 sm:text-[1rem] sm:leading-[1.625rem] max-w-[calc(100% - 4rem)] flex flex-column flex-wrap"
                placeholder="Try Searching “full time backend developer”"
              />
            </div>
          )}
          <div className="w-[14.3rem] rounded-3xs bg-base-50-dark box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.125rem] px-[0.25rem] text-base-900-dark border-[1px] border-solid border-base-100-dark">
            <button
              className={`rounded-3xs py-[0.5rem] px-[0.812rem] bg-base-100-dark cursor-pointer text-white`}
              style={{
                background:
                  selectedOption === "fullTime"
                    ? "linear-gradient(109.15deg, #FBDA61 0%, #FF5ACD 86.08%)"
                    : "",
              }}
              onClick={() => handleOptionClick("fullTime")}
            >
              <b className="relative leading-[2rem] inline-block min-w-[5.25rem] z-[1] text-lg">
                Full Time
              </b>
            </button>
            <button
              className={`rounded-3xs py-[0.5rem] px-[0.812rem] bg-base-100-dark cursor-pointer text-white`}
              style={{
                background:
                  selectedOption === "freelance"
                    ? "linear-gradient(109.15deg, #FBDA61 0%, #FF5ACD 86.08%)"
                    : "",
              }}
              onClick={() => handleOptionClick("freelance")}
            >
              <b className="relative leading-[2rem] inline-block min-w-[5.25rem] z-[1] text-lg">
                Freelance
              </b>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-[1rem] text-base-900-dark mq975:flex-wrap">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[4.5rem] max-w-full mq450:gap-[1.125rem] mq975:gap-[2.25rem]">
            <nav className="m-0 flex-1 flex flex-row flex-wrap items-start justify-start gap-[0.75rem] max-w-full whitespace-nowrap">
              {/* <button
                className="cursor-pointer py-[0.375rem] px-[1.437rem] bg-[transparent] rounded-3xs box-border flex items-start justify-start border-[1px] border-solid border-custom hover:bg-goldenrod-200 hover:box-border"
                // style={{
                //   background:
                //     "linear-gradient(109.15deg, rgb(251, 218, 97) 0%, rgb(255, 90, 205) 86.08%)",
                // }}
              >
                <div className="relative text-[1rem] leading-[1.5rem] font-medium font-text-xsm-font-bold text-base-900-dark text-left inline-block min-w-[4.188rem]">
                  Discover
                </div>
              </button> */}
              <div
                className="rounded-3xs"
                style={{
                  // borderImage:
                  //   "linear-gradient(109.15deg, rgb(251, 218, 97) 0%, rgb(255, 90, 205) 86.08%)",
                  // borderImageSlice: "1",
                  background:
                    "linear-gradient(109.15deg, #FBDA61 0%, #FF5ACD 86.08%)",
                  border: "1px solid transparent",
                }}
              >
                <button className="cursor-pointer py-[0.375rem] px-[1.437rem] bg-[#1E1E1E] rounded-3xs box-border flex items-start justify-start border-[1px] border-solid">
                  <div className="relative text-[1rem] leading-[1.5rem] font-medium font-text-xsm-font-bold text-base-900-dark text-left inline-block min-w-[4.188rem]">
                    Discover
                  </div>
                </button>
              </div>
              <button className="cursor-pointer py-[0.375rem] px-[1.437rem] bg-base-50-dark rounded-3xs box-border flex items-start justify-start min-w-[8.125rem] whitespace-nowrap border-[1px] border-solid border-base-100-dark hover:bg-dimgray-200 hover:border-dimgray-100 hover:box-border">
                <div className="relative text-[1rem] leading-[1.5rem] font-medium font-text-xsm-font-bold text-base-900-dark text-left">
                  Frontend Developer
                </div>
              </button>
              <button className="cursor-pointer py-[0.375rem] px-[1.437rem] bg-base-50-dark rounded-3xs box-border flex items-start justify-start min-w-[8.125rem] whitespace-nowrap border-[1px] border-solid border-base-100-dark hover:bg-dimgray-200 hover:border-dimgray-100 hover:box-border">
                <div className="relative text-[1rem] leading-[1.5rem] font-medium font-text-xsm-font-bold text-base-900-dark text-left">
                  Backend Developer
                </div>
              </button>
              <button className="cursor-pointer py-[0.375rem] px-[1.437rem] bg-base-50-dark rounded-3xs box-border flex items-start justify-start min-w-[8.125rem] whitespace-nowrap border-[1px] border-solid border-base-100-dark hover:bg-dimgray-200 hover:border-dimgray-100 hover:box-border">
                <div className="relative text-[1rem] leading-[1.5rem] font-medium font-text-xsm-font-bold text-base-900-dark text-left">
                  Software Developer
                </div>
              </button>
            </nav>

            {showFilterText ? (
              <button className="rounded-3xs flex flex-row items-start justify-start py-[0.375rem] px-[1.437rem] gap-[0.5rem] border-[1px] border-solid border-base-100-dark bg-transparent cursor-pointer">
                <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.125rem] h-[1.125rem] relative"
                    alt=""
                    src="/vuesaxlinearfilter.svg"
                  />
                </div>
                <div className="relative leading-[1.5rem] font-medium inline-block min-w-[3rem] text-white md:hidden md:inline-block lg:block text-[1rem]">
                  Filters
                </div>
              </button>
            ) : (
              <button className="cursor-pointer py-[0.437rem] px-[1.437rem] bg-[transparent] w-[4.125rem] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-base-100-dark">
                <img
                  className="h-[1.125rem] w-[1.125rem] relative"
                  alt=""
                  src="/vuesaxlinearfilter.svg"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPanelHeader;
