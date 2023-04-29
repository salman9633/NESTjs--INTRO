import { createUserDto } from './dtos/create-user.dtos';
import { UpdateUser } from "./dtos/update-user.dto";
import { UsersService } from './users.service';
import { AuthUserService } from './auth.service';
export declare class UsersController {
    private userService;
    private authUserService;
    constructor(userService: UsersService, authUserService: AuthUserService);
    createUser(body: createUserDto): Promise<import("./user.entity").User | "user already registered">;
    findUser(id: string): Promise<import("./user.entity").User>;
    getAllUser(): Promise<import("./user.entity").User[]>;
    users(email: string): Promise<import("./user.entity").User[]>;
    removeUser(id: string): Promise<import("./user.entity").User>;
    updateUser(id: string, body: UpdateUser): Promise<import("./user.entity").User>;
}
