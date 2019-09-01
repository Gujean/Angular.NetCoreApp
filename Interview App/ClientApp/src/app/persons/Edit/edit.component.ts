import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { PersonsService } from 'src/app/_services/person.service';
import { DepartmentsService } from 'src/app/_services/department.service';
import { Person } from 'src/app/_models/person.interface';
import { Department } from 'src/app/_models/department.interface';

@Component({
    selector: 'edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})

export class EditComponent{
    person: Person = new Person();
    departments: Department[];
    sub:any;
    id: number;


    constructor(private route: ActivatedRoute, private router:Router, private personService: PersonsService, private departmentService: DepartmentsService){

    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(paramms => {
            this.id = +paramms['id'];
            this.getById();
            this.getDepartments();
            this.getDepartmentName(this.person.departmentId);
        })
    }

    getById(){
        this.personService.getById(this.id).subscribe((person: Person) => {
            this.person = person;
        })
        
    }

    getDepartments(){
        this.departmentService.getAll().subscribe((departments: Department[]) => {
            this.departments = departments;
        })
    }

    getDepartmentName(id: number): string{
        for(let i = 0; i<this.departments.length; i++){
            if(this.departments[i].id == id){
                return this.departments[i].name;
            }
        }
    }

    update(){
        this.personService.update(this.person).subscribe((person: Person) => {
            this.goToPersons();
        })
            
    }

    selectDepartment(departmentId) {
        this.person.departmentId = departmentId;
        console.log(departmentId)
    }
    
    goToPersons(){
        this.router.navigate(['person']);
    }



    
}