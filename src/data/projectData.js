export const projects = [

  /////////////////////////////////////////////////////////
  //                    MASIT                            //
  /////////////////////////////////////////////////////////
  {
    slug: "masit-wordpress-redesign",
    // For card
    thumbnail: "/imgs/projects/masit/thumbnail.jpg",
    title: "Government Tech Association Website Redesign",
    type_id: "web",
    type: "Web & UI/UX",
    client: "Designed for MASIT - N. Macedonian Official ICT Chamber of Commerce",
    // For project page
    //Btns
    btns: [
      {
        type: "page", //figma, page, github
        url: "https://masit.avengaacademy.com/",
      },
      {
        type: "git", //figma, page, github
        url: "https://github.com/ognen-manevski/masit-live-test",
      },
    ],
    //section 1
    section1: {
      title: "Project Overview",
      content: `

<h4>Client</h4>
MASIT is the official chamber of commerce for the ICT sector in North Macedonia - a <strong> government-supported organization</strong> representing the national tech industry. The goal of this project was to redesign their website with a modern, technology-forward look while preserving brand consistency.

<h4>My Role</h4>
As <strong>Team Leader</strong>, I was responsible for guiding the project’s technical and visual direction. While the project was a group assignment, I independently handled the majority of the <strong>design, development, and WordPress integration</strong> to ensure a cohesive and high-quality final result.

<h4>Overview</h4>
The project focused on delivering a futuristic user experience anchored by an <strong>interactive AI-themed hero section</strong>. This included a looping video background and a robotic head animation that responds to mouse movement. The site was built with <strong>WordPress, Astra Theme, and custom Elementor templates</strong>, extended with <strong>custom PHP, CSS, and JavaScript</strong> to bring the animation and interaction layers to life.

<h4>Development Approach</h4>
The website was initially built in <strong>plain HTML and CSS</strong> based on our Figma design, ensuring precise layout control and performance. It was later migrated into <strong>WordPress using Elementor</strong>, with custom HTML, JavaScript, and PHP snippets added to support interactive sections and tailored components.


            `,
      image: "/imgs/projects/masit/pc.png",
      imageType: "mockup" // "mockup" or "plain"
    },
    //section 1
    section2: {
      title: "Key Features",
      content: `
<ul>


  <li><strong>Interactive hero section</strong> with AI-generated looping background video</li>
  <li><strong>Mouse-responsive robot animation</strong> with layered directional video transitions</li>
  <li><strong>Custom Elementor layouts</strong> with styled sections for news, categories, and events</li>
  <li><strong>Responsive design</strong> optimized across screen sizes and devices</li>
  <li><strong>Performance-optimized assets</strong> using lightweight video and fallback states</li>
  <li><strong>WordPress customization</strong> using theme hooks, PHP snippets, and tailored UI blocks</li>

</ul>
            `,
      image: "/imgs/projects/masit/mobile.png",
      imageType: "mockup"
    },
    madeUsing: ["wp", "html", "css", "js", "figma", "ae"],
    galleryImages: [
      {
        id: 1,
        src: "/imgs/projects/masit/Home-Masit.png",
        title: "Home Page Design"
      },
      {
        id: 2,
        src: "/imgs/projects/masit/chlenki",
        title: "Membership Page"
      },
      {
        id: 3,
        src: "/imgs/projects/masit/kontakt.png",
        title: "Contact Page Design"
      },
      {
        id: 4,
        src: "/imgs/projects/masit/partneri.png",
        title: "Partners Page"
      },
      {
        id: 5,
        src: "/imgs/projects/masit/patron-partneri.png",
        title: "Patron Partners Page"
      },
      {
        id: 6,
        src: "/imgs/projects/masit/proekti.png",
        title: "Projects Page"
      },
      {
        id: 7,
        src: "/imgs/projects/masit/regulativa.png",
        title: "MASIT Regulations"
      },
      {
        id: 8,
        src: "/imgs/projects/masit/stani-chlen.png",
        title: "Become a Member"
      },
      {
        id: 9,
        src: "/imgs/projects/masit/tela.png",
        title: "Representatives"
      },
      {
        id: 10,
        src: "/imgs/projects/masit/zis.png",
        title: "Services for ZIS"
      },
    ]
  },

  /////////////////////////////////////////////////////////
  //                    REACT                            //
  /////////////////////////////////////////////////////////
  {
    slug: "roofline-react-real-estate",
    // For card
    thumbnail: "/imgs/projects/React/thumbnail.jpg",
    title: " Real Estate Website with Animated React UI",
    type_id: "web",
    type: "Web & UI/UX",
    client: "Academy Project",
    // For project page
    //Btns
    btns: [
      {
        type: "page", //figma, page, github
        url: "https://ognen-manevski.github.io/roofline/",
      },
      {
        type: "git", //figma, page, github
        url: "https://github.com/ognen-manevski/roofline",
      },
    ],

    //section 1
    section1: {
      title: "Project Overview",
      content: `
<p>
A modern real estate web app built with React, featuring interactive UI, animated components, and dynamic listing filters. The project emphasizes a clean visual structure and high user engagement through advanced animations.
</p>
`,
      image: "/imgs/projects/React/pc.jpg",
      imageType: "mockup" // "mockup" or "plain"
    },
    //section 1
    section2: {
      title: "Key Features",
      content: `
<ul>
  <li><strong>Animated listing cards:</strong> Smooth <code>GSAP</code> animations bring each property card to life as users scroll.</li>
  <li><strong>Multiple carousels:</strong> Property sections are organized in horizontally scrollable carousels with dedicated navigation controls.</li>
  <li><strong>Swipeable sliders:</strong> Implemented with <code>Embla Carousel</code> for touch-friendly, smooth swiping on mobile and desktop.</li>
  <li><strong>Scroll-triggered animations:</strong> Content sections animate into view for a polished, guided browsing experience.</li>
  <li><strong>Responsive filters:</strong> Users can refine property listings by type, location, and price with instant updates.</li>
  <li><strong>Fully responsive layout:</strong> Ensures consistent usability and aesthetics across devices.</li>
</ul>
            `,
      image: "/imgs/projects/React/mobile.jpg",
      imageType: "mockup"
    },
    madeUsing: ["react", "vite", "gsap"],
    galleryImages: [
      {
        id: 1,
        src: "/imgs/projects/React/Homepage.jpg",
        title: "Home Page Design"
      },
      {
        id: 2,
        src: "/imgs/projects/React/Listings.jpg",
        title: "Property Listings + Search & Filter"
      },
      {
        id: 3,
        src: "/imgs/projects/React/About us.jpg",
        title: "About Us Page Design",
      }
    ]
  },

  /////////////////////////////////////////////////////////
  //                  Bootstrap                          //
  /////////////////////////////////////////////////////////
  {
    slug: "fitzone-bootstrap-custom-site",
    // For card
    thumbnail: "/imgs/projects/Responsive-Web-Design-With-Bootstrap5/thumbnail.jpg",
    title: "Fitness Site with Custom Bootstrap & 3D Interactions",
    type_id: "web",
    type: "Web & UI/UX",
    client: "Academy Project",
    // For project page
    //Btns
    btns: [
      {
        type: "page", //figma, page, github
        url: "https://ognen-manevski.github.io/fitzone/",
      },
      {
        type: "git", //figma, page, github
        url: "https://github.com/ognen-manevski/fitzone",
      },
    ],

    //section 1
    section1: {
      title: "Project Overview",
      content: `
<p>
  This is a <strong>responsive fitness website</strong> built entirely using <strong>Bootstrap’s grid and component system</strong>, with heavy customization.
  The design leverages Bootstrap's utility classes, layout system, and components, while overriding its default styles through a custom stylesheet.
  I modified Bootstrap’s default appearance by targeting its class names and selectively applying custom CSS variables, spacing, typography, and color overrides to better match the project's aesthetic.
<br>
  <strong>Interactive 3D elements</strong> were created in 
  <a href="https://spline.design" target="_blank" rel="noopener noreferrer"><strong>Spline</strong></a> and embedded into the layout.
</p>
`,
      image: "/imgs/projects/Responsive-Web-Design-With-Bootstrap5/mockup-pc.jpg",
      imageType: "mockup" // "mockup" or "plain"
    },
    //section 1
    section2: {
      title: "Key Features",
      content: `
<ul>
  <li><strong>Custom-styled Bootstrap base:</strong> Bootstrap components (cards, buttons, navbar, etc.) were adapted with custom CSS for a modern, branded look.</li>
  <li><strong>Exercise library & nutrition plans:</strong> Dynamic pages powered by a JSON-based data structure, built to be easily scalable.</li>
  <li><strong>Animated sections:</strong> Scroll-triggered animations and interactive effects built using custom CSS and keyframes.</li>
  <li><strong>Other sections:</strong> Feature highlights, coaches carousel, pricing plans, and "Why Us" showcase for credibility.</li>
</ul>
            `,
      image: "/imgs/projects/Responsive-Web-Design-With-Bootstrap5/mobile.jpg",
      imageType: "mockup"
    },
    madeUsing: ["bs", "vite", "css"],
    galleryImages: [
      {
        id: 1,
        src: "/imgs/projects/Responsive-Web-Design-With-Bootstrap5/home.png",
        title: "Home Page Design"
      },
    ]
  },

  /////////////////////////////////////////////////////////
  //                    JS                               //
  /////////////////////////////////////////////////////////
  {
    slug: "api-powered-gallery",
    // For card
    thumbnail: "/imgs/projects/Client site development with JS/thumbnail.jpg",
    title: "Dynamic Media Browser Built with Pexels API",
    type_id: "web",
    type: "Web & UI/UX",
    client: "Academy Project",
    // For project page
    //Btns
    btns: [
      {
        type: "page", //figma, page, github
        url: "https://ognen-qinshift.github.io/pixelbloom/",
      },
      {
        type: "git", //figma, page, github
        url: "https://github.com/ognen-qinshift/pixelbloom",
      },
    ],

    //section 1
    section1: {
      title: "Project Overview",
      content: `
This web app was built as an <strong>academy project</strong> focused on API integration and modern front-end techniques. It uses the <a href="https://www.pexels.com/api/" target="_blank" rel="noopener noreferrer">Pexels API</a> to fetch and display high-quality images and videos in a sleek, responsive interface.

<h4>Goals</h4>
The primary goal was to create a fully functional, visually appealing photo search experience that mimics the feel of a professional media browser. Emphasis was placed on UI/UX principles, performance, and accessibility.

<h4>Approach</h4>
PixelBloom is built with plain <strong>HTML, CSS, and JavaScript</strong>, with no front-end frameworks, showcasing a solid grasp of native browser capabilities. Clean code structure and modular design patterns were followed to make the app scalable and easy to maintain.
            `,
      image: "/imgs/projects/Client site development with JS/thumbnail.jpg",
      imageType: "plain" // "mockup" or "plain"
    },
    //section 1
    section2: {
      title: "Features",
      content: `
<ul>
  <li>
    <h4>Media Search</h4>
    Search for <strong>images</strong> and <strong>videos</strong> directly from the Pexels API. Enter a keyword and instantly browse high-quality results.
  </li>
  <li>
    <h4>Filters & Collections</h4>
    Refine your results using filters like <strong>color, orientation, and size</strong>. Explore curated <strong>collections</strong> or dive into specific categories.
  </li>
  <li>
    <h4>Responsive UI</h4>
    The design adapts seamlessly across devices, offering a fluid and consistent experience on both desktop and mobile.
  </li>
  <li>
    <h4>Video Preview</h4>
    Hovering over video thumbnails provides a smooth preview, enhancing discoverability and UX.
  </li>
  <li>
    <h4>Infinite Scrolling</h4>
    Content loads dynamically as you scroll, creating a fast and uninterrupted browsing experience.
  </li>
  <li>
    <h4>Download Options</h4>
    Download any image or video in multiple resolutions with a single click.
  </li>
</ul>
            `,
      image: "/imgs/projects/Client site development with JS/phone-mockup.png",
      imageType: "mockup"
    },
    madeUsing: ["html", "css", "js"],
    galleryImages: [
      {
        id: 1,
        src: "/imgs/projects/Client site development with JS/home.png",
        title: "Home Page Design"
      },
      {
        id: 2,
        src: "/imgs/projects/Client site development with JS/images-search.png",
        title: "Images Search"
      },
      {
        id: 3,
        src: "/imgs/projects/Client site development with JS/photo-modal.png",
        title: "Photo Modal",
      },
      {
        id: 4,
        src: "/imgs/projects/Client site development with JS/collections.png",
        title: "Collections Page",
      },
      {
        id: 5,
        src: "/imgs/projects/Client site development with JS/collection-view.png",
        title: "Collections Preview Page",
      }
    ]
  },

  /////////////////////////////////////////////////////////
  //                    WP                               //
  /////////////////////////////////////////////////////////
  {
    slug: "car-rental-wordpress-site",
    // For card
    thumbnail: "/imgs/projects/Content_management_systems_WordPress/thumbnail.jpg",
    title: "Custom WordPress Car Rental Website with WooCommerce Integration",
    type_id: "web",
    type: "Web & UI/UX",
    client: "Academy Project",
    // For project page
    //Btns
    btns: [],
    //section 1
    section1: {
      title: "Project Overview",
      content: `

An <strong>academy project</strong> built locally with <strong>XAMPP</strong> for the WordPress development course.

<h4>Overview</h4>
A custom car rental website using <strong>WordPress, Elementor, Astra</strong>, and <strong>WooCommerce</strong>. Designed to simulate a real rental business with full catalog, filtering, and booking features.

<h4>Implementation</h4>
Used <strong>WooCommerce</strong> for car listings and rental logic, extended with plugins and <strong>custom hooks</strong>. Added custom sections for driver booking, search, filtering, and pricing using <strong>Contact Form 7</strong>, CSS, JS, and PHP.

            `,
      image: "/imgs/projects/Content_management_systems_WordPress/pc.jpg",
      imageType: "mockup" // "mockup" or "plain"
    },
    //section 1
    section2: {
      title: "Key Features",
      content: `
<ul>

  <li><strong>Hero section</strong> with CTA and call button</li>
  <li><strong>Quick search</strong> for popular vehicles</li>
  <li><strong>Driver rental</strong> request form</li>
  <li><strong>WooCommerce catalog</strong> with filters & rental settings</li>
  <li><strong>Dynamic pricing</strong> based on duration & options</li>
  <li><strong>New arrivals</strong> & promotional ad block</li>
  <li><strong>Why us</strong>, <strong>FAQ</strong>, and <strong>newsletter</strong> sections</li>

</ul>
            `,
      image: "/imgs/projects/Content_management_systems_WordPress/mobile.png",
      imageType: "mockup"
    },
    madeUsing: ["wp", "html", "css", "js"],
    galleryImages: [
      {
        id: 1,
        type: "video",
        url: "https://youtu.be/ivlJYmC-6Zc",
        title: "Project Demo Video"
      },
      {
        id: 2,
        src: "/imgs/projects/Content_management_systems_WordPress/homepage.png",
        title: "Home Page Design"
      },
      {
        id: 3,
        src: "/imgs/projects/Content_management_systems_WordPress/about-us.png",
        title: "About Us Page Design"
      },
      {
        id: 4,
        src: "/imgs/projects/Content_management_systems_WordPress/contact.png",
        title: "Contact Page Design"
      },
      {
        id: 5,
        src: "/imgs/projects/Content_management_systems_WordPress/catalog.png",
        title: "Products Catalog"
      },
      {
        id: 6,
        src: "/imgs/projects/Content_management_systems_WordPress/product.png",
        title: "Products Page Design"
      },
    ]
  },

  /////////////////////////////////////////////////////////
  //                    Figma                            //
  /////////////////////////////////////////////////////////
  {
    slug: "cinemax-streaming-ui",
    // For card
    thumbnail: "/imgs/projects/Figma/thumbnail.jpg",
    title: "CINEMAX – Movie Streaming Platform Web Design",
    type_id: "web",
    type: "Web & UI/UX",
    client: "Academy Project",
    // For project page
    //Btns
    btns: [
      {
        type: "figma", //figma, page, github
        url: "https://www.figma.com/proto/U2zTUADnEXFlvWVi7I3vPJ/Figma-Class---Ognen-Manevski?page-id=28%3A287&node-id=138-2330&viewport=5673%2C3237%2C0.26&t=FjjyExaL6B8CB73L-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=138%3A2330&hide-ui=1",
      },
    ],
    madeUsing: ["figma", "ai", "ps"],

    //section 1
    section1: {
      title: "Project Overview",
      content: `

CINEMAX is a concept web platform for streaming movies and TV shows, created as a <strong>creative freedom academy project</strong>. The goal was to design a modern, cinematic UI that balances visual impact with usability.

<h4>Objective</h4>
To build a platform that feels immersive and engaging through the use of <strong>animations, bold typography, and custom visuals</strong>, while maintaining clear navigation and a seamless browsing experience.

<h4>Process</h4>
The design process included competitive analysis (Netflix, Disney+, etc.), wireframing core pages, and building a consistent visual system. The homepage features animated elements like floating popcorn and clouds, with bold calls to action and responsive layout strategies.

            `,
      image: "/imgs/projects/Figma/PC-Home.png",
      imageType: "mockup" // "mockup" or "plain"
    },

    //section 2
    section2: {
      title: "Key Features",
      content: `

<ul>
  <li><strong>Animated hero section</strong> with popcorn and cloud effects</li>
  <li><strong>Responsive design</strong> optimized for mobile and desktop</li>
  <li><strong>Movie grid layout</strong> with filtering and smooth navigation</li>
  <li><strong>FAQ & onboarding pages</strong> for better user experience</li>
  <li><strong>Pricing plans section</strong> with strong visual hierarchy and contrast</li>
  <li><strong>Error States & Friendly messaging</strong> for missing form content.</li>
  <li><strong>Custom illustrations</strong> and <strong>motion effects</strong> made entirely in Figma</li>
</ul>
            `,
      image: "/imgs/projects/Figma/PC-Home.png",
      imageType: "mockup" // "mockup" or "plain"
    },


    galleryImages: [
      {
        id: 1,
        src: "/imgs/projects/Figma/PC-Home.png",
        title: "Home Page Design"
      },
      {
        id: 2,
        src: "/imgs/projects/Figma/PC-browse.png",
        title: "Browse Movies"
      },
      {
        id: 3,
        src: "/imgs/projects/Figma/PC-movie view.png",
        title: "Movie View"
      },
      {
        id: 4,
        src: "/imgs/projects/Figma/PC-log-in.png",
        title: "Login Page"
      },
      {
        id: 5,
        src: "/imgs/projects/Figma/PC-subscription.png",
        title: "Subscription Page"
      },
    ]
  },

  /////////////////////////////////////////////////////////
  //             Design Principles                       //
  /////////////////////////////////////////////////////////
  {
    slug: "jobscout-ui-design",
    // For card
    thumbnail: "/imgs/projects/Design_Principles/thumbnail.jpg",
    title: "JobScout - Illustrated Job Search Platform UI",
    type_id: "web",
    type: "Web & UI/UX",
    client: "Academy Project",
    // For project page
    //Btns
    btns: [
      {
        type: "figma", //figma, page, github
        url: "https://www.figma.com/proto/FBOXahFyBmGsd34hChZAsz/Design-Principles-Project?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&hide-ui=1&t=0idvy8cnlWbcG93R-8",
      },
    ],

    //section 1
    section1: {
      title: "Project Overview",
      content: `

Created as part of a <strong>Design Principles class</strong>, this project explores layout, consistency, and illustration in UI/UX design.

<h4>Overview</h4>
JobScout is a job search platform concept designed in <strong>Figma</strong> with custom branding, a playful visual identity, and smooth micro-interactions.

<h4>Deliverables</h4>
The project includes a <strong>homepage, job listings page with overlay job details</strong>, a <strong>chat/messages UI</strong>, and <strong>sign in / sign up forms</strong>. All assets and illustrations were created from scratch in <strong>Adobe Illustrator</strong> and imported into Figma for prototyping.

<h3>Highlights</h3>

<ul>

  <li><strong>Custom illustrations</strong> built in Illustrator</li>
  <li><strong>Interactive Figma prototype</strong> with animated elements</li>
  <li><strong>Homepage</strong> with job search, categories, and featured jobs</li>
  <li><strong>Job listing page</strong> with animated job detail overlay</li>
  <li><strong>Chat UI</strong> for employer-applicant messaging</li>
  <li><strong>Sign in / Sign up</strong> flow with consistent visual style</li>

</ul>
            `,
      image: "/imgs/projects/Design_Principles/thumbnail.jpg",
      imageType: "plain" // "mockup" or "plain"
    },

    madeUsing: ["figma", "ai"],
    galleryImages: [
      {
        id: 1,
        src: "/imgs/projects/Design_Principles/Homepage.png",
        title: "Home Page Design"
      },
      {
        id: 2,
        src: "/imgs/projects/Design_Principles/Search.png",
        title: "Search Page Design"
      },
      {
        id: 3,
        src: "/imgs/projects/Design_Principles/job details modal.png",
        title: "Job Details Modal"
      },
      {
        id: 4,
        src: "/imgs/projects/Design_Principles/SSO-Login.png",
        title: "Login / SSO Page"
      },
      {
        id: 5,
        src: "/imgs/projects/Design_Principles/Chat.png",
        title: "Chat UI"
      },
    ]
  },

  /////////////////////////////////////////////////////////
  //                  HTML & CSS                         //
  /////////////////////////////////////////////////////////
  {
    slug: "edge-digital-html-css-site",
    // For card
    thumbnail: "/imgs/projects/HTML&CSS/thumbnail.jpg",
    title: "Plain HTML & CSS Web Design for Digital Agency",
    type_id: "web",
    type: "Web & UI/UX",
    client: "Academy Project",
    // For project page
    //Btns
    btns: [
      {
        type: "page", //figma, page, github
        url: "https://ognen-manevski.github.io/HTML-CSS-Project/",
      },
      {
        type: "git", //figma, page, github
        url: "https://github.com/ognen-manevski/HTML-CSS-Project",
      },
    ],
    madeUsing: ["html", "css", "js"],

    //section 1
    section1: {
      title: "Project Overview",
      content: `
This was a fully custom-built website for a fictional digital marketing agency, developed from scratch using plain HTML, CSS, and a touch of JavaScript.
<br><br>
 The aim was to create a responsive, visually compelling site that showcases modern design standards and a strong brand identity. Inspired by real-world agency layouts, the project emphasizes both form and function, with a bold landing experience, refined content structure, and clean interaction design.
`,
      image: "/imgs/projects/HTML&CSS/thumbnail.jpg",
      imageType: "plain", // "mockup" or "plain"
    },
    //section 1
    section2: {
      title: "Features",
      content: `
<ul>
  <li>
    <strong>Custom layout</strong> using Flexbox and CSS Grid for structure and responsiveness
  </li>
  <li>
    <strong>Hero section</strong> with large branding and CTA to engage users on entry
  </li>
  <li>
    <strong>Responsive mobile-first design</strong> optimized for all screen sizes
  </li>
  <li>
    <strong>Custom illustrations and icons</strong> created in Illustrator to match the agency’s tone
  </li>
  <li>
    <strong>Optimized assets</strong> and compressed images for performance and faster load times
  </li>
  <li>
    <strong>Subtle CSS animations</strong> and hover effects to improve interactivity and polish
  </li>
</ul>
            `,
      image: "/imgs/projects/HTML&CSS/mobile.jpg",
      imageType: "mockup",
    },

    galleryImages: [
      {
        id: 1,
        src: "/imgs/projects/HTML&CSS/homepage.png",
        title: "Home Page Design"
      },
      {
        id: 2,
        src: "/imgs/projects/HTML&CSS/careers.png",
        title: "Careers Page"
      },
      {
        id: 3,
        src: "/imgs/projects/HTML&CSS/team.png",
        title: "Our Team Page",
      },
    ]
  },

  /////////////////////////////////////////////////////////
  //                 Illustrator                         //
  /////////////////////////////////////////////////////////
  {
    slug: "star-gate-app-ui",
    // For card
    thumbnail: "/imgs/projects/Design_Tools/illustrator/ai.jpg",
    title: "Star Gate - Gamified Astronomy App UI",
    type_id: "design",
    type: "Graphic Design",
    client: "Academy Project",
    // For project page
    //Btns
    btns: [],
    //section 1
    section1: {
      title: "Project Overview",
      content: `

<strong>Star Gate</strong> is a concept mobile app designed during the <strong>Applied Design Tools and Interfaces</strong> course. Built entirely in <strong>Adobe Illustrator</strong>, it aims to educate and engage users through a gamified astronomy experience.

<h4>Objective</h4>
The goal was to design an app that helps users explore celestial objects, complete missions, and track progress—balancing <strong>visual appeal</strong> with <strong>usability</strong> and <strong>informative content</strong>.

<h4>Process</h4>
The UI was planned using mockups and informed by competitor research. A futuristic design system was developed using fonts like <strong>Orbitron</strong> and dark-space palettes with vibrant highlights. Every screen—from the <strong>landing page</strong> to the <strong>calendar</strong> and <strong>user profile</strong>—was custom-illustrated in Illustrator and aligned to a consistent design language.

            `,
      image: "/imgs/projects/Design_Tools/illustrator/ai.jpg",
      imageType: "plain" // "mockup" or "plain"
    },
    //section 2
    section2: {
      title: "Key Features",
      content: `

<ul>
  <li><strong>Personalized landing page</strong> with a welcome message and daily mission</li>
  <li><strong>Interactive explore section</strong> for learning constellations and celestial objects</li>
  <li><strong>Learning pages</strong> with facts, trivia, and visuals about planets and stars</li>
  <li><strong>Stargazing calendar</strong> to plan observations based on upcoming events</li>
  <li><strong>User profile</strong> tracking XP, achievements, and discoveries</li>
  <li><strong>Custom icons and illustrations</strong> for a cohesive, space-themed UI</li>
</ul>

            `,
      image: "/imgs/projects/Design_Tools/illustrator/1-landing.jpg",
      imageType: "mockup" // "mockup" or "plain"
    },

    madeUsing: ["ai"],
    galleryImages: [
      {
        id: 1,
        src: "/imgs/projects/Design_Tools/illustrator/1-landing.jpg",
        title: "Landing Page"
      },
      {
        id: 2,
        src: "/imgs/projects/Design_Tools/illustrator/2-explore.jpg",
        title: "Explore Section"
      },
      {
        id: 3,
        src: "/imgs/projects/Design_Tools/illustrator/3-learning.jpg",
        title: "Learning Page"
      },
      {
        id: 4,
        src: "/imgs/projects/Design_Tools/illustrator/4-calendar.jpg",
        title: "Calendar View"
      },
      {
        id: 5,
        src: "/imgs/projects/Design_Tools/illustrator/5-profile-settings.jpg",
        title: "Profile Settings"
      },
      {
        id: 6,
        src: "/imgs/projects/Design_Tools/illustrator/design system_en.jpg",
        title: "Design System"
      },
    ]
  },

  /////////////////////////////////////////////////////////
  //                    SEO                              //
  /////////////////////////////////////////////////////////
  {
    slug: "seo-dm-case-study",
    // For card
    thumbnail: "/imgs/projects/SEO&DM/thumbnail.jpg",
    title: "SEO & Digital Marketing Case Study + Webshop Design",
    type_id: "web",
    type: "Web & UI/UX",
    client: "Academy Project",
    // For project page
    //Btns
    btns: [
      {
        type: "figma", //figma, page, github
        text: "View Case Study",
        url: "https://www.figma.com/proto/d2HiNWev7hGZGQd6sZqaG4/SEO---DM-Project?page-id=0%3A1&node-id=1-2&viewport=131%2C347%2C0.15&t=M3oxbc9VLmd4fKOh-8&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1&hide-ui=1",
      },
      {
        type: "figma", //figma, page, github
        text: "View Webshop",
        url: "https://www.figma.com/proto/d2HiNWev7hGZGQd6sZqaG4/SEO---DM-Project?page-id=0%3A1&node-id=46-3&viewport=131%2C347%2C0.15&t=uvEvyfnpFjTJcXp9-8&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=46%3A3&show-proto-sidebar=1&hide-ui=1",
      },
    ],
    madeUsing: ["figma", "ai", "ps"],

    //section 1
    section1: {
      title: "Project Overview",
      content: `

<p>
This student project was created as part of the <strong>SEO & Digital Marketing</strong> course. The goal was to apply strategic thinking and creative execution to a complete digital marketing case focused on a local brand.
</p>

            `,
      image: "/imgs/projects/SEO&DM/thumbnail.jpg",
      imageType: "plain" // "mockup" or "plain"
    },

    //section 2
    section2: {
      title: "Key Features",
      content: `

<p>
A complete SEO & digital marketing case study was developed for <a href="https://www.pivaraskopje.com.mk/" target="_blank"><strong>Skopska Pivara</strong></a>, including:
</p>
<ul>
  <li><strong>Brand research</strong> and competitor positioning</li>
  <li>Defined <strong>buyer persona</strong> and detailed <strong>customer journey</strong></li>
  <li>In-depth <strong>keyword analysis</strong></li>
  <li>A clear <strong>social media communication strategy</strong> with content types and tone</li>
  <li>A small conceptual side project: <strong>ПивоОдма.мк (BeerNow.mk) </strong></li>
  <li>A supporting <strong>design system</strong> for UI consistency</li>
</ul>

<p>The project also included an <strong>interactive webshop prototype</strong> designed in Figma, featuring:</p>
<ul>
  <li>Hero section with strong call-to-action</li>
  <li>“За Тебе” personalized offers</li>
  <li>Promotions banner</li>
  <li>Product categories and filters</li>
  <li>Single product page with full product info</li>
  <li>Cross-sell and upsell modules for better conversion</li>
</ul>
            `,
      image: "/imgs/projects/SEO&DM/mobile.jpg",
      imageType: "mockup" // "mockup" or "plain"
    },


    galleryImages: [
      {
        id: 1,
        src: "/imgs/projects/SEO&DM/web-store.png",
        title: "Web-Store Design"
      },
      {
        id: 2,
        src: "/imgs/projects/SEO&DM/product.png",
        title: "Product Page"
      },
      {
        id: 3,
        src: "/imgs/projects/SEO&DM/case study.png",
        title: "Case Study"
      },
    ]
  },

  /////////////////////////////////////////////////////////
  //                    UI/UX                            //
  /////////////////////////////////////////////////////////
  {
    slug: "ui-ux-fitness-app",
    // For card
    thumbnail: "/imgs/projects/UX-UI/thumbnail.jpg",
    title: "UI/UX Case Study + Fitness App Design",
    type_id: "web",
    type: "Web & UI/UX",
    client: "Academy Project",
    // For project page
    //Btns
    btns: [
      {
        type: "figma", //figma, page, github
        text: "View App Prototype",
        blue: "yes",
        url: "https://www.figma.com/proto/78IS2KOvKN12ekO7MHrgab/UI-UX---Ognen-Manevski?page-id=0%3A1&node-id=31-1205&p=f&viewport=228%2C309%2C0.04&t=hAPO2uBgDYJABm0H-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=31%3A1205&hide-ui=1",
      },
      {
        type: "figma", //figma, page, github
        text: "View Case Study",
        url: "https://www.figma.com/proto/78IS2KOvKN12ekO7MHrgab/UI-UX---Ognen-Manevski?page-id=230%3A3472&node-id=230-3474&p=f&viewport=600%2C471%2C0.06&t=UholyycN1uHIOaxy-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=230%3A3474&hide-ui=1",
      },
    ],
    madeUsing: ["figma", "ai", "ps"],

    //section 1
    section1: {
      title: "Project Overview",
      content: `

<p>
  This was an <strong>academy project for the UI/UX course</strong>,
   focused on building a complete UX/UI case study followed by a full fitness app design.
   <br><br>
    The goal was to conduct structured research and competitive analysis, synthesize conclusions, 
    and then apply them in designing a functional and user-friendly fitness <strong>mobile application prototype in Figma.</strong>
</p>

            `,
      image: "/imgs/projects/UX-UI/thumbnail.jpg",
      imageType: "plain" // "mockup" or "plain"
    },

    //section 2
    section2: {
      title: "Key Features",
      content: `

<ul>
<h4>Case Study</h4>
  <li><strong>Nascent UX Exploration:</strong> Initial research and competitive analysis of popular fitness and yoga apps</li>
  <li><strong>User Personas & Journey:</strong> Defined two personas and mapped their end-to-end journey</li>
  <li><strong>Information Architecture Diagram:</strong> Clear breakdown of key screens and user flows</li>
  <li><strong>Visual Identity & Design System:</strong> Defined brand colors, typography, and UI components</li>
  <h4>App Prototype</h4>
  <li><strong>Onboarding Experience:</strong> Low-effort step-by-step personalization for fitness goals</li>
  <li><strong>App Features:</strong> Daily plan overview, daily workouts, warm-up, meal prep, nutrition tracking, and extensive libraries for exercises and recipes</li>
</ul>
            `,
      image: "/imgs/projects/UX-UI/mobile.png",
      imageType: "mockup", // "mockup" or "plain"
      mockup_settings: "full", // "full" or not set for scroll/default
    },


    galleryImages: [
      {
        id: 1,
        src: "/imgs/projects/UX-UI/onboarding.jpg",
        title: "Onboarding App Screens"
      },
      {
        id: 2,
        src: "/imgs/projects/UX-UI/app.jpg",
        title: "App Screens and Features"
      },
      {
        id: 3,
        src: "/imgs/projects/UX-UI/case-study.png",
        title: "Case Study"
      },
    ]
  },

  /////////////////////////////////////////////////////////
  //                  Photoshop                          //
  /////////////////////////////////////////////////////////
  {
    slug: "ecommerce-stats-dashboard",
    // For card
    thumbnail: "/imgs/projects/Design_Tools/photoshop/psd.jpg",
    title: "Ecommerce Statistics Dashboard Design",
    type_id: "design",
    type: "Graphic Design",
    client: "Academy Project",
    // For project page
    //Btns
    btns: [],
    //section 1
    section1: {
      title: "Project Overview",
      content: `

This dashboard was created as an <strong>academy project</strong> for the Photoshop class, focused on visual layout and information hierarchy.

<h4>Overview</h4>
The goal was to design a clear and user-friendly <strong>ecommerce dashboard</strong> UI that visually presents business metrics such as sales, orders, income, and user behavior.

<h4>Tools</h4>
The entire design was created in <strong>Adobe Photoshop</strong> using vector shapes, grid layouts, color-coded data, and iconography to maintain clarity and structure.

            `,
      image: "/imgs/projects/Design_Tools/photoshop/psd.jpg",
      imageType: "plain" // "mockup" or "plain"
    },

    madeUsing: ["ps"],
    galleryImages: [
      {
        id: 1,
        src: "/imgs/projects/Design_Tools/photoshop/photoshop.jpg",
        title: "Dashboard Design"
      },
    ]
  },

  /////////////////////////////////////////////////////////
  //                     mini                            //
  /////////////////////////////////////////////////////////
  {
    slug: "mini-hackathon-site",
    // For card
    thumbnail: "/imgs/projects/mini/thumbnail.jpg",
    title: "MINI Cooper Hackathon Website",
    type_id: "web",
    type: "Web & UI/UX",
    client: "Academy Project x MINI Macedonia",
    // For project page
    //Btns
    btns: [
      {
        type: "page", //figma, page, github
        url: "https://ognen-manevski.github.io/mini/",
      },
      {
        type: "git", //figma, page, github
        url: "https://github.com/ognen-manevski/mini",
      },
    ],
    madeUsing: ["html", "css", "js"],

    //section 1
    section1: {
      title: "Project Overview",
      content: `

<p>
  Weekend hackathon project for <strong>BMW/MINI Macedonia</strong>, focused on building a promotional landing page in cross-functional academy teams including Marketing, Sales, Graphic Design, UI/UX, and Development.
</p>

<h4>My Role</h4>
<p>
  Front-end developer and <strong>visual design lead</strong>, drawing on my experience working with MINI’s brand at my agency job.
</p>
 `,
      image: "/imgs/projects/mini/thumbnail.jpg",
      imageType: "plain", // "mockup" or "plain"
    },
    //section 1
    section2: {
      title: "Key Contributions",
      content: `

<ul>
  <li>
    <strong>Feature Animation Section:</strong> Scroll-triggered section with animated features, background animations and a 360° rotating car (36-frame PNG sequence).
  </li>
  <li>
    <strong>Color Picker Widget:</strong> Users could change car colors and trigger a door animation after form submission.
  </li>
</ul>

<h3>Result</h3>
<p>
  Delivered a fully functional, animated landing page in 48 hours. The final product aligned with MINI’s branding and was well received by the client.
</p>


            `,
      image: "/imgs/projects/mini/mobile.jpg",
      imageType: "mockup",
    },

    galleryImages: [
      {
        id: 1,
        src: "/imgs/projects/mini/home.jpg",
        title: "Home Page Design"
      },
      {
        id: 2,
        src: "/imgs/projects/mini/scrollable.jpg",
        title: "Scrollable Animated Section"
      },
      {
        id: 3,
        src: "/imgs/projects/mini/color-picker.jpg",
        title: "Color Picker",
      },
    ]
  },

];
