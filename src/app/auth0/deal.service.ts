import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {AuthHttp} from "angular2-jwt";

import 'rxjs/add/operator/toPromise';

import { Deal } from './deal';

@Injectable()
export class DealService {
    // Define the routes we are going to interact with
    private publicDealsUrl = 'http://localhost:3001/api/deals/public';
    private privateDealsUrl = 'http://localhost:3001/api/deals/private';

    constructor(private http: Http, private authHttp: AuthHttp) { }

    // Implement a method to get the public deals
    getPublicDeals() {
        return this.http
            .get(this.publicDealsUrl)
            .toPromise()
            .then(response=>response.json() as Deal[])
            .catch(this.handleError);
    }

    // Implement a method to get the private deals
    getPrivateDeals() {
        return this.authHttp
            .get(this.privateDealsUrl)
            .toPromise()
            .then(response=>response.json() as Deal[])
            .catch(this.handleError);
    }

    // Implement a method to handle errors if any
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}