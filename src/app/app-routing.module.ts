import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { DriversComponent } from './drivers/drivers.component';

const routes: Routes = [
  { path: 'driver-details', component: DriverDetailComponent },
  { path: 'drivers', component: DriversComponent },
  { path: '', redirectTo: 'drivers', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
