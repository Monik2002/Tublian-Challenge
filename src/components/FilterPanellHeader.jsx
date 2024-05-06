import FrameComponent2 from "./FilterPanelHeaderContent";
import PortfolioContainer from "./PortfolioContainer";
import Notapplicable from "./Notapplicable";

const FilterPanellHeader = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.25rem] text-base-900-dark font-text-xsm-font-bold">
      <div className="w-[63.5rem] rounded-xl bg-base-50-dark box-border overflow-hidden shrink-0 flex flex-row items-start justify-between py-[1.125rem] pr-[1.312rem] pl-[1.25rem] max-w-full gap-[1.25rem] border-[1px] border-solid border-base-100-dark mq975:flex-wrap mq975:justify-center self-stretch mq725:flex-wrap">
        <div className="w-[40.5rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
          <FrameComponent2
            uSDCurrency="/frame-448@2x.png"
            newJerseyUSA="New jersey, USA"
            uSD="$250,000 (USD)"
          />
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] text-[0.75rem] mq725:flex-wrap">
            <PortfolioContainer />
            <Notapplicable />
          </div>
        </div>
        <button className="rounded-11xl bg-primary-gold-300 flex flex-row items-start justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] text-[1rem] text-base-900-light cursor-pointer">
          <div className="h-[1.5rem] w-[1.5rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-base-900-light" />
          <div className="h-[1.5rem] w-[1.5rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-base-900-light" />
          <div className="relative leading-[1.5rem] font-medium inline-block min-w-[3.625rem]">
            Hire Me
          </div>
          <div className="h-[1.5rem] w-[1.5rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-base-900-light" />
        </button>
      </div>
    </section>
  );
};

export default FilterPanellHeader;
