import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  readDisk() {
    console.log('Reading disk with power:', this.powerService.supplyPower(33));
    return `Reading disk with power: ${this.powerService.supplyPower(33)}`;
  }
}
