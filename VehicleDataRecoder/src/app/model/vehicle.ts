import { gql } from 'apollo-boost';

export interface Vehicle {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    vinNumber: string;
    manufacturedDate: string;

    // constructor(id: number,
    //     firstName: string,
    //     lastName: string,
    //     email: string,
    //     carMake: string,
    //     carModel: string,
    //     vinNumber: string,
    //     manufacturedDate: string) {
    //     this.id = id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.email = email;
    //     this.carMake = carMake;
    //     this.carModel = carModel;
    //     this.vinNumber = vinNumber;
    //     this.manufacturedDate = manufacturedDate;
    // }
}

export const GET_ALL_VEHICLE = gql`
query{
  vehicles{
    id
    firstName
    lastName
    email
    carMake
    carModel
    vinNumber
    manufacturedDate
  }
}
`;

export const SAVE_NEW_VEHICLE = gql`
mutation(
    $firstName: String!
	$lastName: String!
	$email: String!
	$carMake: String!
	$carModel: String!
	$vinNumber: String!
	$manufacturedDate: Date!
){
    createVehicle(createVehicleData:{
      firstName:$firstName,
      lastName:$lastName,
      email:$email,
      carModel:$carMake,
      carMake:$carModel,
      vinNumber:$vinNumber,
      manufacturedDate:$manufacturedDate
    }){
        id
        firstName
        lastName
        email
        carMake
        carModel
        vinNumber
        manufacturedDate
    }
  }
`;