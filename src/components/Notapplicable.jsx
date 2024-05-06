const Notapplicable = () => {
  return (
    // <div className="flex-1 rounded-3xs bg-base-100-dark box-border overflow-hidden flex flex-col items-start justify-start py-[0.75rem] px-[1.25rem] gap-[2.937rem] min-w-[18.688rem] text-left text-[0.75rem] text-base-700-dark-tertiary font-text-xsm-font-bold border-[1px] border-solid border-base-200-dark">
    //   <div className="flex flex-col items-start justify-start gap-[0.437rem] text-base-900-dark">
    //     <div className="w-[3.563rem] rounded-xl box-border flex flex-row items-start justify-start py-[0.125rem] px-[0.687rem] border-[1px] border-solid border-base-900-dark">
    //       <div className="relative leading-[1rem] font-medium inline-block min-w-[2.063rem]">
    //         Other
    //       </div>
    //     </div>
    //     <b className="relative text-[1.125rem] leading-[1.875rem] inline-block min-w-[4.75rem]">
    //       Portfolio
    //     </b>
    //   </div>
    //   <div className="self-stretch h-[0rem] relative leading-[1rem] hidden">
    //     I am updating my resume, as completing my projects.
    //   </div>
    //   <div className="flex flex-row items-start justify-start gap-[0.25rem]">
    //     <div className="relative leading-[1rem] inline-block min-w-[5.125rem]">
    //       Last Updated:
    //     </div>
    //     <b className="relative leading-[1rem] inline-block text-base-900-dark min-w-[6.25rem]">
    //       Tue, Dec 13, 2022
    //     </b>
    //   </div>
    // </div>
    <div className="flex-1 rounded-3xs bg-base-100-dark box-border overflow-hidden flex flex-col items-start justify-start py-[0.75rem] px-[1rem] gap-[2rem] min-w-[12rem] text-left text-[0.625rem] text-base-700-dark-tertiary font-text-xsm-font-bold border-[1px] border-solid border-base-200-dark">
      <div className="flex flex-col items-start justify-start gap-[0.25rem]">
        <div className="w-[3.563rem] rounded-xl box-border flex flex-row items-start justify-start py-[0.125rem] px-[0.687rem] border-[1px] border-solid border-base-900-dark">
          <div className="relative leading-[0.75rem] font-medium inline-block min-w-[1.5rem]">
            Other
          </div>
        </div>
        <b className="relative text-[0.75rem] leading-[1.5rem] inline-block min-w-[3rem]">
          Portfolio
        </b>
      </div>
      <div className="self-stretch h-[0rem] relative leading-[0.75rem]">
        I am updating my resume, as completing my projects.
      </div>
      <div className="flex flex-row items-start justify-start gap-[0.25rem]">
        <div className="relative leading-[0.75rem] inline-block min-w-[3rem]">
          Last Updated:
        </div>
        <b className="relative leading-[0.75rem] inline-block text-[0.75rem] min-w-[3rem]">
          Tue, Dec 13, 2022
        </b>
      </div>
    </div>
  );
};

export default Notapplicable;
