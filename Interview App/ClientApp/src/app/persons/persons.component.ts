import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../_models/person.interface';
import { PersonsService } from '../_services/person.service';
import { ConstantPool } from '@angular/compiler';
import { DepartmentsService } from '../_services/department.service';
import { Department } from '../_models/department.interface';
import { delay } from 'q';

@Component({
    selector: 'app-person',
    templateUrl: './persons.component.html',
    styleUrls: ['./persons.component.css']
})
export class PersonComponent{
    selectedPerson: Person;
    persons: Person[];
    departments: Department[];
    selected: boolean = false;
    selectedId: number;


    constructor(private router: Router, private personService: PersonsService,private departmentService: DepartmentsService){
        
    }

    ngOnInit(){
        this.getAllPersons();
        this.getAllDepartments();
        // document.getElementById("tb").childNodes.forEach(x => {
        //     x.addEventListener("click","select")
        // })
    }    

    getAllPersons() {
        this.personService.getAll().subscribe((persons: Person[]) => {
            this.persons = persons;

            console.table(this.persons);
        })
    }

    getAllDepartments(){
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

    goToCreate(){
        this.router.navigate(['create']);
    }

    goToEdit(id:number ){
        this.router.navigate(['edit', id]);
    }

    deletePerson(id: number){
        this.personService.delete(id).subscribe((result) => {
            console.log(result);
            this.getAllPersons();
        });
    }

    async process(id: number){
        if(this.selected == false){
            document.getElementById("tb").firstElementChild.classList.add("selected");
        }
        await delay(5000);
        alert("A mers!!!!");
        for(let i = 0; i<this.persons.length; i++){
 
            if(this.selectedId == this.persons[this.persons.length-1].id){
                this.selectedId= this.persons[0].id;
                break;
            }
            if(this.persons[i].id == this.selectedId){
                this.selectedId = this.persons[i+1].id;
                break;
            }
        }
    }

    select(id:number){
        console.log(id);
        //document.getElementById(id.toString()).classList.add("selected");
        this.selected  = !this.selected;
        this.selectedId = id;
    }

}