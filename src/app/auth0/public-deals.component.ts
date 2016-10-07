import { Component, OnInit } from '@angular/core';
import { Deal } from './deal';
// We haven't defined these services yet
import { AuthService } from './auth.service';
import { DealService } from './deal.service';

@Component({
    selector: 'public-deals',
    // We'll use an external file for both the CSS styles and HTML view
    templateUrl: 'public-deals.component.html',
    styleUrls: ['public-deals.component.css']
})
export class PublicDealsComponent implements OnInit {
    publicDeals: Deal[];

    // Note: We haven't implemented the Deal or Auth Services yet.
    constructor(
        private dealService: DealService,
        private authService: AuthService) {
    }
    // When this component is loaded, we'll call the dealService and get our public deals.
    ngOnInit(): void {
        this.dealService.getPublicDeals()
            .then(deals => this.publicDeals = deals);
    }

    purchase(item){
        alert("You bought the: " + item.name);
    }
}