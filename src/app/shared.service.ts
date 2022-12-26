import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  API_URL = "http://127.0.0.1:8000/"
  PHOTO_URL = "http://127.0.0.1:8000/media/"

  constructor(
    private HttpClient: HttpClient
  ) { }

  getDepartment():Observable<any[]>{
    return this.HttpClient.get<any[]>(this.API_URL+"department/");
  }

  addDepartment(value:any){
    return this.HttpClient.post<any[]>(this.API_URL+"department/", value);
  }

  updateDepartment(value:any){
    return this.HttpClient.put<any[]>(this.API_URL+"department/", value);
  }

  deleteDepartment(value:any){
    return this.HttpClient.delete<any[]>(this.API_URL+"department/", value);
  }

  getEmployee():Observable<any[]>{
    return this.HttpClient.get<any[]>(this.API_URL+"employee/");
  }

  addEmployee(value:any){
    return this.HttpClient.post<any[]>(this.API_URL+"employee/", value);
  }

  updateEmployee(value:any){
    return this.HttpClient.put<any[]>(this.API_URL+"employee/", value);
  }

  deleteEmployee(value:any){
    return this.HttpClient.delete<any[]>(this.API_URL+"employee/", value);
  }

  uploadPhoto(value:any){
    return this.HttpClient.post<any[]>(this.API_URL+"save-file/", value);
  }

  getPerson():Observable<any[]>{
    return this.HttpClient.get<any[]>(this.API_URL+"person/");
  }


}
