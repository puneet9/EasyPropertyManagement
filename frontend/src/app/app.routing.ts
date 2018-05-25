import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertiesComponent } from './properties.component';
import { UnitComponent } from './units.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

const appRoutes: Routes = [
    {
        path:'',
        component: LoginComponent
    },
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'properties',
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