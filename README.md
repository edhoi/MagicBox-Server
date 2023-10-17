<a name="readme-top"></a>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">MagicBox</h3>

  <p align="center">
    Self Contained Display System to either monitor a website or display messages on the unit itself, powered by POE.
    <br />
    <!--<a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>-->
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
    <!--<li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>-->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!--[![Product Name Screen Shot][product-screenshot]](https://example.com)-->

Build a website monitoring shelf system using reclaimed hardware including Odroid C2, pico projector, and POE power distrobution board and I2c LED Strip. Unit should project a message or website set in an admin panel.

<!-- Git Specific 
`github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`
-->
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Ubuntu][Ubuntu.os]][Ubuntu.com]
* [![Next][Next.js]][Next-url]
* [![Nodejs][Node.js]][Nodejs-url]
* [![Typescript]][Typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Proof of Concept starting using VM 

### Prerequisites

* Hardware
  - POE Power Delivery
  - [ODroid C2][OdroidC2-URL]
  - pico projector 

* TBD Hardware support
  - I2C led strips for status indication (Seperate Repo for this project)

* OS and Software
  Ubuntu Desktop
  Node JS and NPM
  * Monolith App
    Researching potential CMS Admin options 
    1. [Payload CMS][Payload-URL]
    2. [Strapi CMS][Strapi-URL] (leader so far)
    NextjS frontend app

### Installation

1. Install OS and Software
   * Install Ubuntu Desktop
     - VM OS parity 20.04 [version being used](https://ubuntu.com/download/alternative-downloads) 
     - Odroid c2 os (last provided version 20.04 MATE) [install instructions](https://wiki.odroid.com/getting_started/os_installation_guide)
   * nodejs and npm
      ```sh
      sudo apt install nodejs npm
      ```
2. Clone the repo
   ```sh
   git clone https://github.com/edhoi/MagicBox-Server.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start CMS and Frontend Services 
   ``` sh
   TBD
   ```
5. Configure `Ubuntu Desktop`
    Startup Applications setting
   ```sh
   firefox -kiosk `URL TO FRONTEND`
   ```
6. Restart vm/hardware to boot up to display site

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

TBD once features created
But Desired use:
Plugin ethernet to power and supply network access

Enter in address shown on display to access admin panel
update message or url to be shown on display 



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Proof Of Concept
  1. Setup VM OS and view a webpage
     - [x] Setup Ubuntu Desktop
     - [x] Autostart with out login
     - [x] Autostart into Browser (Default Firefox for now)

  2. Setup Backend/Frontend to serve a CMS and Webpage to show content
     - [ ] Create Monolithic App
       - Researching
         1. [Payload CMS][Payload-URL]
         2. [Strapi CMS][Strapi-URL] *
     - [ ] Create Display Page 
       - [ ] Should show local ip address and admin url(temp for dev)
       - [ ] Should show Content from CMS
       - [ ] Seed Default Data
     - [ ] Configure CMS and Impliment Content on Display Page
      - [ ] Basic Message
      - [ ] Website URL 
     - [ ] Error Handling 
       - [ ] Empty CMS Message
       - [ ] !200 http response

- [ ] Test POC On Actual Hardware
  1. Hardware Check
     - [ ] Ubuntu version check, last provided version was 20.04 MATE
        - [ ] Can we upgrade from last provided image?
     - [ ] Do we need lighter GUI?
       - x11
       - LightDM
       - SLiM
     - [ ] Do we need lighter Browser?
       - Chromium
       - SeaMonkey
       - Viper
       - Nyxt
       - PURE CLI webclient `Lynx` - Redefines scope of Backend/Frontend work
     - [ ] Create Startup script to trigger light GUI/browser
     - [ ] Screen Alignment Adjustment and positioning
       - TBD
     - [ ] Handle Screensaver/lockout
       - [ ] Do we need to handle burn in?
  2. Secondary Feature Creation
     - [ ] Website Url to Display
       - [ ] Squish to Fit or Display (x,y) Position of Website
         - [ ] Refresh Intervial
     - [ ] Message Display
       - [ ] Wysiwyg Font and Size
         - [ ] Scroll on length Speed/Multi Line?
     - [ ] Display Embeded Code
       - [ ] Dropped in html/js to deploy to Display Page
       - [ ] CMS Drop in templates? (ala squarespace style)
     - [ ] Image upload gallery
       - [ ] Single Image that cycles through gallery,
         - [ ] Speed/interval
       - [ ] Carousel of uploaded images squished to fit like thumbnail selection, endless loop
         - [ ] Speed 
     - [ ] Error Handling Customization
       - [ ] System Error? (backend not available? Or should this be handled with status lights)
       - [ ] Custom 4xx (Site issue dead/refuse)
       - [ ] Custom 5xx (Network Error)
  3. Security and Manipulation protection measures
     - CMS User Auth? default user/pass for first startup
        - Update username/pass
     - DNS IP address or fixed ip address setup?
     - Update frontend/backend package option on admin page?
     - OS update? 
- [ ] I2C Status Strip

<!-- See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING 
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

-->

<!-- LICENSE 
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->


<!-- CONTACT
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

 -->

<!-- ACKNOWLEDGMENTS
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

 -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Ubuntu.os]: https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white
[Ubuntu.com]: https://ubuntu.com/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Nodejs-url]: https://nodejs.org/en
[OdroidC2-url]: https://wiki.odroid.com/odroid-c2/odroid-c2
[Payload-url]: https://watch-learn.com/payload-cms/payload-and-next-js-with-local-api
[Strapi-url]: https://strapi.io/features
[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/