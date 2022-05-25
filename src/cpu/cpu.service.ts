import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(num1: number, num2: number) {
    console.log('using Power in CpuService:', this.powerService.supplyPower);
    return num1 + num2;
  }
}
