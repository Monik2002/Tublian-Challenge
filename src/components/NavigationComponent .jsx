import { useState, useEffect } from "react";

const NavigationComponent = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard"); // State to track selected item
  const [NavigationText, setNavigationText] = useState(true);
  const [isWideScreen, setIsWideScreen] = useState(true);

  const handleItemClick = (item) => {
    setSelectedItem(item); // Update selected item on click
  };

  useEffect(() => {
    const handleResize = () => {
      setNavigationText(window.innerWidth > 1024);
      setIsWideScreen(window.innerWidth > 1024);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize on initial render
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Check if screen width is less than or equal to 1024px

  return (
    <div
      className={`${
        isWideScreen ? "self-stretch" : ""
      } flex flex-col items-start justify-start pt-[3.75rem] px-[0rem] pb-[0rem] relative gap-[31rem] text-left text-[1rem] text-base-500-dark-secondary font-text-xsm-font-bold mq975:pt-[2.438rem] mq975:box-border`}
      style={{
        paddingTop: "60px",
      }}
    >
      <div
        className={`${
          isWideScreen ? "self-stretch" : ""
        } flex flex-col items-start justify-start gap-[0.25rem]`}
      >
        <button
          className={`${
            isWideScreen ? "self-stretch" : ""
          } rounded-3xs flex flex-row items-start justify-start py-[0.375rem] px-[0.875rem] gap-[0.5rem] text-base-900-dark text-lg cursor-pointer ${
            selectedItem === "Dashboard" ? "bg-base-100-dark" : "bg-transparent"
          }`}
          onClick={() => handleItemClick("Dashboard")}
        >
          <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.125rem] h-[1.125rem] relative"
              alt=""
              src="/vuesaxlinearelement3.svg"
            />
          </div>
          {NavigationText && (
            <div className="relative leading-[1.5rem] font-medium inline-block min-w-[5.25rem] ">
              Dashboard
            </div>
          )}
        </button>
        <button
          className={`${
            isWideScreen ? "self-stretch" : ""
          } rounded-3xs flex flex-row items-start justify-start py-[0.375rem] px-[0.875rem] gap-[0.5rem] text-base-900-dark text-lg cursor-pointer ${
            selectedItem === "Monetization"
              ? "bg-base-100-dark"
              : "bg-transparent"
          }`}
          onClick={() => handleItemClick("Monetization")}
        >
          <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.125rem] h-[1.125rem] relative"
              alt=""
              src="/vuesaxlinearmoney2.svg"
            />
          </div>
          {NavigationText && (
            <div className="relative leading-[1.5rem] font-medium inline-block min-w-[5.25rem]">
              Monetization
            </div>
          )}
        </button>
        <button
          className={`${
            isWideScreen ? "self-stretch" : ""
          } rounded-3xs flex flex-row items-start justify-start py-[0.375rem] px-[0.875rem] gap-[0.5rem] text-base-900-dark text-lg cursor-pointer ${
            selectedItem === "Notifications"
              ? "bg-base-100-dark"
              : "bg-transparent"
          }`}
          onClick={() => handleItemClick("Notifications")}
        >
          <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.125rem] h-[1.125rem] relative"
              alt=""
              src="/vuesaxlinearnotification.svg"
            />
          </div>
          {NavigationText && (
            <div className="relative leading-[1.5rem] font-medium inline-block min-w-[5.25rem]">
              Notifications
            </div>
          )}
        </button>
      </div>
      <div
        className={`${
          isWideScreen ? "self-stretch" : ""
        } flex flex-col items-start justify-start gap-[0.25rem]`}
      >
        <button
          className={`${
            isWideScreen ? "self-stretch" : ""
          } rounded-3xs flex flex-row items-start justify-start py-[0.375rem] px-[0.875rem] gap-[0.5rem] bg-transparent text-base-900-dark text-lg cursor-pointer`}
        >
          <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.125rem] h-[1.125rem] relative"
              loading="lazy"
              alt=""
              src="/vuesaxlinearsetting2.svg"
            />
          </div>
          {NavigationText && (
            <div className="relative leading-[1.5rem] font-medium inline-block min-w-[4.063rem] text-white">
              Settings
            </div>
          )}
        </button>
        <button
          className={`${
            isWideScreen ? "self-stretch" : ""
          } rounded-3xs flex flex-row items-start justify-start py-[0.375rem] px-[0.875rem] gap-[0.5rem] bg-transparent text-lg cursor-pointer`}
        >
          <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.125rem] h-[1.125rem] relative"
              loading="lazy"
              alt=""
              src="/vuesaxlinearlogout.svg"
            />
          </div>
          {NavigationText && (
            <div className="relative leading-[1.5rem] font-medium inline-block min-w-[3.75rem] text-white">
              Log out
            </div>
          )}
        </button>
      </div>
      <img
        className="w-[2rem] h-[2rem] absolute !m-[0] top-[0rem] right-[0rem] rounded-6xl overflow-hidden shrink-0 object-contain border-transparent transition duration-300 ease-in-out"
        style={{
          background: "linear-gradient(109.15deg, #FBDA61 0%, #FF5ACD 86.08%)",
          border: "1px solid transparent",
        }}
        loading="lazy"
        alt=""
        src="/frame-159@2x.png"
      />
    </div>
  );
};

export default NavigationComponent;
