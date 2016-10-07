import {DealService} from "./deal.service";
import {AUTH_PROVIDERS} from "angular2-jwt";
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import {DailyDealsComponent} from "./daily-deals.component";
import {NgModule} from "@angular/core";
import {dealsRouting, routedComponents} from "./deals.routing";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule,
        dealsRouting
    ],
    declarations: [
        routedComponents
    ],
    providers: [
        DealService,
        AUTH_PROVIDERS,
        AuthService,
        AuthGuard
    ],
    bootstrap: [DailyDealsComponent]
})
export class Auth0Module { }