import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import ApolloClient, { gql } from 'apollo-boost';
import { Observable } from "rxjs";
import { retry } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ADD_NEW_VEHICLE, DELETE_VEHICLE, GET_ALL_VEHICLE, UPDATE_VEHICLE, Vehicle } from "../model/vehicle";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    SERVER_URL: string = environment.apiUrl;

    client = new ApolloClient({
        uri: 'http://localhost:3000/graphql'
    });

    constructor(private httpClient: HttpClient,
        private _snackBar: MatSnackBar) { }

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

    async updateVehicle(vehicle: Vehicle): Promise<Vehicle> {
        const response = await this.client.mutate({
            mutation: UPDATE_VEHICLE,
            variables: {
                "id": vehicle.id,
                "firstName": vehicle.firstName,
                "lastName": vehicle.lastName,
                "manufacturedDate": vehicle.manufacturedDate,
                "email": vehicle.email,
                "carMake": vehicle.carMake,
                "carModel": vehicle.carModel,
                "vinNumber": vehicle.vinNumber
            }
        }).then(res => {
            this._snackBar.open(res.data.updateVehicle.id + " Vehicle Updated", res.data.updateVehicle.vinNumber, {
                duration: 5 * 1000,
            });
            return res.data.updateVehicle;
        }).catch(error => {
            console.log(error);
            this._snackBar.open("New Vehicle couldn't update", error.message, {
                duration: 5 * 1000,
            });
            return error;
        });
        return response;
    }

    async addNewVehicle(vehicle: Vehicle) {
        const response = await this.client.mutate({
            mutation: ADD_NEW_VEHICLE,
            variables: {
                "firstName": vehicle.firstName,
                "lastName": vehicle.lastName,
                "manufacture": vehicle.manufacturedDate,
                "email": vehicle.email,
                "carMake": vehicle.carMake,
                "carModel": vehicle.carModel,
                "vinNumber": vehicle.vinNumber
            }
        }).then(res => {
            this._snackBar.open("New Vehicle Added", res.data.createVehicle.vinNumber, {
                duration: 5 * 1000,
            });
            return res.data.createVehicle;
        }).catch(error => {
            this._snackBar.open("New Vehicle couldn't add", error.message, {
                duration: 5 * 1000,
            });
            return error;
        });
        return response;
    }

    async deleteVehicle(vehicleid: number) {
        const response = await this.client.mutate({
            mutation: DELETE_VEHICLE,
            variables: {
                "vehicleId": vehicleid,
            }
        }).then(res => {
            this._snackBar.open("Delete Vehicle successfully", res.data.deleteVehicle.vinNumber, {
                duration: 5 * 1000,
            });
            return res.data.deleteVehicle;
        }).catch(error => {
            this._snackBar.open("Vehicle couldn't Delete", error.message, {
                duration: 5 * 1000,
            });
            return error;
        });
        return response;
    }

}