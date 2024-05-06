import FrameComponent2 from "./FilterPanelHeaderContent";
import PortfolioContainer from "./PortfolioContainer";
import Notapplicable from "./Notapplicable";

const FilterPanelHeaderComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1rem] text-base-900-light font-text-xsm-font-bold">
      <div className="w-[63.5rem] rounded-xl bg-base-50-dark box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[1.125rem] px-[1.187rem] gap-[1.5rem] max-w-full border-[1px] border-solid border-base-100-dark">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq725:flex-wrap">
          <FrameComponent2
            uSDCurrency="/frame-448-1@2x.png"
            newJerseyUSA="Lagos, Nigeria"
            uSD="$1000-3000 (USD)"
            propWidth="21.125rem"
            propFlex="1"
            propMinWidth="10.75rem"
            propAlignSelf="stretch"
            propMinWidth1="6.813rem"
            propDisplay="unset"
            propMinWidth2="unset"
          />
          <button className="rounded-11xl bg-primary-gold-300 flex flex-row items-start justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] text-[1rem] text-base-900-light cursor-pointer">
            <div className="h-[1.5rem] w-[1.5rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-base-900-light" />
            <div className="h-[1.5rem] w-[1.5rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-base-900-light" />
            <div className="relative leading-[1.5rem] font-medium inline-block min-w-[3.625rem]">
              Hire Me
            </div>
            <div className="h-[1.5rem] w-[1.5rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-base-900-light" />
          </button>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.5rem] text-[1.125rem] text-base-900-dark">
          <PortfolioContainer propMinWidth="15rem" />
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-row items-start justify-start pt-[6.625rem] px-[1.187rem] pb-[0.75rem] box-border bg-[url('/search-icon@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[15rem]">
            <b className="relative leading-[1.875rem] inline-block min-w-[7.75rem]">
              designcode.io
            </b>
          </div>
          <Notapplicable propMinWidth="15rem" />
        </div>
      </div>
    </section>
  );
};

export default FilterPanelHeaderComponent;
