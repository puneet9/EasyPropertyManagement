import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertiesComponent } from './properties.component';
import { UnitComponent } from './units.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

const appRoutes: Routes = [
    {
        path:'',
        component: PropertiesComponent
    },
    {
        path:'units/:id',
        component: UnitComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'contact',
        component: ContactComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);