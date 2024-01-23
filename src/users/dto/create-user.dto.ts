import { IsEmail, IsEnum, IsString, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
        message: 'Valid role code required'
    })
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
