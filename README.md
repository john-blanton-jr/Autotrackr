<a name="readme-top"></a>







<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://gitlab.com/johnbjr76/Autotrackr">
    <img src="images/autotrackr.png" alt="Logo" width="100">
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project


Overview
Autotrackr is a comprehensive application designed to manage various facets of an automobile dealership. The core functionalities encompass inventory management, service center appointments, and sales tracking. Built using Django and React, Autotrackr showcases the power of microservices architecture and RESTful APIs.

Features
Inventory Management:

Inventory API: A RESTful API that offers endpoints for Manufacturer, VehicleModel, and Automobile data.
Front-end Integration: A React-based interface that interacts with the Inventory API, allowing users to view and manage the inventory seamlessly.
Service Center Management:

Service API: Handles the creation and management of automobile service appointments.
Service Poller: Integrates with other services to ensure real-time updates and synchronization.
Sales Management:

Sales API: Manages sales data, including transactions, salespeople, and customer details.
Sales Poller: Facilitates integration with other services, ensuring up-to-date sales information.
Database: A robust PostgreSQL database that stores data for all microservices, ensuring data integrity and reliability.

Collaborative Development: The project was developed in pairs, with each member taking responsibility for specific microservices and their corresponding front-end components.

Development Process
The project started with a scaffold of microservices, a front-end application, and a database.
Team members chose specific microservices to implement. One focused on the Service microservice (including its API, poller, and React components), while the other tackled the Sales microservice.
Both developers collaborated on the Inventory service's front-end implementation.
React components were developed to display specific resources (service or sales) and provide forms for data creation. Additional components were created for related resources, such as salespeople, customers, technicians, and service appointments.
The RESTful APIs for each service were designed to support POST and GET endpoints at a minimum, with the option to include DELETE endpoints for enhanced development flexibility.

![react vite django files screenshot](/images/Autotracker_screenshot_01.png "Boilerplate FIles")
![react vite django files screenshot](/images/Autotracker_screenshot_02.png "Boilerplate FIles")
![react vite django files screenshot](/images/Autotracker_screenshot_03.png "Boilerplate FIles")
![react vite django files screenshot](/images/Autotracker_screenshot_04.png "Boilerplate FIles")

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
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
   git clone https://gitlab.com/johnbjr76/react_vite_django_template.git
   ```
3. Build the Docker images
   ```sh
   docker-compose build
   ```
4. Start the Docker containers
   ```sh
   docker-compose up
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use as a starter for your next project. The Django project folder is named django_project. The Django app folder is named backend_rest. Both are found in the api folder in the mande Django folder django-backend.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Add bootstrap
- [ ] Add JWT Authentication


See the [open issues](https://gitlab.com/johnbjr76/react_vite_django_template/-/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

John Blanton - hello@johnblanton.com

Project Link: [https://gitlab.com/johnbjr76/react_vite_django_template](https://gitlab.com/johnbjr76/react_vite_django_template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Markdown Badges](https://github.com/Ileriayo/markdown-badges)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

