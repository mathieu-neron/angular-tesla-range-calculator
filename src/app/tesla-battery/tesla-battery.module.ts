/*
 * tesla-battery.module.ts
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';

// services
import { BatteryService } from './tesla-battery.service';
import {TeslaCarComponent} from './components/tesla-car/tesla-car.component';
import {TeslaStatsComponent} from './components/tesla-stats/tesla-starts.component';

@NgModule({
  declarations: [TeslaBatteryComponent, TeslaCarComponent, TeslaStatsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // add the service to our sub-module
    BatteryService
  ],
  exports: [TeslaBatteryComponent]
})
export class TeslaBatteryModule {}
