import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import ApolloClient, { gql } from 'apollo-boost';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { GET_ALL_VEHICLE, Vehicle } from "../model/vehicle";

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    SERVER_URL: string = environment.apiUrl;

    client = new ApolloClient({
        uri: 'http://localhost:3000/graphql'
    });

    constructor(private httpClient: HttpClient) { }

    public upload(formData: FormData): Observable<FormData> {
        return this.httpClient.post<FormData>(`${this.SERVER_URL}/file/upload`, formData);
    }

    public test(): Observable<any> {
        return this.httpClient.get<any>(`${this.SERVER_URL}/file/test`);
    }

    async getAllVehicle(): Promise<Vehicle[]> {
        const response = await this.client.query({
            query: GET_ALL_VEHICLE,
        }).then(data => {
            return data.data.vehicles
        }).catch(error => {
            const resVe: Vehicle[] = [];
            return resVe;
        });
        return response;
    }

}