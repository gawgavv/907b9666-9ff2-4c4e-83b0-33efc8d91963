import { IsUrl, IsNotEmpty } from "class-validator"

export class CreateClickDto {

    @IsUrl()
    @IsNotEmpty()
    shortened: string;
}
