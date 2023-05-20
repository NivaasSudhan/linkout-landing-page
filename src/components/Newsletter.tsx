import React from "react";

export const NewsLetter = (): JSX.Element => {
  return (
    <div className="bg-[#010101] md:py-32 py-24">
      <div className="layout grid md:grid-cols-3 sm:gap-32 items-center">
        <div className="sm:col-span-2 layout">
          <h2 className="text-3xl font-semibold text-white">
            See Linkout in Action
          </h2>
          <p className="mt-4 text-neutral-300">
            Be the first to know when it’s ready
          </p>
        </div>

        <a
          href="https://getwaitlist.com/waitlist/8031"
          target="_blank"
          className="self-center md:mt-0 mt-8"
        >
          <div className="self-center">
            <div
              className="max-w-md p-0.5 relative mx-auto bg-left-bottom hover:bg-right-bottom overflow-hidden rounded-md cursor-pointer group bg-grad2 transition-all hover:positio"
              style={{
                backgroundSize: "300% 300%",
                transitionDuration: "2000ms",
              }}
            >
              <div className="py-3 text-center text-white rounded-sm bg-[#0D0B0E]">
                Join the waitlist
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
