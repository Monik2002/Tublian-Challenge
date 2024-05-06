import { useMemo } from "react";

const FilterPanelHeaderContent = ({
  uSDCurrency,
  newJerseyUSA,
  uSD,
  propWidth,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propMinWidth1,
  propDisplay,
  propMinWidth2,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const newJerseyUSAStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const uSDStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth2,
    };
  }, [propDisplay, propMinWidth2]);

  return (
    <div
      className="flex flex-row items-start justify-start gap-[0.875rem] max-w-full text-left text-[1.25rem] text-base-900-dark font-text-xsm-font-bold mq450:flex-wrap"
      style={frameDivStyle}
    >
      <img
        className="h-[3.75rem] w-[3.75rem] relative rounded-32xl overflow-hidden shrink-0 object-contain"
        loading="lazy"
        alt=""
        src={uSDCurrency}
      />
      <div
        className="flex flex-col items-start justify-start gap-[0.375rem]"
        style={frameDiv1Style}
      >
        <b className="relative leading-[2rem] inline-block min-w-[5.688rem] mq450:text-[1rem] mq450:leading-[1.625rem]">
          John Doe
        </b>
        <div
          className="flex flex-row items-start justify-start gap-[0.25rem] text-[1rem] text-base-500-dark-secondary"
          style={frameDiv2Style}
        >
          <div className="flex flex-row items-start justify-start gap-[0.25rem]">
            <div
              className="relative leading-[1.5rem] font-medium inline-block min-w-[7.688rem]"
              style={newJerseyUSAStyle}
            >
              {newJerseyUSA}
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
              <div className="w-[0.25rem] h-[0.25rem] relative rounded-[50%] bg-base-500-dark-secondary" />
            </div>
          </div>
          <div
            className="relative leading-[1.5rem] font-medium inline-block min-w-[7.625rem]"
            style={uSDStyle}
          >
            {uSD}
          </div>
        </div>
        <div className="rounded-xl flex flex-row items-start justify-start py-[0.125rem] px-[0.562rem] whitespace-nowrap text-[0.875rem] border-[1px] border-solid border-base-900-dark">
          <b className="relative leading-[1.25rem]">Frontend developer</b>
        </div>
      </div>
    </div>
  );
};

export default FilterPanelHeaderContent;
