import { Injectable } from '@nestjs/common';
import { PowerService } from "../power/power.service";
@Injectable()
export class CpuService {
    constructor(private powerService: PowerService){}

    compute(a:number,b:number){
        console.log("supplying 10W of power");
        this.powerService.supplyPower(10)
        return a+b
    }
}
