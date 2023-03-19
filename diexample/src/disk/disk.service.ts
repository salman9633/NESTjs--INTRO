import { Injectable } from '@nestjs/common';
import { PowerService } from "../power/power.service";
@Injectable()
export class DiskService {
    constructor(private powerService: PowerService){}
    getData(){
        console.log('supplying 20W of power');
        this.powerService.supplyPower(20)
        return 'data'
    }
}
