import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter.reducer';
import {Component} from "@angular/core";
import {Observable} from "rxjs";

interface AppState {
    counter: number;
}

@Component({
    selector: 'counter',
    template: `
        <button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>
    `
})
export class Counter {
    counter: Observable<{}>;

    constructor(public store: Store<AppState>){
        this.counter = store.select('counter');
    }

    increment(){
        this.store.dispatch({ type: INCREMENT });
    }

    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }

    reset(){
        this.store.dispatch({ type: RESET });
    }
}