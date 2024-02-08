import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateUrlDto {

    @IsUrl({}, { message: `Please fill in a valid  URL` })
    @IsNotEmpty()
    origin: string
}
