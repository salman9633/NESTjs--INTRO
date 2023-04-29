import { User } from "./user.entity";
import { Repository } from 'typeorm';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(email: string, password: string): Promise<User>;
    findOne(id: any): Promise<User>;
    find(): Promise<User[]>;
    findAll(email: string): Promise<User[]>;
    update(id: number, attrb: Partial<User>): Promise<User>;
    remove(id: number): Promise<User>;
}
