import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  pokemonStats : any[] = [];
  subject = new Subject()
  private pokemonStatsSubject = new Subject();

  constructor() { }

  changeMessage(message:number){
    this.subject.next(message)
  }

  sendMsg(message: any){
    //console.log(message)
    this.pokemonStatsSubject.next(message)// Trigger an event
  }

  getMsg():Observable<any>{
    return this.pokemonStatsSubject.asObservable()
  }
}
