import { Injectable } from "@nestjs/common";


interface ReCaptchaResponse {
    success: boolean
    challenge_ts: Date
    hostname: string
}

@Injectable()
export class CaptchaService {

    async verifCaptcha(captchaValue: string) {

        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaValue}`, { method: `POST` });

        const { success }: ReCaptchaResponse = await response.json();
        return success
    }
}