import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have skills in front-end technologies like HTML and React.js, as well as back-end technologies like Node.js, MySQL, PHP, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;


export const PROJECTS = [
    {
        title: " Restaurant Management Web Application",
        image: project1,
        description:
          "Built a restaurant management system using the MERN stack (MongoDB, Express, React, Node.js).The system caters to both customers and restaurant staff (client base).Implemented real-time updates for all functionalities within the system..",
        technologies: ["MERN Stack Technology"],
        link: "https://github.com/Novatech-Nexus",
      },
  {
    title: "Ticket Reservation Web Application",
    image: project2,
    description:
      "Focused on front-end development using HTML, CSS, and JavaScript to create user-friendly interfaces. Designed and implemented the UI for searching train schedules, selecting seats, and processing reservations. Collaborated with the back-end team using Java and MySQL for seamless data processing and reservation storage.",
    technologies: ["HTML", "CSS", "Java", "mySQL"],
    link: "https://github.com/buddhima2002/Train-Ticket-Reservation-System",
  },
  {
    title: " Taxi Service Web Application",
    image: project3,
    description:
      "I designed and implemented the user interface with HTML for structure, CSS for styling, and JavaScript for dynamic interactions. I collaborated with team members working on the back-end using PHP and SQL Server, ensuring seamless front-end and data storage communication.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "SQLServer"],
    link: "https://github.com/buddhima2002/Taxi-Service-Application",
  },
  {
    title: " Contacts - Mobile Application",
    image: project4,
    description:
      "I developed a mobile application for managing personal data using Kotlin for Android. It supports CRUD operations with SQLite as the embedded database.",
    technologies: ["Kotlin", "SQLite"],
    link: "https://github.com/buddhima2002/ContactBook-Mobile-Application",
  },

  {
    title: "  Rockets - Mobile Game Application",
    image: project5,
    description:
      " Designed space shuttle gameplay through an asteroid field, using Kotlin for an efficient Android game engine.",
    technologies: ["Kotlin"],
    link: "https://github.com/buddhima2002/Rocket-Game-Mobile-Application",
    

  },
];

export const CONTACT = {
  address: "Plot.12, Prime Princess, Hawpigewatta, Poddala, Galle, Sri Lanka",
  phoneNo: "+94 76 5831021 ",
  email: "buddhimma@gmail.com",
};