import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Department } from '../_models/department.interface';


@Injectable()

export class DepartmentsService{

    baseUrl: string;

    constructor(private http: HttpClient,@Inject('BASE_URL') baseUrl: string){
        this.baseUrl = baseUrl;
    }

    getAll (): Observable<Department[]>{
        let headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.get<Department[]>(this.baseUrl + 'api/Departments', {headers: headers});
    }

    getById (id: number): Observable<Department>{
        let headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.get<Department>(this.baseUrl + 'api/Departments/' + id, {headers: headers});
    }

    create (department: Department): Observable<Department> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.post<Department>(this.baseUrl + 'api/Departments', JSON.stringify(department), { headers: headers })
    }

    update (department: Department): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.put<any>(this.baseUrl + 'api/Departments', JSON.stringify(department), { headers: headers })
        console.log("update");
    }

    delete (id: number): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
        return this.http.delete<any>(this.baseUrl + 'api/Departments/' + id, { headers: headers })
    }
}
