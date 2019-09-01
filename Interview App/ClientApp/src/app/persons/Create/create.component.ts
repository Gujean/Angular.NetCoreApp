import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { PersonsService } from 'src/app/_services/person.service';
import { DepartmentsService } from 'src/app/_services/department.service';
import { Department } from 'src/app/_models/department.interface';
import { Person } from 'src/app/_models/person.interface';

@Component({
    selector: 'create_person',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})

export class CreateComponent{
    departments: Department[];
    person: Person = new Person();
    

    constructor(private router: Router, private personService: PersonsService,private departmentService: DepartmentsService){

    }

    ngOnInit(){
        this.getAllDepartments();
    }

    getAllDepartments(){
        this.departmentService.getAll().subscribe((departments: Department[]) => {
            this.departments = departments;
            console.table(departments)
        })
    }

    selectDepartment(departmentId) {
        this.person.departmentId = departmentId;
        console.log(departmentId)
    }

    create(){

        this.personService.create(this.person).subscribe((result) => {
            console.log(result);
            this.router.navigate(['person']);
        });
    }
}

