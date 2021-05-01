<h3 align="center">:rotating_light: :construction:&ensp;&ensp;Work In Progress&ensp;&ensp;:construction: :rotating_light:</h3>
<h1 align="center">Vehicle Web Application</h1>

> CodeLAb assignment-01 code base that belongs to my office work. This is Angular web application. &ensp;:boat: :boat:

<h2>License</h2>

> Licenses this source under the <u>MIT License</u>,You may not use this file except in compliance with the License.
<!-- Badges -->
<p align="left">
  <a href="LICENSE.md">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" height="18">
  </a>
</p>

<h2>Content&ensp;&ensp;:book: :book:</h2>

<ul>
    <li>CSV data File uploader</li>
    <li>All CRUD operation has implemented</li>
</ul>

[![Angular](https://img.shields.io/badge/Angular-11-red)](https://angular.io/)
<img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular 10" height="27">
<img src="https://jwt.io/img/pic_logo.svg" alt="jet" height="27">
[![Build](https://img.shields.io/badge/Build-Passed-green)](https://angular.io/)

<img src="https://raw.githubusercontent.com/acervenky/animated-github-badges/master/assets/devbadge.gif" alt="Passed" height="28">

<h4 align="center">Here is a screenshot of the Login page</h4>

<P> This window use for log into application. Before upload CSV file you need to login to application. When you enter correct user email and password application will get JWT valid token. This Token will save in web browser local storage. </P>

<h4 align="center">Here is a screenshot of the UI</h4>
<!-- image -->
<p align="center">
  <img src="./assest/login.png" alt="App Screenshots" height="300" width="600">
</p>

> user this credentials for login.

| User Email    | Password      | 	 |
| ------------- |:-------------:| -----: |
| test@mail.com | test123	| Tested |
| dev@mail.com 	| dev123	| Tested |

**About CSV files upload page**

<P> This window use for upload .csv and .xlsx files. Before upload CSV file you need to select files from your local machine. You can select multiple files also. You can remove unwanted file that you have already selected. when you press submit all file will save in DataBase (PostgressQL). </P>

<h4 align="center">Here is a screenshot of the UI</h4>

| selected file            |  Selecting file               | uploading file
:-------------------------:|:--------------------------:|:--------------------------:
![](./assest/fil2.png)     |  ![](./assest/fil1.png)    | ![](./assest/fil3.png)


**About Dashboard View **

<p> This componet use for display every records in DB. after upload .CVS into database this view will show data. as well as user can <b>Edit</b> and <b> Delete</b> each and every records one by one.  </p>

<h4 align="center">Here is a screenshot of the UI</h4>

| Dashboard View            |  Edit Vehicle             |  Delete Vehicle         |    Add New Vehicle           |
:-------------------------:|:--------------------------:|:--------------------------:|:-------------------------:|
![](./assest/crud1.png)     |  [](./assest/edit1.png)  | ![](./assest/delete1.png) |![](./assest/add1.png)   |
|                           | [](./assest/edit2.png)   |                            |                           |
