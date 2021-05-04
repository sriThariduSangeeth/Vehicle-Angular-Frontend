import { Injectable } from "@angular/core";
import Observable from "zen-observable-ts";
import * as io from "socket.io-client";

@Injectable({
    providedIn: 'root'
})
export class FileSocketService {

    readonly BASE_URL: string = 'http://localhost:4000/websok';
    private socket: SocketIOClient.Socket;
    private soc: any;

    constructor() {
        this.socket = io.connect(this.BASE_URL);
    }

    listenToServer(eventName: string): Observable<any> {
        return new Observable(sub => {
            this.socket.on(eventName, (data: any) => {
                sub.next(data);
            });
        });
    }

    emitToServer(evenrtName: string, data: any) {
        console.log(evenrtName);

        this.socket.emit(evenrtName, { data: "hello hello" });
    }




}