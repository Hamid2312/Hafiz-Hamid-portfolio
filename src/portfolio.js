/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hamid ",
  title: "Hi all, I'm Hamid Ali",
  subTitle: emoji(
    "A passionate fronetend developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QxhUi-0ULkXQXB5mizoktNPTNJNHTUIN/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Hamid2312",
  linkedin: "https://www.linkedin.com/in/hafiz-hamid-b40795336/",
  gmail: "hafizalig312@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100086541443646",
  // medium: "https://medium.com/@saadpasta",
  instagram: "https://www.instagram.com/hamid__ali13/?hl=en",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

// ... (around line 137)

const skillsSection = {
 
  title: "Core Competencies",
  subTitle: "A passionate Frontend Developer specializing in user-centric design and high-performance, modern web interfaces.",
  skills: [
    emoji(
      "⚡ Developing and maintaining highly interactive, responsive, and performance-driven User Interfaces (UI)."
    ),
    emoji("⚡ Expertise in building Single Page Applications (SPA) using modern JavaScript frameworks and deploying Progressive Web Apps (PWA)."),
    emoji(
      "⚡ Integrating RESTful APIs and third-party services to seamlessly connect the application layer with the user interface."
    )
  ], // <-- COMMA needed here to continue the object definition

  /* Make Sure to include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

  softwareSkills: [ // <-- NOW part of the skillsSection object
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    // ... all other softwareSkills ...
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
{
  skillName: "css3",
  fontAwesomeClassname: "fab fa-css3-alt"
},

{
  skillName: "sass",
  fontAwesomeClassname: "fab fa-sass"
},
{
  skillName: "bootstrap",
  fontAwesomeClassname: "fab fa-bootstrap"
},
{
  skillName: "git",
  fontAwesomeClassname: "fab fa-git"
},
{
  skillName: "github",
  fontAwesomeClassname: "fab fa-github"
}, 
{
  skillName: "npm",
  fontAwesomeClassname: "fab fa-npm"
},
{
  skillName: "yarn",
  fontAwesomeClassname: "fab fa-yarn"
}, {
  // skillName: "visual-studio-code",
  // fontAwesomeClassname: "fab fa-visual-studio-code"
},
{
  skillName: "reactjs",
  fontAwesomeClassname: "fab fa-react"
},
{
  skillName: "API intergration",
  fontAwesomeClassname: "fas fa-plug"
},
{
  skillName: "responsive-design",
  fontAwesomeClassname: "fas fa-mobile-alt"
}, 
{
  skillName: "redux",
  fontAwesomeClassname: "fas fa-cubes"
},
{
  skillName: "problem solving",
  fontAwesomeClassname: "fas fa-lightbulb"
}

  ], // <-- COMMA needed here to continue the object definition
  
  display : true // <-- NOW part of the skillsSection object
}; // <-- FINAL closing brace for the skillsSection object
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Virtual University of Pakistan",
       logo: require("./assets/images/virtualunilogo.jpg"), // You'll need to create or find a logo asset for VU
      subHeader: "Bachelor of Science in Computer Science (BSCS)",
      duration: "September 2024 - Present (Expected Graduation: 2028)",
      desc: "Currently pursuing a degree with a focus on modern web development and software engineering principles. Dedicated to maintaining a strong CGPA.",
      descBullets: [
        "Currently achieving a high CGPA in core computer science courses.",
        "Actively applying learned concepts in personal frontend development projects."
      ]
    },
    // I've removed the Stanford entry, as you only provided one institution.
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "Famefing Technologies ",
      // Replace with the path to the Famefing logo, if available
      companylogo: require("./assets/images/FamefingLogo.png"),
      date: "November 2024 – February 2025",
      desc: "Focused on developing high-performance, responsive Single-Page Applications (SPAs) and building a robust component library.",
      descBullets: [
        "Developed 5+ fully responsive SPAs using **HTML, CSS, JavaScript, and React.js**, ensuring cross-browser compatibility and optimized performance.",
        "Designed and implemented dynamic, visually appealing user interfaces, significantly enhancing **User Experience (UX)** and engagement.",
        "Built and optimized **reusable React components**, effectively managing hooks and implementing efficient rendering techniques to enhance scalability."
      ]
    },
    {
      role: "Frontend Developer (Internship/Training)",
      company: "Zaff Institute ",
      // Replace with the path to the Zaff Institute logo, if available
companylogo: require("./assets/images/ZaffLogo.jpg"),
      date: "March 2024 – September 2024",
      desc: "Intensive training focused on modern web standards, responsive design, and version control best practices.",
      descBullets: [
        "Integrated **responsive design techniques** across 10+ web applications, improving accessibility and mobile usability.",
        "Learned and applied **React.js** to develop dynamic, interactive user interfaces, strengthening application interactivity and performance.",
        "Utilized **Git and GitHub** for version control, streamlining collaboration and maintaining clean, organized codebases."
      ]
    },
    {
      role: "Freelance Frontend Developer",
      company: "Fiverr & Online Platforms",
      // If you have a Fiverr/Freelancer logo, use it here.
       companylogo: require("./assets/images/FiverrLogo.png"),
      date: "Ongoing / Project-Based",
      desc: "Providing tailored web development solutions to clients globally, focusing on rapid prototyping and complete project delivery.",
      descBullets: [
        "Successfully delivered multiple client projects on time, utilizing platforms like Fiverr to manage tasks and client communication.",
        "Translated client requirements and wireframes into precise, high-quality, and scalable frontend code (HTML, CSS, JavaScript).",
        "Managed project lifecycle from initial scope definition and design to final deployment and maintenance."
      ]
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// --- START: Your Updated Project Data ---

const bigProjects = {
  title: "Major Development Projects",
  subtitle: "A collection of responsive web applications and frontend solutions built using React and modern HTML/CSS",
  projects: [
 
  
    {
      // Project 3: Famefing Landing Page (HTML/CSS)
      image: require("./assets/images/famefing.png"), // PLACEHOLDER: Ensure famefing.png exists in your assets folder
      projectName: "My Famefing (Personal Brand)",
      projectDesc: "A personalized landing page and profile site developed using modern frontend technologies. Emphasizes smooth, interactive animations, clean code, and establishing a professional brand identity.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://hamid2312.github.io/myfamefing/"
        }
      ]
    },
    {
      // Project 4: General HTML Project (Vercel)
      image: require("./assets/images/index.png"), // PLACEHOLDER: Ensure index.png exists in your assets folder
      projectName: "Foundational Web Project",
      projectDesc: "A foundational web project demonstrating strong grasp of HTML5 and CSS3 principles. Focuses on semantic structure, accessibility best practices, and clean, modular design.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://html-project-l9xw.vercel.app/"
        }
      ]
    },
      {
      // Project 2: Noor-e-Nisa E-commerce (React)
      image: require("./assets/images/noor-e-nisa.png"), // PLACEHOLDER: Ensure noor-e-nisa.png exists in your assets folder
      projectName: "Noor-e-Nisa E-commerce",
      projectDesc: "A dedicated e-commerce platform for Pakistani ladies' dresses built with React. Showcases dynamic product catalogs, a modern cart system, and elegant, brand-focused UI/UX.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://noor-e-nisa.vercel.app/"
        }
      ]
    },
       {
      // Project 1: MyPIA Flight Portal (React)
      image: require("./assets/images/mypia.png"), // PLACEHOLDER: Ensure mypia.png exists in your assets folder
      projectName: "MyPIA Flight Portal",
      projectDesc: "A modern, feature-rich flight booking portal built with React. Focuses on intuitive user experience, real-time flight information, and responsive layout across all devices.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://mypia.vercel.app/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// If you need to export this object (e.g., in a separate data file):
// export default bigProjects;

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Frontend Developer Certification (Zaff Institute)",
      subtitle:
        "Received certification as a Frontend Developer from Zaff Institute in September 2024.",
      image: require("./assets/images/ZaffLogo.jpg"), // Placeholder for Zaff Institute logo
      imageAlt: "Zaff Institute Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1qi8g1EJuqGKXp7cv4jbyF_A4zzSMCd1U/view?usp=drivesdk" // Replace with the actual URL of your Zaff certificate
        }
      ]
    },
    {
      title: "Frontend Developer Certification (Famefing Technologies)",
      subtitle:
        "Received certification as a Frontend Developer from Famefing Technologies in February 2025.",
      image: require("./assets/images/FamefingLogo.png"), // Placeholder for Famefing Technologies logo
      imageAlt: "Famefing Technologies Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1h7kXf8HI399SRrlbTs_AnopOHixJREgF/view?usp=drivesdk" // Replace with the actual URL of your Famefing certificate
        }
      ]
    },
    {
      title: "C++ Essentials 1",
      subtitle:
        "Completed C++ Essentials 1 certification from Cisco Networking Academy in June 2025.",
      image: require("./assets/images/ciscoLogo.png"), // Placeholder for Cisco Networking Academy logo
      imageAlt: "Cisco Networking Academy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1W3VFQ3wrZ_oWfd5JSAUilYJWJ9uL5mwF/view?usp=drivesdk" // Replace with the actual URL of your Cisco certificate
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  // display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://drive.google.com/file/d/1QxhUi-0ULkXQXB5mizoktNPTNJNHTUIN/view?usp=drivesdk"
  ],
  // display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Hafiz Hamid's resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3249462896",
  email_address: "hafizalig312@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  // display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
