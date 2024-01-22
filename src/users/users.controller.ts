import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }


    @Get() // GET /users
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.userService.findAll(role)
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        return this.userService.findOne(Number(id));
    }

    @Post() // POST /users
    create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.userService.create(user);
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.userService.update(Number(id), userUpdate)
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id') id: string) {
        return this.userService.delete(Number(id))
    }
}
