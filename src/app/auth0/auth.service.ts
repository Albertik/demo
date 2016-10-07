import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
const config = require('../../../server/config');

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

    lock = new Auth0Lock('PUM07JiXzye2M5Wboz0HBByw6kK4gfwm', 'albert.eu.auth0.com', {});

    constructor(private router: Router) {
        console.log(config.AUTH0_CLIENT_SECRET, config.AUTH0_DOMAIN_AUTH0_COM);
        this.lock.on('authenticated', (authResult: any) => {
            localStorage.setItem('id_token', authResult.idToken);

            this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
                if (error) {
                    console.log(error);
                }

                localStorage.setItem('profile', JSON.stringify(profile));
            });

            this.lock.hide();
        });
    }

    login() {
        this.lock.show();
    }

    logout() {
        // To log out, just remove the token and profile
        // from local storage
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');

        // Send the user back to the dashboard after logout
        this.router.navigateByUrl('/');
    }

    loggedIn() {
        return tokenNotExpired();
    }
}