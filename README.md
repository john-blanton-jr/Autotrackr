<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://gitlab.com/johnbjr76/Autotrackr">
    <img src="images/autotrackr.png" alt="Logo" height="50">
  </a>

  <h3 align="center">Automobile Dealership Management System</h3>

  <p align="center">
    Group Project From Bootcamp
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project


## Overview
Autotrackr is a comprehensive application designed to manage various facets of an automobile dealership. The core functionalities encompass inventory management, service center appointments, and sales tracking. Built using Django and React, Autotrackr showcases the power of microservices architecture and RESTful APIs.

## Features
<ins>### Inventory Management:</ins>

**Inventory API**: A RESTful API that offers endpoints for Manufacturer, VehicleModel, and Automobile data.

**Front-end Integration**: A React-based interface that interacts with the Inventory API, allowing users to view and manage the inventory seamlessly.
<br>
<br>
### Service Center Management:

**Service API**: Handles the creation and management of automobile service appointments.

**Service Poller**: Integrates with other services to ensure real-time updates and synchronization.
<br>
<br>
### Sales Management:

**Sales API**: Manages sales data, including transactions, salespeople, and customer details.

**Sales Poller**: Facilitates integration with other services, ensuring up-to-date sales information.
<br>
<br>
### Database: 
A robust PostgreSQL database that stores data for all microservices, ensuring data integrity and reliability.
<br>
<br>
### Collaborative Development:
The project was developed in pairs, with each member taking responsibility for specific microservices and their corresponding front-end components.
<br>
<br>
## Development Process

- The project started with a scaffold of microservices, a front-end application, and a database.

- Team members chose specific microservices to implement. One focused on the Service microservice (including its API, poller, and React components), while the other tackled the Sales microservice.

- Both developers collaborated on the Inventory service's front-end implementation.

- React components were developed to display specific resources (service or sales) and provide forms for data creation. Additional components were created for related resources, such as salespeople, customers, technicians, and service appointments.

- The RESTful APIs for each service were designed to support POST and GET endpoints at a minimum, with the option to include DELETE endpoints for enhanced development flexibility.
<br>
<br>
<br>
![react vite django files screenshot](/images/Autotracker_screenshot_01.png "Boilerplate FIles")
![react vite django files screenshot](/images/Autotracker_screenshot_02.png "Boilerplate FIles")
![react vite django files screenshot](/images/Autotracker_screenshot_03.png "Boilerplate FIles")
![react vite django files screenshot](/images/Autotracker_screenshot_04.png "Boilerplate FIles")

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
* ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
* ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Fork and clone repository

### Prerequisites

Install Docker

### Installation


1. Clone the repo
   ```sh
   git clone https://gitlab.com/johnbjr76/Autotrackr.git
   ```
2. Create the database volume in docker
   ```sh
   docker volume create beta-data
   ```
3. Build the Docker images
   ```sh
   docker-compose build
   ```
4. Start the Docker containers
   ```sh
   docker-compose up
   ```


<!-- USAGE EXAMPLES -->
## Usage

Can be used or adapted any way you would like. Feel free to clone and change it up to your specifications. 


<!-- ROADMAP -->
## Roadmap

No roadmap or future support planned.  Any questions feel free to send me an email hello@johnblanton.com.



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- CONTACT -->
## Contact

John Blanton - hello@johnblanton.com

Project Link: [https://gitlab.com/johnbjr76/react_vite_django_template](https://gitlab.com/johnbjr76/react_vite_django_template)


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Markdown Badges](https://github.com/Ileriayo/markdown-badges)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)


<p align="right">(<a href="#readme-top">back to top</a>)</p>




