import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/components/models/component-models';
import { menus } from './constant';

@Component({
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
  logo: string = "../../../assets/icon/logo (2).png"
  menus: MenuItem[] = menus
  user = {
    imageUrl: "../../../assets/icon/user.png",
    name: "Nafisa SH.",
    position: "Support Manager"
  }
  title: string = "Dashboard";
  lang: string = "EN"
  brightnessLevelIcon: string = "../../../assets/icon/light.png"
  userImg: string = "../../../assets/icon/user.png";

  cardData = [
    {
      iconUrl: "../../../assets/icon/pending_request.png",
      figure: "1,478,286",
      month: "Last Month",
      graphIconUrl: "../../../assets/icon/green_line.png",
      increase: true,
      decrease: false,
      percentage: "4.07",
      dataName: "Pending Requests"
    },
    {
      iconUrl: "../../../assets/icon/approved_request.png",
      figure: "478,520",
      month: "Last Month",
      graphIconUrl: "../../../assets/icon/green_line.png",
      increase: true,
      decrease: false,
      percentage: "0.24",
      dataName: "Approved Requests"
    },
    {
      iconUrl: "../../../assets/icon/total_agents.png",
      figure: "154,872",
      month: "Last Month",
      graphIconUrl: "../../../assets/icon/red_line.png",
      increase: false,
      decrease: true,
      percentage: "1.64",
      dataName: "Total Agents"
    },
    {
      iconUrl: "../../../assets/icon/total_user.png",
      figure: "167",
      month: "Last Month",
      graphIconUrl: "../../../assets/icon/green_line.png",
      increase: true,
      decrease: false,
      percentage: "0.00",
      dataName: "Total Users"
    }
  ];

  chartData1 = [25, 50, 35, 33, 90, 9, 10, 25];
  chartData2 = [15, 23, 20, 33, 25, 12, 25, 55];
  labels = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  barChartColor = ["#fff"];
  barChartData = [
    {
      month: 'Jan',
      value: 800
    },
    {
      month: 'Feb',
      value: 700
    },
    {
      month: 'Mar',
      value: 400
    },
    {
      month: 'Apr',
      value: 900
    },
    {
      month: 'May',
      value: 750
    }
  ]

  tableColumns: string[] = ['Name', 'Type', 'Status', 'Date'];
  tableData: any[] = [
    { 
      Name: 'Michael Olu',
      email: 'michael@mail.com', 
      Type: 'New Agent', 
      Status: 'Pending', 
      Date: '23/04/2018', 
      imageUrl: '../../../assets/icon/user.png' 
    },
    { 
      Name: 'Chioma James', 
      email: 'alexa@mail.com',
      Type: 'Account Activation', 
      Status: 'Active', 
      Date: '25/06/2020', 
      imageUrl: '../../../assets/icon/user.png' 
    },
  ];
  tableTitle: string = "Recent Requests"
  userType: string = "New User";
  userIncrease: string = "(+23%) than last week"

  ngOnInit(): void {
    
  }
}
