import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports:[PowerService]//making it available for other nodules
})
export class PowerModule {}
