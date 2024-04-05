import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Input() title: string = 'Dashboard';
  cards = [
    { id: '7', value: '45', description: 'Past Week Enquiries', icon: 'ion ion-speakerphone', footerText: 'More info', linear:"linear-gradient(to bottom right, #ffffe0 , #fffff0)",fontColor:"#999900", footerBg:"#fffff0"},
    { id:'6' , value: '115', description: 'Monthly Average Fees', icon: 'ion ion-email-unread', footerText: 'More info', linear:"linear-gradient(to bottom right, #c3f3e5 , #e1f9f2)",fontColor:"#2e9957", footerBg:"#e1f9f2" },
    { id: '2', value: '5,00,000', description: 'Weekly Revenue', icon: 'ion ion-calculator', footerText: 'More info', linear:"linear-gradient(to bottom right, #f8e3cc , #fcf1e6)",fontColor:"#c79361", footerBg:"#fcf1e6" },
    { id:'5' , value: '15,00,000', description: 'Monthly Revenue', icon: 'ion ion-cash', footerText: 'More info', linear:"linear-gradient(to bottom right, #cbdafb , #e5edfd)",fontColor:"#2f3e77", footerBg:"#e5edfd" },
    { id:'4' , value: '15', description: 'Past Week Enrollment', icon: 'ion ion-arrow-graph-up-right', footerText: 'More info',fontColor:'#008080', linear:"linear-gradient(to bottom right, #e0ffff , #f0ffff)", footerBg:"#f0ffff" },
    { id: '3', value: '150', description: 'Past Week Exits', icon: 'ion ion-arrow-graph-down-right', footerText: 'More info', unit: "%" ,fontColor: '#da7374', linear:"linear-gradient(to bottom right, #f9cfd0 , #fce7e8)", footerBg:"#fce7e8" },
    {id: '8', value: '95', description: 'Past Month Enrollments', icon: 'ion ion-thumbsup', footerText: 'More info', linear:"linear-gradient(to bottom right, #d1cbf9 , #e8e5fc)",fontColor:"#665698", footerBg:"#e8e5fc"},
    { id:'1' , value: '550', description: 'Active Students', icon: 'ion ion-person-add', footerText: 'More info', linear:"linear-gradient(to bottom right, #c3f3e5 , #e1f9f2)",fontColor:"#2e9957", footerBg:"#e1f9f2"},
    { id:'6' , value: '35', description: 'Past Month Exits', icon: 'ion ion-thumbsdown', footerText: 'More info',linear:"linear-gradient(to bottom right, #fedffa , #ffeffd)",fontColor:"#da93c9", footerBg:"#ffeffd" },
    { id: '6', value: '120', description: 'Average Student Tenure', icon: 'ion ion-gear-b', footerText: 'More info', unit: " hrs" ,linear:"linear-gradient(to bottom right, #f8e3cc , #fcf1e6)",fontColor:"#c79361", footerBg:"#fcf1e6" },
    { id:'6' , value: '15', description: 'Past Month Enquiries', icon: 'ion ion-funnel', footerText: 'More info', linear:"linear-gradient(to bottom right, #caeff8 , #e5f7fc)",fontColor:"#2f98bf", footerBg:"#e5f7fc" },
    { id:'7'  , value: '12', description: 'Average Student Tenure', icon: 'ion ion-gear-b', footerText: 'More info',unit:"hrs",linear:"linear-gradient(to bottom right, #cbdafb , #e5edfd)",fontColor:"#2f3e77", footerBg:"#e5edfd" }
]
}
