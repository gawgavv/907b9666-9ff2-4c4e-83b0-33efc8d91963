"use client"

import { ChangeEvent, useState } from "react";

import Link from "next/link";

export default function Shortened(props: any) {

    const [shortened, setShortened] = useState<string | undefined>(process.env.SERVER_HOST || `shorturl.at/sKMY8`)
    const [shortenedInput, setShortenedInput] = useState<string>(``)

    function onChangeShortened({ target }: ChangeEvent<HTMLInputElement>) {
        const { value } = target;
        setShortenedInput(value)
    }

    function getClicks(e: SubmitEvent) {
        e.preventDefault()
        
    }

    return <>
        <div className="m-5 md:mx-44 my-20 mb-96 bg-white shadow-md">
            <div className="p-10 flex flex-col gap-y-5 items-center">
                <div className="flex flex-col gap-y-3 items-center">
                    <h1 className="text-3xl font-extrabold text-slate-700">Total Url Clicks</h1>
                    <p className="text-sm md:text-base text-justify md:w-1/2 lg:w-1/3">The number of clicks from the shortened URL that redirected the user to the destination page.</p>
                </div>
                <div className="flex flex-col gap-y-2 items-center">
                    <a href="shorturl.at/sKMY8" className="text-blue-600 hover:underline hover:text-blue-400">{
                        shortened
                    }</a>
                    <div className="text-[48px]">
                        0
                    </div>
                </div>
                <div className="flex flex-col gap-y-5">  
                    <div className="flex bg-slate-500">
                        <input type="text" name="shortened" value={shortenedInput} onChange={onChangeShortened} className="border border-slate-400 p-1 w-3/4" placeholder="Enter the shortened URL here..."/>
                        <button type="submit" className="bg-emerald-500 p-1 text-white text-sm w-1/4">Track another URL</button>
                    </div>
                    <Link href={`/`} className="bg-emerald-500 p-2 text-white font-bold rounded-sm text-center">Shorten another URL</Link>
                </div>
            </div>
        </div>
    </>
}