import { Component,ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartComponent implements OnInit {

  @Input() chartData: any[] = [];
  @Input() labels: string[] = [];

  private chart: echarts.ECharts | undefined;


  

  ngOnInit(): void {
    const chartDom = document.getElementById('line-chart')!;
    this.chart = echarts.init(chartDom);

    const option: echarts.EChartsOption = {
      legend: {
        show: false,
      },
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        dimensions: ['month', ...this.labels],
        source: this.chartData
      },
      xAxis: { 
        type: 'category',
        data: this.labels,
        splitLine: {
          show: true,
        }
      },
      yAxis: { 
        gridIndex: 0,
        splitLine: {
          show: false,
        }
      },
      grid: { 
        top: '10%',
       },
      series: this.chartData.map((data, index) => ({
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        data: data,
        emphasis: { focus: 'series' },
        name: `Line ${index + 1}`
      }))
    };

    this.chart.on('updateAxisPointer', (event: any) => {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        this.chart?.setOption<echarts.EChartsOption>({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)'
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    });

    this.chart.setOption<echarts.EChartsOption>(option);
  }







 
  // @Input() firstLineData: number[] = [];
  // @Input() secondLineData: number[] = [];

  // chart: Chart | undefined;

  // ngOnInit(): void {
  //   Chart.register(...registerables);

  //   const labels = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  //   const data = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: 'First Line',
  //         data: this.firstLineData,
  //         borderColor: '#0D1282',
  //         fill: false
  //       },
  //       {
  //         label: 'Second Line',
  //         data: this.secondLineData,
  //         borderColor: '#00DFA2',
  //         fill: false
  //       }
  //     ]
  //   };

   

  //   this.chart = new Chart('canvas', {
  //     type: 'line',
  //     data: data,
  //   });
  // }
  
}
