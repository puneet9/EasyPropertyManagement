import { Component, OnInit } from '@angular/core';

import { Property, PropertyService } from './api/client/properties/property.service';

@Component({
    moduleId: module.id,
    selector: 'properties',
    templateUrl: './properties.component.html',
    styleUrls: ['./app.component.css']
})
export class PropertiesComponent implements OnInit {
  title = 'Easy Property Management';

  properties: Property[] = [];

  constructor(
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties() {
    this.propertyService.queryProperties()
      .subscribe(properties => {
        this.properties = properties;
      });
  }
}
