import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | GridComponentOption | BarSeriesOption
>;

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarChartComponent implements OnInit {
  @Input() chartData: any[] | undefined;
  @Input() labelProperty: string = '';
  @Input() valueProperty: string = '';
  @Input() colors: string[] | undefined;
  @Input() width: number | undefined;
  @Input() height: number | undefined;
  @Input() userType: string | undefined;
  @Input() userIncrease: string | undefined;

  barChart: any;

  constructor() {
   }

  ngOnInit(): void {
    this.displayChart();
  }

  displayChart(): void {
    const chart = echarts.init(document.getElementById('barChart'));
    const options: EChartsOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      xAxis: {
        nameGap: 40,
        nameTextStyle: {
          fontSize: 10,
          fontWeight: 300,
          color: 'white'
        },
        type: 'category',
        data: this.chartData?.map(data => data[this.labelProperty]),
        axisLabel: {
          interval: 0,
          margin: 15, 
          color: 'white'
        },
        
      },
      yAxis: {
        nameGap: 35,
        nameTextStyle: {
          fontSize: 10,
          fontWeight: 300,
          color: 'white'
        },
        axisLabel: {
          color: 'white' 
        },
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      series: [
        {
          data: this.chartData?.map(data => data[this.valueProperty]),
          type: 'bar',
          barWidth: 8,
          itemStyle: {
            borderRadius: [10, 10, 0, 0],
            color: 'white'
          },
        }
      ],
      graphic: [
        {
          type: 'text',
          left: 'left',
          bottom: 15,
          style: {
            text: this.userType,
            fill: '#fff',
            fontSize: 15
          }
        },
        {
          type: 'text',
          left: 'left',
          bottom: 1,
          style: {
            text: this.userIncrease,
            fill: '#fff',
            fontSize: 12
          }
        }
      ],
      color: this.colors,
    };
    chart.setOption(options);
  }
}
