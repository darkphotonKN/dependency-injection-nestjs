import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get('data')
  computeData() {
    const finalData = {
      cpuData: this.cpuService.compute(3, 66),
      diskData: this.diskService.readDisk(),
    };
    console.log(finalData);
    return finalData;
  }
}
