import React from "react";
// Layouts
import DefaultLayout from "./layouts/default";
// Components
import BaseButton from "./components/base/Button";
import BaseSection from "./components/base/Section";
import BaseAccordion from "./components/base/Accordion";
import LandingCryptoStatistic from "./components/landing/CryptoStatistic";
import DexScreenerEmbed from "./components/landing/Dexscreener";
import LandingExchange from "./components/landing/Exchange";
import LandingListItem from "./components/landing/ListItem";
import LandingStep from "./components/landing/Step";

function App() {
  const trendings = [
    {
      id: 1,
      name: "Bitcoin",
      price: 43180.13,
      logo: "bitcoin.png",
      increase: true,
      data: [40, 35, 60, 75, 60, 75, 50],
    },
    {
      id: 2,
      name: "Ethereum",
      price: 3480.65,
      logo: "ethereum.png",
      increase: false,
      data: [25, 30, 60, 50, 80, 55, 80],
    },
    {
      id: 3,
      name: "Solana",
      price: 150.2,
      logo: "solana.png",
      increase: true,
      data: [40, 45, 40, 80, 50, 60, 35],
    },
    {
      id: 4,
      name: "Dogecoin",
      price: 0.1572,
      logo: "dogecoin.png",
      increase: true,
      data: [35, 70, 60, 80, 50, 60, 40],
    },
  ];
  const topGainers = [
    {
      id: 1,
      name: "PAPPAY",
      price: 0.00374,
      logo: "pappay.png",
      increase: true,
      data: [30, 50, 45, 60, 70, 40, 45],
    },
    {
      id: 2,
      name: "Bitcoin Asia",
      price: 0.02096,
      logo: "bitcoin-asia.png",
      increase: true,
      data: [25, 60, 50, 60, 35, 50, 70],
    },
    {
      id: 3,
      name: "MoonRock",
      price: 0.004907,
      logo: "moonrock.png",
      increase: true,
      data: [40, 35, 40, 25, 50, 70, 45],
    },
    {
      id: 4,
      name: "NinjaFloki",
      price: 0.000123,
      logo: "ninjafloki.png",
      increase: true,
      data: [45, 35, 40, 30, 25, 45, 35],
    },
  ];
  const recents = [
    {
      id: 1,
      name: "MetaCraft",
      price: 0.0608,
      logo: "metacraft.png",
      increase: false,
      data: [40, 50, 45, 60, 35, 40, 45],
    },
    {
      id: 2,
      name: "Frog",
      price: 0.5875,
      logo: "frog.png",
      increase: false,
      data: [25, 50, 45, 48, 40, 60, 45],
    },
    {
      id: 3,
      name: "Musk Doge",
      price: 0.04041,
      logo: "musk-doge.png",
      increase: true,
      data: [25, 35, 60, 45, 50, 45, 45],
    },
    {
      id: 4,
      name: "2SHARE",
      price: 1366.24,
      logo: "2share.png",
      increase: true,
      data: [35, 30, 60, 50, 35, 45, 40],
    },
  ];

  const currencies = [
    {
      img: "country-icon/eng.png",
      name: "USD",
    },
  ];

  const cryptoSelected = {
    img: "crypto-icon/bitcoin.png",
    name: "BTC",
  };
  const cryptocurrencies = [
    {
      img: "crypto-icon/bitcoin.png",
      name: "BTC",
    },
  ];

  const currencySelected = {
    img: "country-icon/eng.png",
    name: "USD",
  };

  const steps = [
    {
      img: "sign-up.png",
      title: "Wallet",
      description:
        "Download & Open Crypto wallet e.g Trustwallet, MetaMask, Safepal e.t.c",
    },
    {
      img: "fund.png",
      title: "Fund",
      description:
        "Fund your BSC wallet with BNB",
    },
    {
      img: "buy-crypto.png",
      title: "Buy MOCHI INU",
      description:
        "Buy MOCHI INU on PancakeSwap",
    },
  ];

  const accordions = [
    {
      title: "When was Mochi Inu Launched?",
      description:
        "14th August 2023.",
    },
    {
      title: "Who owns the project?",
      description:
        "Community took over from the Dev after he abandoned it.",
    },
    {
      title: "How can I buy the Token?",
      description:
        "Copy the contract address 0x1A873e84944E174a74dFd0451796393247aB6baC and head to Poocoin/Pancakeswap  or Use the buy button and connect your wallet to buy.",
    },
    {
      title: "Any Utility for the project?",
      description:
        "Yes, since the owner of KJCALMIGHTYCALLS which is community that took over the project also have a project called DUTCH RABBIT, every utility built for the project is automatically used for MOCHI INU.",
    },
    {
      title: "Is the project just for fun?",
      description:
        "No, the project is a long term and have great potential looking at how vibrant the community her",
    },
    {
      title: "Why is the contract not RENOUNCED yet?",
      description:
        "Not yet renounced because we are still building and if the community requested for the contract to be renounce then it will be RENOUNCED immediately but in case of some corrections we still leave it unrenounced",
    },
    {
      title: "How safe is this project?",
      description:
        "MOCHI INU is safe 99.99% because trade can't be paused, honeypot proof, Liquidity locked for a year and Extendable before expiration.",
    },
  ];

  return (
    <div className="App">
      <DefaultLayout>
        {/* <!-- Hero section --> */}
        <section id="hero" className="w-full pb-24">
          <BaseSection>
            <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
              <span
                data-aos="fade-right"
                data-aos-once="true"
                className="text-base text-gradient font-semibold uppercase"
              >
                MOCHI INU
              </span>
              <h1
                data-aos="fade-right"
                data-aos-once="true"
                className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
              >
                The World's{" "}
                <span className="text-header-gradient">Fastest Token</span>{" "}
                Spreading Happiness
              </h1>
              <p
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="300"
                className="paragraph hidden sm:block"
              >
                Mochi Inu is a meme Token on the BSC network, 
                Mochi Inu aims to continue spreading happiness and joy to her followers.
              </p>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="700"
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
              >
                <BaseButton style="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white">
                <a href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x1A873e84944E174a74dFd0451796393247aB6baC" target="_blank" rel="noopener noreferrer">Buy Now</a>
                </BaseButton>
                <BaseButton style="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center">
                  <a href="https://t.me/mochiinuofficial" target="_blank" rel="noopener noreferrer"><span>TG Community</span></a>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-[#0c66ee]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg> */}
                </BaseButton>
              </div>
            </div>
            <div className="hidden sm:block col-span-12 lg:col-span-6">
              <div className="w-full">
                <img
                  data-aos="fade-up"
                  data-aos-once="true"
                  src={require("./assets/img/hero-image.webp")}
                  className="-mt-4"
                  alt="hero image"
                />
              </div>
            </div>
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={require("./assets/img/pattern/ellipse-1.png")}
              className="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={require("./assets/img/pattern/ellipse-2.png")}
              className="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={require("./assets/img/pattern/ellipse-3.png")}
              className="hidden sm:block absolute bottom-56 right-24 w-6"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={require("./assets/img/pattern/star.png")}
              className="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
            />
          </BaseSection>
        </section>
        {/* <!-- Crypto statistic section --> */}
        <section
          data-aos="fade-up"
          className="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
        >
          <DexScreenerEmbed />
          <div className="w-full flex flex-col lg:flex-row items-center justify-center">
            {/* <LandingCryptoStatistic
              title="🔥 Trending"
              datasets={trendings}
              style="xl:border-r border-gray-200 lg:px-8"
            />
            <LandingCryptoStatistic
              title="🚀 Top Gainers"
              datasets={topGainers}
              style="xl:border-r border-gray-200 lg:px-8"
            />
            <LandingCryptoStatistic
              title="💎 Recently Added"
              datasets={recents}
              style="lg:px-8"
            /> */}
          </div>
        </section>

        {/* <!-- Buy and trade section --> */}
        <section className="w-full my-24">
          <BaseSection>
            <div className="col-span-12 lg:col-span-6 sm:hidden mb-8">
              <div className="w-full">
                <img
                  src={require("./assets/img/buy-and-trade.webp")}
                  className="mt-4 sm:-mt-4"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4"
            >
              <h2 className="text-4xl font-semibold sm:pr-8 xl:pr-12">
                Buy & trade on <br className="hidden sm:block" />
                Pancakeswap.
              </h2>
              <p className="paragraph">
                ⭐️ Mochi Inu is a meme Token on the BSC network, Mochi Inu aims
                to continue spreading happiness and joy to her followers. She
                wants to create memorable experiences and bring smiles to
                everyone involved in her second journey on the blockchain.
              </p>
              <div className="space-y-6 lg:pr-12">
                {/* <LandingExchange
                  title="Amount"
                  name="amount"
                  type="number"
                  defaultValue="5.000"
                  exchangeSelected={currencySelected}
                  exchanges={currencies}
                />
                <LandingExchange
                  title="Get"
                  name="get"
                  type="number"
                  defaultValue="0.10901"
                  exchangeSelected={cryptoSelected}
                  exchanges={cryptocurrencies}
                /> */}
                <BaseButton style="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">
                  <a href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x1A873e84944E174a74dFd0451796393247aB6baC" target="_blank" rel="noopener noreferrer">Buy Now on Pancakeswap</a>
                </BaseButton>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-span-12 lg:col-span-6 hidden sm:block"
              v-bind="$attrs"
            >
              <div className="w-full">
                <img
                  src={require("./assets/img/buy-and-trade.webp")}
                  className="mt-4 sm:-mt-4"
                  alt=""
                />
              </div>
            </div>
          </BaseSection>
        </section>
        {/* <!-- Partners section --> */}
        <section className="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
          <div className="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
            <h3
              data-aos="flip-down"
              className="text-2xl text-neutral-800 font-semibold"
            >
              Trusted Partners Worldwide
            </h3>
            <p data-aos="flip-down" className="paragraph">
              We're partners with reputable crypto projects around the globe
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap items-center justify-center"
            >
              {[
                // "clever.png",
                // "diamon-cutts.png",
                // "swiss-finance.png",
                // "gambio.png",
                "durt.png",
              ].map((img) => {
                return (
                  <img
                    src={require(`./assets/img/partner/${img}`)}
                    className="sm:w-1/2 lg:w-72 mx-auto"
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </section>
        {/* <!-- Credit card section --> */}
        <section className="w-full my-36">
          <BaseSection data-aos="fade-down">
            <div className="col-span-12 lg:col-span-7">
              <div className="w-full">
                <img
                  src={require("./assets/img/nefa-cc.webp")}
                  className="w-[95%]"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
              <h2 className="text-4xl font-semibold">
                Introducing the{" "}
                <span className="text-header-gradient">MOCHI INU</span> ONRAMP
              </h2>
              <p className="paragraph">
                This will enable you to buy MOCHI INU with Credit Card.
              </p>
              <ul className="space-y-4 sm:space-y-2">
                <LandingListItem title="Up to 3% back on purchases">
                  {" "}
                </LandingListItem>
                <LandingListItem title="Earn rewards in MOCHI INU">
                  {" "}
                </LandingListItem>
                <LandingListItem title="No hidden fee"> </LandingListItem>
              </ul>
              <BaseButton style="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base">
                Coming soon...
              </BaseButton>
            </div>
          </BaseSection>
        </section>
        {/* <!-- Advanced trading tools section --> */}
        <section className="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
          <div className="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-6 sm:hidden">
              <div className="w-full sm:mt-20 xl:mt-0">
                <img
                  src={require(`./assets/img/advanced-trading-tools.webp`)}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8"
            >
              <h2 className="text-4xl font-semibold">
                Our <span className="text-header-gradient">Features</span>
              </h2>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Meme Token</h4>
                <p className="paragraph text-sm xl:text-base">
                  Mochi Inu leverages the viral nature and fun community aspect
                  of meme tokens like Doge and Shiba Inu. This provides a
                  lively, engaging environment centered around memes/jokes.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Charity Focus</h4>
                <p className="paragraph text-sm xl:text-base">
                  A portion of profits are donated to charities chosen by the
                  community. Spreading joy through giving back is a core value
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Robust Tax System</h4>
                <p className="paragraph text-sm xl:text-base">
                  3% goes to marketing to fuel growth and further development
                  for continued innovation.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Reflection Rewards</h4>
                <p className="paragraph text-sm xl:text-base">
                  5% of total transactions on buy and sell is reflected to
                  existing holders, rewarding long-term ownership.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Auto Burn</h4>
                <p className="paragraph text-sm xl:text-base">
                  The auto burn mechanic burns 1% of every Mochi inu transaction
                  out of existence. This decreases the total supply in
                  circulation over time hence making it a deflationary meme
                  token.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium">
                  Auto Liquidity Generation
                </h4>
                <p className="paragraph text-sm xl:text-base">
                  3% of total transactions on buy and sell is added to
                  liquidity, creating stability.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row">
                <BaseButton style="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base">
                <a href="https://mochi-inu.gitbook.io/mochi-inu/" target="_blank" rel="noopener noreferrer">Learn More</a>
                
                </BaseButton>
                {/* <BaseButton style="bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full hover:shadow-none">
                  Learn More
                </BaseButton> */}
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-span-12 lg:col-span-6 hidden sm:block"
            >
              <div className="w-full sm:mt-20 xl:mt-0">
                <img
                  src={require(`./assets/img/advanced-trading-tools.webp`)}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Industry-leading security section --> */}
        <section className="w-full my-24">
          <div className="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
            <div data-aos="fade-right" className="col-span-12 lg:col-span-6">
              <div className="w-full">
                <img
                  src={require("./assets/img/industry-leading-security.webp")}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8"
            >
              <h2 className="text-4xl font-semibold">Tax Mechanism</h2>
              <ul className="space-y-8 sm:space-y-4">
                <LandingListItem title="Why Tax?">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Taxes for now as there are funds urgently needed for
                    Marketing Let all MOCHIANS get involved.
                  </p>
                </LandingListItem>
                <LandingListItem title="Buy - 4%">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    1% Auto Burn. 1% Marketing. 1% Auto LP. 1% TKC Reflection
                  </p>
                </LandingListItem>
                <LandingListItem title="Sell - 8%">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    1% Auto Burn. 1% TKC Reflection. 2% Auto LP. 4% Marketing
                  </p>
                </LandingListItem>
                <LandingListItem title="We Prioritize Our Community">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We utilize part of the Marketing allocation to & reward our Community
                  </p>
                </LandingListItem>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- Getting started section --> */}
        <section className="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
          <div className="w-full py-16 flex flex-col items-center">
            <h2
              data-aos="flip-down"
              className="text-3xl sm:text-4xl font-semibold text-center"
            >
              Buy Now in just a few minutes
            </h2>
            <div
              data-aos="fade-up"
              className="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
            >
              {steps.map((step) => {
                return <LandingStep step={step} />;
              })}
              <img
                src={require("./assets/img/getting-started/arrow.png")}
                className="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
                alt=""
              />
              <img
                src={require("./assets/img/getting-started/arrow.png")}
                className="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* <!-- FAQ section --> */}
        <section className="w-full my-24">
          <BaseSection>
            <div
              data-aos="fade-right"
              data-aos-delay="150"
              className="col-span-12 lg:col-span-6"
            >
              <div className="w-full">
                <img
                  src={require("./assets/img/faq.webp")}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8"
            >
              <span className="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">
                Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">
                Frequently asked questions
              </h2>

              <ul className="shadow-box">
                {accordions.map((accordion: any) => {
                  return <BaseAccordion accordion={accordion} />;
                })}
              </ul>
            </div>
          </BaseSection>
        </section>

        <div className="w-full my-10 flex justify-center">
          <a
            data-aos="flip-down"
            data-aos-delay="150"
            href="#"
            className="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
          >
            <span>Back to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default App;
