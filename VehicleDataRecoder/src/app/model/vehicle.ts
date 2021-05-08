import { gql } from 'apollo-boost';

export interface IVehicle {

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  carMake: string;
  carModel: string;
  vinNumber: string;
  manufacturedDate: string;
}

export class Vehicle implements IVehicle {

  id!: number;
  firstName: string;
  lastName: string;
  email: string;
  carMake: string;
  carModel: string;
  vinNumber: string;
  manufacturedDate: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    carMake: string,
    carModel: string,
    vinNumber: string,
    manufacturedDate: string) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.carMake = carMake;
    this.carModel = carModel;
    this.vinNumber = vinNumber;
    this.manufacturedDate = manufacturedDate;
  }
}

export const GET_ALL_VEHICLE = gql`
query(
  $first:Int,
  $offser:Int,
  $last:Int
){
  vehicles(
    first:$first,
    offset:$offser,
    last:$last
  ){
    totalCount
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
}
`;

export const ADD_NEW_VEHICLE = gql`
mutation(
    $firstName: String!
	$lastName: String!
	$email: String!
	$carMake: String!
	$carModel: String!
	$vinNumber: String!
	$manufacturedDate: String!
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

export const UPDATE_VEHICLE = gql`
mutation(
    $id: Int!
    $firstName: String!
	$lastName: String!
	$email: String!
	$carMake: String!
	$carModel: String!
	$vinNumber: String!
	$manufacturedDate: String!
){
    updateVehicle(updateVehicleData:{
        id:$id
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

export const DELETE_VEHICLE = gql`
mutation($vehicleId: Int!){
    deleteVehicle(deleteVehicle:{vehicleId:$vehicleId}){
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