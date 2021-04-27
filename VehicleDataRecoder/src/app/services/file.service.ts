import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    SERVER_URL: string = environment.apiUrl;

    constructor(private httpClient: HttpClient) { }

    public upload(formData: FormData): Observable<FormData> {
        return this.httpClient.post<FormData>(`${this.SERVER_URL}/file/upload`, formData);
    }

    public test(): Observable<any> {
        return this.httpClient.get<any>(`${this.SERVER_URL}/file/test`);
    }

}