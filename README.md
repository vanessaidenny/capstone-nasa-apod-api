![GitHub last commit](https://img.shields.io/github/last-commit/vanessaidenny/mtm6302-capstone-denn0148?color=blueviolet&style=plastic)
![GitHub contributors](https://img.shields.io/github/contributors/vanessaidenny/mtm6302-capstone-denn0148?color=brightgreen&style=plastic)

# 💻 Capstone Project

* Name: Vanessa Isabela Denny
* Student Number: 041070914
* Project: Astronomy Picture of the Day Search

### Table of Contents

- [Project Description](#description)
- [Mockup](#mockup)
- [Project Structure](#project-structure)
- [API](#🌠-api)
- [Assets & Resources](#resources)
- [License & Copyright](#license-&-copyright)

## 🪐 Project Description

<a name="description"></a>

#### Objective
A web application that will allow users to request different Astronomy Pictures of the Day by date using NASA APOD API. Users will also be able to save pictures as favourites.

#### API info

- APOD API used to retrieve APOD data based on a specific date
- JSON object contain the url to the image, the title of the image, the date of the image, and the explanation of the image
- Some of APOD are videos, the media_type property is used to determine if the day's APOD is an image or a video
- APOD JSON object can be found below
    ```
    {
    "date":"2022-03-27",
    "explanation":"Why would the surface of Titan light up with a blinding flash? The reason: a sunglint from liquid seas.  Saturn's moon Titan has numerous smooth lakes of methane that, when the angle is right, reflect sunlight as if they were mirrors.  Pictured here in false-color, the robotic Cassini spacecraft that orbited Saturn from 2004 to 2017 imaged the cloud-covered Titan in 2014 in different bands of cloud-piercing infrared light.  This specular reflection was so bright it saturated one of Cassini's infrared cameras. Although the sunglint was annoying -- it was also useful.  The reflecting regions confirm that northern Titan houses a wide and complex array of seas with a geometry that indicates periods of significant evaporation.  During its numerous passes of our Solar System's most mysterious moon, Cassini has revealed Titan to be a world with active weather -- including times when it rains a liquefied version of natural gas.",
    "hdurl":"https://apod.nasa.gov/apod/image/2203/TitanGlint_cassini_2002.jpg",
    "media_type":"image",
    "service_version":"v1",
    "title":"Titan Seas Reflect Sunlight",
    "url":"https://apod.nasa.gov/apod/image/2203/TitanGlint_cassini_960.jpg"
    }
    ```
&nbsp;

#### Features
* Allow users to search for APOD images by specifying a date or using a date picker.
* Enable users to save their favorite APOD images to a personal collection.
* Display the selected APOD image along with its title, date, and a brief description.
* Include an option to view the image in full resolution.
* Provide an option to read the full NASA APOD description in mobile version.
&nbsp;


<a name="mockup"></a>
## 🌠 Mockup 

#### Requirements

- [x] Demonstrate the different elements and user actions for the web application 
- [x] Display layouts and elements for multiple screen sizes
- [x] Establish the colours, fonts, and branding for the web application
- [x] Date format: YYYY-MM-DD
&nbsp;

#### Design Concept

1. Branding&nbsp;
The name chosen for the application is AstroGaze. It brings the app's purpose related to astronomy and the appreciation of its pictures. It is simple and easy to remember.
&nbsp;

2. Font-Family&nbsp;
Montserrat font font is used in the logo and headings. It is a modern font and creates a sense of importance for educational and informative purpose. Roboto is used for texts for being a more simple font and brings comfort in the reading time.
&nbsp;

3. Colour Palette&nbsp;
> :memo: Hex codes: #FFC65C | #332B4F | #CED5F3 | #E8E9EB | #383838
The chosen colours above represents the keywords presented in the [Moodboard](#resources) created: Discovery, Inspiration, Celestial, Wisdom. Its harmony and simplicity, the richness and variety of hues contrast and stand out from each other. The purple tones refer to the celestial theme, light and dark gray tones refer to the universe, and the orange colour is representing the sun and warmth among the other cold tones.

4. Visual Elements&nbsp;
Introduced vibrant yellow circle and incorporated rounded lines, buttons, and cards into the design, evoking the feeling of the sun and celestial bodies. The cards sport a soft, inviting light green background so that makes the visuals and colors from the image stand out.
&nbsp;

5. Application Flow&nbsp;
Chart created to design the flow of the user journey in the application presented in the [Brainstorming](#resources).



<a name="project-structure"></a>
## 🌠 Project Structure  

#### Requirements

- [x] The prototype should closely match the mockup complete in Part 2
- [x] The prototype should be responsive
- [x] The use of modern CSS Frameworks, like Bootstrap or Tailwind, for the prototype is allowed
- [x] Ensure you have permission to use any external resources use for the prototype
&nbsp;

#### Frameworks & External Resources Used
1. Bootstrap: Navbar component and icons &nbsp;
2. Font Awesome: Arrow down icon &nbsp;
3. Flatpickr: Input date picker calendar &nbsp;

#### Steps & Challenges Faced
Upon completing the mockup, I initiated the project by crafting CSS, JS, and HTML files to establish its structural foundation. I incorporated links to import CSS frameworks and commenced work on the navbar. It was a valuable learning as I delved into documentations to learn more about what and how I could implement the components. The most challenging part was determining the application's flow to ensure simplicity and user-friendliness.


<a name="api"></a>
## 🌠 API 
1. Get API Key by signing-up at https://api.nasa.gov/
2. The date value needs to be in the following format YYY-MM-DD
3. When displaying the APOD image either after a APOD search or in the favourites section, the standard url property should be used. When displaying the high definition version of the image, the hdurl property should be used.

The most challenging part was implementing every feature designed with micro interactions, like favorite icons.



<a name="resources"></a>
## 📖 Assets & Resources


- See [Capstone Project](https://imdac.github.io/mtm6302/assignments/apod-search.html)
- See [NASA APOD APIopen in new window](https://api.nasa.gov/#apod)
- See [Mockup Brainstorming and Definition](https://www.figma.com/file/v4eW0blnY735bnVhqo6VWZ/Capstone-Web-Dev-II---APOD-Search?type=whiteboard&node-id=0%3A1&t=oCVhLjvpoqAmUu0X-1)


<a name="license-&-copyright"></a>
## 📌 License & Copyright


&copy; 2023 Vanessa Denny
