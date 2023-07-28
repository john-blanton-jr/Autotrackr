# CarCar

Team:

- Person 1 - Franz Espinosa - Service
- Person 2 - John Blanton - Sales

## Design

## Service microservice

The Service models contain Technician, Appointment, and AutomobileVO models. The AutomobileVO is used with a poller to pull automobile data such as vin lookup from the inventory microservice. Several view/API's were created for each of the models to GET and POST so you can create and view the models data.

## Sales microservice

The Sales models contain Salesperson, Customer, Sale, and AutomobileVO models. The AutomobileVO is used with a poller to pull automobile data such as vin lookup from the inventory microservice. Several view/API's were created for each of the models to GET and POST so you can create and view as a the models data.
