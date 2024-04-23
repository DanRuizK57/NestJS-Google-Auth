import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterAuthDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;
}
