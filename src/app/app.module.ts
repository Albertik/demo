import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import {MdButtonModule} from '@angular2-material/button';
import {MdCardModule} from '@angular2-material/card';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdRadioModule} from '@angular2-material/radio';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdListModule} from '@angular2-material/list/list';
import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
import {MdIconModule, MdIconRegistry} from '@angular2-material/icon/icon';
import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
import {MdInputModule} from '@angular2-material/input/input';
import {MdTabsModule} from '@angular2-material/tabs/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
import {MdMenuModule} from '@angular2-material/menu';

import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
import {PortalModule} from '@angular2-material/core/portal/portal-directives';
import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
import {RtlModule} from '@angular2-material/core/rtl/dir';

import {OVERLAY_PROVIDERS} from '@angular2-material/core';
import { MdUniqueSelectionDispatcher } from '@angular2-material/core';

import {AppComponent} from './app.component';
import {routing} from "./app.routes";
import {Home} from "./home/home.component";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./counter/counter.reducer";
import {Counter} from "./counter/counter.component";
import {taskReducer} from "./tasks/task.reducer";
import {TasksModule} from "./tasks/index";
import {Auth0Module} from "./auth0/auth0.module";

@NgModule({
    declarations: [
        AppComponent,
        Home,
        Counter
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        // angular material 2 modules
        MdButtonToggleModule,
        MdButtonModule,
        MdCardModule,
        MdCheckboxModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdRadioModule,
        MdSlideToggleModule,
        MdSidenavModule,
        MdProgressBarModule,
        MdProgressCircleModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule,
        MdMenuModule,
        OverlayModule,
        PortalModule,
        MdRippleModule,
        RtlModule,

        // routes
        routing,

        // rx/store
        StoreModule.provideStore({
            counter: counterReducer,
            tasks: taskReducer
        }, {counter: 0}),

        // internal modules
        TasksModule,
        Auth0Module
    ],
    providers: [
        OVERLAY_PROVIDERS,
        MdUniqueSelectionDispatcher,
        MdIconRegistry
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
