import { Component, OnInit } from '@angular/core';
import { Property, PropertyService } from './api/client/properties/property.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'units',
  templateUrl: './units.component.html'
})
export class UnitComponent {
    title = 'Easy Property Management';
    id:number;
    properties: Property[] = [];
  
    constructor(
      private propertyService: PropertyService,
      private route: ActivatedRoute
    ) { }
  
    ngOnInit(): void {
      this.loadProperties();
      this.route.params.subscribe((params: Params) => {
        this.id = params['id'];
      });
    }
  
    loadProperties() {
      this.propertyService.queryProperties()
        .subscribe(properties => {
          this.properties = properties;
        });
    }
}
