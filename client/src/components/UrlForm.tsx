"use client"

import { ChangeEvent, FormEvent, MouseEventHandler, useState } from "react"
import { useRouter } from "next/navigation";

import ReCaptcha from "react-google-recaptcha";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


interface LongUrlInput {
    origin: string
    captchaValue: string | null
}

export default function UrlForm({ SITE_KEY, SERVER_HOST }: { SITE_KEY: string, SERVER_HOST: string }) { // We are passing site key as props here from the parent page because this URL form components is a client component while the parent is a server component, so we let server component access the environment variables and pass it into client component
    const [originForm, setOriginForm] = useState<LongUrlInput>({ origin: ``, captchaValue: `` });
    const [disableButton, setDisableButton] = useState<boolean>(true)

    const router = useRouter()

    function onChangeOriginForm({ target }: ChangeEvent<HTMLInputElement>) {
        const { value }: { value: string } = target;
        setOriginForm({
            ...originForm,
            origin: value
        })
    }

    function onChangeCaptcha(token: string | null) {
        if(token) setDisableButton(false)
        setOriginForm({ ...originForm, captchaValue: token })
    }

    async function submitLongUrl(e: any) {
        try {
            e.preventDefault();
            toast.loading(`Url is being processed...`, { position: `bottom-left` });
            const response = await fetch(`${SERVER_HOST}/urls`, {
                method: `POST`,
                body: JSON.stringify(originForm),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(!response.ok) throw await response.json();

            const message = await response.json();
            console.log(message);
            router.push(`/shortened`);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return <>
        <section className="bg-white p-10 md: shadow-md sticky flex flex-col gap-y-5 items-center w-full">
            <form onSubmit={submitLongUrl} className="flex flex-col sm:flex-row w-full">
                <input onChange={onChangeOriginForm} value={originForm.origin} type="text" name="origin" id="origin" className="p-2 border border-slate-400 rounded-t-md sm:rounded-l-md sm:rounded-tr-none sm:w-5/6 lg:w-[90%]" placeholder="Enter the URL here..." />
                <button type="submit" className="bg-emerald-500 text-white text-xl p-2 rounded-b-md font-extrabold sm:rounded-r-md sm:rounded-bl-none sm:w-1/6 lg:w-[10%] disabled:cursor-not-allowed" title="Do the captcha first before sending the long url" disabled={disableButton} onClick={submitLongUrl}>
                    pendekin!
                </button>
            </form>
            <ReCaptcha
                sitekey={SITE_KEY}
                onChange={onChangeCaptcha}
            />
        </section>
        <ToastContainer />
    </>
}