import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateUrlDto {

    @IsUrl({}, { message: `Please fill in a valid  URL` })
    @IsNotEmpty({ message: `Please fill in the url` })
    origin: string;

    @IsNotEmpty({ message: `Please do the captcha` })
    captchaValue: string;
}
