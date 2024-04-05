import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Employee } from '../models/employee.interface';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  detailId: string = '';
  user!: Employee;
  constructor(private route: ActivatedRoute, private featureService:FeatureService)
  {

  }
  ngOnInit()
  {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.detailId = id;
      this.user = this.featureService.getDataForId(id);
    })
  }
}
