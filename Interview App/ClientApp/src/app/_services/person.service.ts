import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Person } from '../_models/person.interface';
import { AppConfig } from '../app.config';

@Injectable()

export class PersonsService{

    baseUrl: string;

    constructor(private http: HttpClient,@Inject('BASE_URL') baseUrl: string){
        this.baseUrl = baseUrl; // citeste jos apoi pui aici
    }

    getAll (): Observable<Person[]>{
        let headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.get<Person[]>(this.baseUrl + 'api/Persons', {headers: headers});//  ai sris deja api in app.config.ts, iar persons in pui direct in controler ca toate au person aici
    }

    getById (id: number): Observable<Person>{
        let headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.get<Person>(this.baseUrl + 'api/Persons/' + id, {headers: headers});
    }

    create (person: Person): Observable<Person> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.post<Person>(this.baseUrl + 'api/Persons', JSON.stringify(person), { headers: headers })
    }

    update (person: Person): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.put<any>(this.baseUrl + 'api/Persons', JSON.stringify(person), { headers: headers })
        console.log("update")
    }

    delete (id: number): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.delete<any>(this.baseUrl + 'api/Persons/' + id, { headers: headers })
    }
}
