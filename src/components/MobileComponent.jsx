import { useState } from "react";

const MobileComponent = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] max-w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
        <div className="self-stretch flex flex-row items-start justify-end">
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] gap-[0.5rem]">
            <img
              className="h-[2.5rem] w-[2.5rem] relative min-h-[2.5rem]"
              loading="lazy"
              alt=""
              src="/typemobilestatedefault.svg"
              onClick={toggleSearchBar}
            />
            {/* {isSearchBarOpen && (
              <div className="flex-1 rounded-3xs bg-base-50-dark box-border overflow-hidden flex flex-row items-start justify-start py-[0.625rem] px-[1rem] gap-[1rem] min-w-[31.5rem] max-w-full border-[1px] border-solid border-base-100-dark mq725:min-w-full sm:min-w-[31.5rem]">
                <input
                  type="text"
                  className="flex-1 [border:none] [outline:none] font-medium font-text-xsm-font-bold text-[1.25rem] bg-[transparent] h-[2rem] relative leading-[2rem] text-base-500-dark-secondary text-left inline-block p-0 sm:text-[1rem] sm:leading-[1.625rem] max-w-[calc(100% - 4rem)] w-[80%] sm:w-auto" // Adjusted width
                  placeholder="Try Searching “full time backend developer”"
                />
              </div>
            )} */}
            <img
              className="h-[2.5rem] w-[2.5rem] relative min-h-[2.5rem]"
              loading="lazy"
              alt=""
              src="/typemobilestatedefault-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileComponent;
