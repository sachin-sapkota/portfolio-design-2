import Head from 'next/head';

const Portfolio = () => {
  return (
    <div className="relative [background:linear-gradient(180deg,_#010208_16.39%,_#010206_20.51%,_#040008_24.79%,_#010101_30.46%,_#010101_34.11%,_#010101_36.21%,_#010101)] w-full flex flex-col items-center justify-start gap-[0px] text-left text-xs text-gray-200 font-work-sans">
      <div className="self-stretch relative h-[800px] shrink-0 overflow-hidden">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[96px]">
          <img
            className="absolute top-[calc(50%_-_24px)] left-[112px] w-[96px] h-[48px] overflow-hidden"
            alt=""
            src="../logo.svg"
          />
          <div className="absolute h-[51.04%] top-[23.96%] right-[112px] bottom-[25%] flex flex-row p-[10px_0px] box-border items-start justify-start gap-[32px]">
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative leading-[150%] uppercase font-semibold [background:linear-gradient(99.05deg,_#bc3cd8,_#c54b8c)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
                HOME
              </div>
              <div className="relative border-t-[2.5px_solid_#e3e4e6] box-border w-[11.5px] h-[2.5px] shrink-0" />
            </div>
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative leading-[150%] uppercase font-semibold inline-block">
                Work
              </div>
              <div className="relative border-t-[2.5px_solid_#e3e4e6] box-border w-[11.5px] h-[2.5px] shrink-0 hidden" />
            </div>
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative leading-[150%] uppercase font-semibold inline-block">
                About
              </div>
              <div className="relative border-t-[2.5px_solid_#e3e4e6] box-border w-[11.5px] h-[2.5px] shrink-0 hidden" />
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_224px)] top-[316px] right-[112px] left-[112px] flex flex-row p-[0px_104px] box-border items-start justify-start text-center text-3xl text-gray-800">
          <div className="flex-1 relative tracking-[-0.02em] leading-[150%] inline-block">
            <span className="font-light">{`I’m a designer specialising in `}</span>
            <span className="font-semibold text-gray-200">
              <span>UI/UX</span>
              <span className="text-white">{` `}</span>
            </span>
            <span className="font-light">
              <span>and</span>
              <span className="text-white">{` `}</span>
            </span>
            <span className="font-semibold text-gray-200">
              Interaction Design
            </span>
          </div>
        </div>
        <img
          className="absolute bottom-[42px] left-[calc(50%_-_20px)] w-[40px] h-[40px] overflow-hidden"
          alt=""
          src="../icon--chevrondown.svg"
        />
      </div>
      <div className="self-stretch flex flex-col p-[80px_112px_130px] box-border items-start justify-start text-2xl">
        <div className="self-stretch flex flex-col items-start justify-start gap-[80px]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 relative leading-[150%] inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                <span className="font-light font-work-sans">
                  <span className="text-gray-800">Some of</span>
                  <span className="text-white">{` `}</span>
                </span>
                <span className="font-semibold">the clients I have</span>
              </p>
              <p className="m-[0]">
                <span className="font-semibold">designed for</span>
              </p>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row p-[16px_0px] box-border items-center justify-between">
            <img
              className="relative w-[194.46px] h-[60.5px] shrink-0 overflow-hidden"
              alt=""
              src="../airbnb-logo.svg"
            />
            <img
              className="relative w-[181.5px] h-[60.5px] shrink-0 overflow-hidden"
              alt=""
              src="../google-logo.svg"
            />
            <img
              className="relative w-[263.61px] h-[56.18px] shrink-0 overflow-hidden"
              alt=""
              src="../microsoft-logo.svg"
            />
            <img
              className="relative w-[172.86px] h-[51.86px] shrink-0 overflow-hidden"
              alt=""
              src="../fedex-logo.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col p-[80px_110px_120px] box-border items-start justify-start gap-[97px] text-sm">
        <div className="self-stretch flex flex-row items-start justify-start text-2xl text-gray-800">
          <div className="flex-1 relative leading-[150%] inline-block">
            <span className="font-light">
              <span>Selected</span>
              <span className="text-white">{` `}</span>
            </span>
            <span className="font-semibold text-gray-200">Works</span>
          </div>
        </div>
        <div className="self-stretch h-[490px] shrink-0 flex flex-row items-start justify-start gap-[32px]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="../col-1@2x.png"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-end gap-[32px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-end gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch relative tracking-[0.04em] leading-[150%] uppercase font-semibold inline-block">
                  Real estate Template
                </div>
                <div className="self-stretch relative text-xl leading-[150%] inline-block text-gray-800">
                  <span className="font-light">
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </span>
                  <span className="text-gray-200">
                    <span className="font-light">{` `}</span>
                    <span className="font-semibold">
                      adipiscing elit. Ultrices lorem non feugiat egestas amet.
                    </span>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[150%] font-light inline-block">
                Website Design
              </div>
            </div>
            <div className="rounded-[100px] [border:1px_solid_rgba(227,_228,_230,_0.55)] box-border flex flex-row p-[8px_16px] items-center justify-center gap-[8px]">
              <div className="relative tracking-[0.04em] leading-[150%] uppercase inline-block">
                View work
              </div>
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../icon.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-[490px] shrink-0 flex flex-row items-start justify-start gap-[32px]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-end gap-[32px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-end gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch relative tracking-[0.04em] leading-[150%] uppercase font-semibold inline-block">
                  Plant identification app
                </div>
                <div className="self-stretch relative text-xl leading-[150%] inline-block text-gray-800">
                  <span className="font-light">
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                    <span className="text-white">{` `}</span>
                  </span>
                  <span className="font-semibold text-gray-200">
                    adipiscing elit. Ultrices lorem non feugiat egestas amet.
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[150%] font-light inline-block">
                Mobile App
              </div>
            </div>
            <div className="rounded-[100px] [background:linear-gradient(99.05deg,_#bc3cd8,_#c54b8c)] [border:1px_solid_#e3e4e6] box-border flex flex-row p-[8px_28px] items-center justify-center gap-[8px]">
              <div className="relative tracking-[0.04em] leading-[150%] uppercase font-semibold inline-block">
                View work
              </div>
              <img
                className="relative w-[24px] h-[24px] shrink-0"
                alt=""
                src="../icon1.svg"
              />
            </div>
          </div>
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="../col-11@2x.png"
          />
        </div>
        <div className="self-stretch h-[490px] shrink-0 flex flex-row items-start justify-start gap-[32px]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="../col-12@2x.png"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-end gap-[32px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-end gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch relative tracking-[0.04em] leading-[150%] uppercase font-semibold inline-block">
                  Smart Home App
                </div>
                <div className="self-stretch relative text-xl leading-[150%] inline-block text-gray-800">
                  <span className="font-light">
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </span>
                  <span className="text-gray-200">
                    <span className="font-light">{` `}</span>
                    <span className="font-semibold">
                      adipiscing elit. Ultrices lorem non feugiat egestas amet.
                    </span>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[150%] font-light inline-block">
                Mobile App
              </div>
            </div>
            <div className="rounded-[100px] [border:1px_solid_rgba(227,_228,_230,_0.55)] box-border flex flex-row p-[8px_16px] items-center justify-center gap-[8px]">
              <div className="relative tracking-[0.04em] leading-[150%] uppercase inline-block">
                View work
              </div>
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../icon.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-[490px] shrink-0 flex flex-row items-start justify-start gap-[32px]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-end gap-[32px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-end gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch relative tracking-[0.04em] leading-[150%] uppercase font-semibold inline-block">
                  Logo Animation
                </div>
                <div className="self-stretch relative text-xl leading-[150%] inline-block text-gray-800">
                  <span className="font-light">
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                    <span className="text-white">{` `}</span>
                  </span>
                  <span className="font-semibold text-gray-200">
                    adipiscing elit. Ultrices lorem non feugiat egestas amet.
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[150%] font-light inline-block">
                Animation
              </div>
            </div>
            <div className="rounded-[100px] [border:1px_solid_rgba(227,_228,_230,_0.55)] box-border flex flex-row p-[8px_16px] items-center justify-center gap-[8px]">
              <div className="relative tracking-[0.04em] leading-[150%] uppercase inline-block">
                View work
              </div>
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../icon.svg"
              />
            </div>
          </div>
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="../col-13@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch h-[996px] shrink-0 flex flex-col p-[74px_107px] box-border items-center justify-start text-lg">
        <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[34px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch relative tracking-[0.06em] leading-[150%] uppercase font-semibold inline-block">
              A bit about me
            </div>
            <div className="self-stretch relative text-xl leading-[150%] inline-block text-gray-800">
              <span className="font-light">{`I am a UI/UX designer who is passionate about creating `}</span>
              <span className="font-semibold text-gray-200">
                <span>
                  beautiful and joyful digital experiences. Besides design, I
                  love
                </span>
                <span className="text-white">{` `}</span>
                <span className="text-gray-200">{`music, games and travelling. `}</span>
              </span>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-center justify-end gap-[32px]">
            <img
              className="flex-1 relative max-w-full overflow-hidden h-[408px] object-cover"
              alt=""
              src="../cover@2x.png"
            />
            <div className="self-stretch flex-1 flex flex-col items-end justify-center gap-[32px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[374px] shrink-0 object-cover"
                alt=""
                src="../cover1@2x.png"
              />
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[375px] shrink-0 object-cover"
                alt=""
                src="../cover2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[460px] shrink-0 flex flex-col p-[80px_424px_40px] box-border items-center justify-center text-center text-3xl text-gray-800">
        <div className="self-stretch flex flex-col items-center justify-start gap-[80px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[60px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[4px]">
              <div className="self-stretch flex flex-row items-start justify-center">
                <div className="flex-1 relative tracking-[-0.02em] leading-[150%] inline-block">
                  <span className="font-light">
                    <span>Get</span>
                    <span className="text-white">{` `}</span>
                  </span>
                  <span className="font-semibold text-gray-200">in Touch.</span>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[150%] font-light text-gray-200 inline-block">
                So that we can talk more about...
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[56px]">
              <img
                className="relative w-[48px] h-[48px] shrink-0 overflow-hidden"
                alt=""
                src="../mail.svg"
              />
              <img
                className="relative w-[48px] h-[48px] shrink-0 overflow-hidden"
                alt=""
                src="../behance.svg"
              />
              <img
                className="relative w-[48px] h-[48px] shrink-0 overflow-hidden"
                alt=""
                src="../dribble.svg"
              />
              <img
                className="relative w-[48px] h-[48px] shrink-0 overflow-hidden"
                alt=""
                src="../linkedin.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row p-[4px_0px] box-border items-start justify-center text-base text-gray-200">
            <div className="flex-1 relative leading-[150%] inline-block">
              <span className="font-light">
                <span className="text-gray-800">Made with</span>
                <span className="text-gray-200">{` ❣️ `}</span>
                <span className="text-gray-800">by</span>
                <span>{` `}</span>
              </span>
              <span>
                <span className="font-semibold">Sachin</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
