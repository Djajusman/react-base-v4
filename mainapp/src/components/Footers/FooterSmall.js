import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-transparent"
            : "relative") + " pb-10"
        }
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-grey-60 font-semibold text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "} Allrights Reserved
              </div>
            </div>
            <div className="flex justify-end">
              <div className="text-sm text-grey-60 font-semibold pr-28 ">
                Need help? <span className="text-green-50">Call HC Help desk</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
