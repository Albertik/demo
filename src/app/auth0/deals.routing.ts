import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./auth-guard.service";
import {PrivateDealsComponent} from "./private-deals.component";
import {PublicDealsComponent} from "./public-deals.component";
import {DailyDealsComponent} from "./daily-deals.component";

const dealsRoutes: Routes = [
    {
        path: 'deals',
        component: DailyDealsComponent,
        children: [
            {
                path: '',
                component: PublicDealsComponent
            },
            {
                path: 'special',
                component: PrivateDealsComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
];

export const dealsRouting = RouterModule.forChild(dealsRoutes);

export const routedComponents = [PublicDealsComponent, PrivateDealsComponent, DailyDealsComponent];