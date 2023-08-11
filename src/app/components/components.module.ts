import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CardComponent } from './card/card.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    SideNavComponent,
    TopNavComponent,
    CardComponent,
    LineChartComponent,
    BarChartComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideNavComponent,
    TopNavComponent,
    CardComponent,
    LineChartComponent,
    BarChartComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
