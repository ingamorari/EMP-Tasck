import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {
	constructor(private readonly http: HttpClient) {
	}
	
	getData(): Observable<any>{
		return this.http.get('');
	}
}
