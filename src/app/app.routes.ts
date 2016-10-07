import {Routes, RouterModule} from '@angular/router';
import {Home} from "./home/home.component";

const appRoutes: Routes = [
    {
        path: '', component: Home
    }
];

export const routing = RouterModule.forRoot(appRoutes);
