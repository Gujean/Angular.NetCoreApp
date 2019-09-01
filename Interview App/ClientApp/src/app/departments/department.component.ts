import { Component } from '@angular/core';
import { DepartmentsService } from '../_services/department.service';
import { Department } from '../_models/department.interface';

@Component({
    selector: 'department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.css']
})

export class DepartmentComponent{
    departments: Department[];

    constructor(private departmentService: DepartmentsService){
        
    }

    ngOnInit(){
        this.getAllDepartments();
    }

    getAllDepartments(){
        this.departmentService.getAll().subscribe((departments: Department[]) => {
            this.departments = departments;
        });
    }

}