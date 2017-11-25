import { Injectable }  from '@angular/core';
import { Http, Response }  from '@angular/http';

    private url:string = "http://localhost:3000/posts";

    getDetalles(){
        return this.http.get(this.url).map((response: Response) => response.json());
    }