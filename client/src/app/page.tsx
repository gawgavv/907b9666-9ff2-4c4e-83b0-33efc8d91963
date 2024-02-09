import Image from "next/image";

import { UrlForm } from "@/components";

export default function Home() {

  const SITE_KEY: string = process.env.RECAPTCHA_SITE_KEY || ``;
  const SERVER_HOST: string = process.env.SERVER_HOST || ``

  return <>
  <div className="flex flex-col m-5">
    <UrlForm 
    SITE_KEY={SITE_KEY}
    SERVER_HOST={SERVER_HOST}
    />
    <section className="m-5 flex flex-col items-center justify-center">
      <h1 className="my-10 text-3xl md:text-[48px] text-emerald-600 font-bold">Pendekin</h1>
      <div className="p-3 flex flex-col gap-y-1 md:w-1/2">
        <h3 className="text-xl font-semibold">Simple and fast URL shortener</h3>
        <p className="p-1 text-base text-justify">Pendekin allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites. Just paste the long URL and click the Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails. After shortening the URL, check how many clicks it received.</p>
      </div>
    </section>
    <section className="my-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl text-slate-600 font-bold">Why Us?</h2>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center mb-10">
        <div className="p-5 md:mx-10 flex flex-col justify-center items-center w-2/3 md:w-56">
          <Image 
          src={`/icons/icon-like.png`} 
          height={80}
          width={80}
          alt="like"
          />
          <h3 className="text-lg text-center text-slate-600">Easy</h3>
          <p className="text-sm md:text-base text-justify">Pendekin is easy and fast, enter the long link to get your shortened link</p>
        </div>
        <div className="p-5 md:mx-10 flex flex-col justify-center items-center w-2/3 md:w-56">
          <Image 
          src={`/icons/icon-statistics.png`} 
          height={80}
          width={80}
          alt="like"
          />
          <h3 className="text-lg text-center text-slate-600">Statistics</h3>
          <p className="text-sm md:text-base text-justify">Check the number of clicks that your shortened URL received</p>
        </div>
        <div className="p-5 md:mx-10 flex flex-col justify-center items-center w-2/3 md:w-56">
          <Image 
          src={`/icons/icon-url.png`} 
          height={80}
          width={80}
          alt="like"
          />
          <h3 className="text-lg text-center text-slate-600">Shortened</h3>
          <p className="text-sm md:text-base text-justify">Use any link, no matter what size, Pendekin always shortens</p>
        </div>
      </div>
    </section>
  </div>
  </>;
}
