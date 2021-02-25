import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  listFormations : any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/formations")
      .subscribe(data=>{
        this.listFormations=data;
        },err => {
          console.log(err);
        }
      )
  }

}
