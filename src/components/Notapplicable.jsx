import { useState, useEffect } from "react";

const Notapplicable = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 490);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="flex-1 rounded-3xs bg-base-100-dark box-border overflow-hidden flex flex-col items-start justify-start py-[0.75rem] px-[1.187rem] gap-[0.687rem] min-w-[14.375rem] text-left text-[0.75rem] text-base-900-dark font-text-xsm-font-bold border-[1px] border-solid border-base-200-dark">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.437rem]">
            <div className="w-[3.563rem] rounded-xl box-border flex flex-row items-start justify-start py-[0.125rem] px-[0.687rem] border-[1px] border-solid border-base-900-dark">
              <div className="relative leading-[1rem] font-medium inline-block min-w-[2.063rem]">
                Other
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] text-[1.125rem]">
              <b className="relative leading-[1.875rem] inline-block min-w-[6.688rem]">
                Portfolio
              </b>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.25rem] text-base-700-dark-tertiary">
            <div className="relative leading-[1rem] inline-block min-w-[5.125rem]">
              Last Updated:
            </div>
            <b className="relative leading-[1rem] inline-block text-base-900-dark min-w-[6.25rem]">
              Tue, Dec 13, 2022
            </b>
          </div>
        </div>
      ) : (
        <div className="flex-1 rounded-3xs bg-base-100-dark box-border overflow-hidden flex flex-col items-start justify-start py-[0.75rem] px-[1.25rem] gap-[2.937rem] min-w-[18.688rem] text-left text-[0.75rem] text-base-700-dark-tertiary font-text-xsm-font-bold border-[1px] border-solid border-base-200-dark">
          <div className="flex flex-col items-start justify-start gap-[0.437rem] text-base-900-dark">
            <div className="w-[3.563rem] rounded-xl box-border flex flex-row items-start justify-start py-[0.125rem] px-[0.687rem] border-[1px] border-solid border-base-900-dark">
              <div className="relative leading-[1rem] font-medium inline-block min-w-[2.063rem]">
                Other
              </div>
            </div>
            <b className="relative text-[1.125rem] leading-[1.875rem] inline-block min-w-[4.75rem]">
              Portfolio
            </b>
          </div>
          {/* <div className="self-stretch h-[0rem] relative leading-[1rem] hidden">
            I am updating my resume, as completing my projects.
          </div> */}
          <div className="flex flex-row items-start justify-start gap-[0.25rem]">
            <div className="relative leading-[1rem] inline-block min-w-[5.125rem]">
              Last Updated:
            </div>
            <b className="relative leading-[1rem] inline-block text-base-900-dark min-w-[6.25rem]">
              Tue, Dec 13, 2022
            </b>
          </div>
        </div>
      )}
    </>
  );
};
// return (
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
//     <div className="flex-1 rounded-3xs bg-base-100-dark box-border overflow-hidden flex flex-col items-start justify-start py-[0.75rem] px-[1.187rem] gap-[0.687rem] min-w-[14.375rem] text-left text-[0.75rem] text-base-900-dark font-text-xsm-font-bold border-[1px] border-solid border-base-200-dark">
//       <div className="self-stretch flex flex-col items-start justify-start gap-[0.437rem]">
//         <div className="w-[3.563rem] rounded-xl box-border flex flex-row items-start justify-start py-[0.125rem] px-[0.687rem] border-[1px] border-solid border-base-900-dark">
//           <div className="relative leading-[1rem] font-medium inline-block min-w-[2.063rem]">
//             Other
//           </div>
//         </div>
//         <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] text-[1.125rem]">
//           <b className="relative leading-[1.875rem] inline-block min-w-[6.688rem]">
//             Portfolio
//           </b>
//         </div>

//       </div>
//       <div className="self-stretch h-[0rem] relative leading-[1rem] hidden">
//             I am updating my resume, as completing my projects.
//           </div>
//       <div className="flex flex-row items-start justify-start gap-[0.25rem] text-base-700-dark-tertiary">
//         <div className="relative leading-[1rem] inline-block min-w-[5.125rem]">
//           Last Updated:
//         </div>
//         <b className="relative leading-[1rem] inline-block text-base-900-dark min-w-[6.25rem]">
//           Tue, Dec 13, 2022
//         </b>
//       </div>
//     </div>
//   );
// };

export default Notapplicable;
