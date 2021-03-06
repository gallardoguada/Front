import { Injectable }  from '@angular/core';
import { Http, Response }  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class BlogService {
    constructor(private http:Http){

    }
    private url:string = "http://localhost:3000/posts";

    getPosts(){
        return this.http.get(this.url).map((response: Response) => response.json());
    }
}