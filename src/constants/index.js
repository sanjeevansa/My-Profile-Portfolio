import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate and enthusiastic full stack developer with a strong foundation in Software Engineering and Data Science. As a recent graduate, I have built a solid portfolio by working on diverse academic and personal projects. I specialize in crafting robust and scalable web applications using modern front-end technologies like React and Next.js, and back-end frameworks including Node.js, Spring Boot, PHP, and ASP.NET (C#). I am also proficient in working with various databases such as MySQL, PostgreSQL, and MongoDB.
In addition to web development, I have a keen interest in data science and analytics, with hands-on experience in Python, R Studio, and tools used for data processing and machine learning. I am always eager to learn and adapt, aiming to contribute innovative solutions that enhance user experience and support business growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer and data scientist with a strong passion for building efficient, intelligent, and user-centric applications. With a solid background in both Software Engineering and Data Science, I specialize in full stack web development as well as data-driven solutions.
In the software domain, I have experience working with modern front-end technologies like React and Next.js, and robust back-end frameworks such as Node.js, Spring Boot, PHP, and ASP.NET (C#). I am also proficient in managing and designing relational and NoSQL databases, including MySQL, PostgreSQL, and MongoDB.
On the data science side, my expertise includes data cleaning, data analysis, machine learning model development, and deep learning-based predictive systems. I utilize tools such as Python and R Studio for data manipulation, visualization, and model building. Additionally, I have worked with ERP systems and understand the importance of data integration and insights in enterprise environments.
My goal is to merge software development and data science to build scalable, data-driven solutions that drive business value. I thrive in collaborative environments, embrace new technologies, and continuously seek opportunities to innovate.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "HND Software Engineer",
    company: "Web Application Academy.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "HTML5", "CSS3", "Bootstrap 4","PHP", "MySQL"],
  },
  {
    year: "2021",
    role: "HND Software Engineer",
    company: "Fundamental Programming project",
    description: `This Food Ordering System is a Windows-based C++ console application designed as a fundamental project to demonstrate key programming concepts such as arrays, functions, classes, and basic login systems. The system features two main modules: an Admin Panel and a Customer Panel, each secured by a simple authentication mechanism. Admin users can add, edit, delete, and display food items, while also managing customer orders. Customers can log in, view the menu, place multiple item orders, and receive an on-screen bill summary. All operations such as storing food item names, prices, and customer orders are managed using in-memory arrays, without using files or databases. This project is ideal for beginners learning structured programming, object-oriented basics, and user interface logic in a Windows console environment.`,
    technologies: ["c++"],
  },
  {
    year: "2022",
    role: "HND Software Engineer",
    company: "Oject Oriented Programming (OOP) project",
    description: `his Library Management System is a GUI-based desktop application developed using Java (Swing GUI) in NetBeans IDE, following Object-Oriented Programming (OOP) principles. The system includes two user roles: Admin and Customer (Student/Reader), each with their own login panels. The Admin Panel provides full control over the system—allowing admins to add, edit, delete, and search books, manage user accounts, track issued/returned books, and monitor overdue penalties. On the other hand, the Customer Panel allows registered users to log in, search books by title/author/category, view available books, request book issues, and check their borrowed history.
                  The application uses Java classes and inheritance to represent core entities like Book, User, and Transaction, making the code modular and reusable. All the data is typically stored using ArrayLists or simple in-memory structures, or optionally in text/serialized files or a small local database like SQLite if needed. The user interface is built with Java Swing, offering a smooth desktop application experience within the Windows environment.`,
    technologies: ["Java","SQL"],
  },
  {
    year: "2022",
    role: "HND Software Engineer",
    company: "C# ASP.NET Web Application",
    description: `This Doctor Appointment System is a web-based application developed using C# with ASP.NET MVC framework designed to facilitate easy and efficient booking and management of doctor appointments. The system includes separate roles for Admin, Doctors, and Patients, each with secure login functionality. Admins can manage doctor profiles, view all appointments, and handle scheduling conflicts. Doctors can view their appointment schedules, update availability, and manage patient consultations. Patients can register, search for doctors by specialization or availability, and book appointments online with instant confirmation. The system also supports appointment cancellation, rescheduling, and notifications/reminders sent to patients and doctors. Built on a Microsoft SQL Server backend, the application ensures data security, integrity, and provides a clean, user-friendly interface using Razor Views and Bootstrap for responsive design.`,
    technologies: ["ASP.NET MVC", "HTML5", "avaScript / jQuery", "C# (.NET Framework or .NET Core) ", "Microsoft SQL Server", "Bootstrap 4"],
  },
  {
    year: "2023",
    role: "HND Software Engineer",
    company: "Mobile Application",
    description: `This Salon Booking App is a mobile application developed using Java in Android Studio, designed to provide users with an easy and convenient way to book salon services directly from their smartphones. The app features a clean and intuitive interface that allows customers to browse available services, view detailed descriptions, select preferred time slots, and make bookings instantly. Users can create accounts, manage their bookings, and receive notifications or reminders for upcoming appointments. On the backend, the app manages service lists, booking schedules, and customer profiles, ensuring smooth and efficient salon management. This project demonstrates practical use of Android UI components, SQLite/local database for data persistence, and networking (optional for server sync), making it an excellent example of a real-world service booking application.`,
    technologies: ["java", "Xml"],
  },
  {
    year: "2023",
    role: "HND Software Engineer",
    company: "Final project",
    description: `The Admin Panel serves as the backbone of the Inventory Management System, granting administrators comprehensive control over all aspects of inventory and user management. Admins can efficiently add new products, update existing product details such as descriptions, prices, and quantities, and remove obsolete items to keep the inventory accurate and up-to-date. They also manage supplier information, including contact details and supply history, ensuring seamless procurement processes. User management is another critical function, where admins can create, modify, or deactivate user accounts, assign roles, and set permissions to maintain system security and proper access control. Additionally, admins monitor stock levels in real time, receiving alerts for low-stock items to prevent shortages. They oversee sales and purchase transactions, validating data integrity and generating detailed reports on inventory status, sales performance, and supplier activities. The admin’s ability to generate and print PDF receipts and transaction records further supports transparent and efficient record-keeping. Overall, the Admin Panel enables robust inventory oversight, ensuring smooth business operations and informed decision-making.
                  `,
    technologies: ["java", "SQL"],
  },
  {
    year: "2024",
    role: "BSc Software Engineer",
    company: "Advance programming project",
    description: `This Restaurant Management System is a comprehensive web application developed using PHP, jQuery, and Bootstrap 4, aimed at automating the traditional manual processes of table booking, order taking, and billing in restaurants. Traditionally, waiters record orders on paper and communicate them verbally to the kitchen and cashier, leading to inefficiencies and potential errors. This system streamlines the entire workflow by enabling waiters to directly enter customer orders into the system, which are instantly available for kitchen staff and cashiers, thus improving accuracy and speed of service. The application supports multiple user roles—Master User, Waiter, and Cashier—each with distinct responsibilities and access controls. The Master User manages the overall system setup, including configuring currency and timezone, and performs CRUD operations on food categories, items, taxes, tables, users, orders, and billing data. Waiters handle order creation and modification while monitoring live table status, and cashiers manage billing operations, including viewing bills, checking statuses, and printing receipts. The system also provides real-time insights into table availability and detailed sales reports for today, yesterday, the last seven days, and all-time data. Built with a responsive Bootstrap 4 Admin Template, the system is fully mobile-friendly, ensuring usability across various devices. This open-source project serves as an educational resource, offering complete source code and modular functionality for beginners to learn effective PHP web application development.`,
    technologies: ["HTML5", "CSS3", "Bootstrap 4", "PHP", "SQL", "jQuery", "GitHub", "Visual Studio Code"],
  },
  {
    year: "2025",
    role: "BSc Software Engineer",
    company: "Advance programming project",
    description: `This Vehicle Rent Booking System is a web-based application designed to facilitate efficient rental management of vehicles, developed as a final year project for BSc Software Engineering. The system includes two main user roles: Admin and Customer. The Admin Panel allows administrators to manage vehicle inventory by adding, editing, and deleting vehicle details, monitor bookings, approve or reject rental requests, and generate reports on rentals and revenue. The Customer Panel enables users to register, browse available vehicles, make rental bookings by selecting dates and vehicle types, and view their booking history. The system ensures smooth communication between customers and administrators and automates booking management, reducing manual work and errors. Built with a focus on user-friendly design and robust backend logic, this project demonstrates practical skills in full-stack development, database management, and user role-based access control.`,
    technologies: ["HTML5", "CSS3", "Bootstrap 4", "PHP", "SQL", "jQuery", "GitHub", "Visual Studio Code"],
  },
  {
    year: "2025",
    role: "BSc Software Engineer",
    company: "Commercial programming project Java Web Application Project",
    description: `This eCommerce Web Application is a full-stack project developed using Spring Boot for the backend and React with TypeScript for the frontend, aimed at building a real-world, production-ready online shopping platform. Designed for students, aspiring developers, and entrepreneurs, this project demonstrates the implementation of industry-standard technologies including Spring Security, JWT authentication, MySQL, and Java Mail Sender on the backend, along with modern frontend tools like Redux Toolkit, Tailwind CSS, MUI, and Formik. The platform includes robust role-based modules for Customers, Sellers, and Admins. Customers can browse and filter products, manage their carts, use payment gateways like Razorpay and Stripe, apply coupons, manage orders, and interact with a chatbot for queries. Sellers are equipped with a dashboard featuring earnings analytics, product management, order handling, and transaction tracking. The Admin panel allows complete control over seller approval, coupon creation, homepage customization, and deal management. The project also includes features like wishlist, order cancellation, review & rating system, and sales reports. Whether used to boost a resume, master full-stack skills, or power a real business, this eCommerce project stands as a professional, scalable solution built with modern technologies and best practices. `,
    technologies: ["java", "Spring Boot", "React", "Tailwind CSS", "Spring Security", "JWT", "MySQL", "Java Mail Sender", "Razorpay", "Stripe", "Redux Toolkit", "Formik"],
  },
  {
    year: "2025",
    role: "BSc Software Engineer",
    company: "Commercial programming project Fullstack Food Ordering App MERN",
    description: `This Fullstack Food Ordering App is a beginner-friendly project built using Next.js 14 and MongoDB, designed to teach the fundamentals of building modern web applications. The app features a fully functional restaurant page with dynamic menu listings, user authentication, cart functionality, and an intuitive admin panel. Throughout the development process, key concepts such as server-side rendering, API routes, session-based authentication, form handling, and database integration using MongoDB are implemented. Users can sign up, log in, update their profiles, browse menu items, and manage their orders. Admins have complete control over categories, menu items, and user accounts via a secured dashboard. With a focus on clean UI and full CRUD operations, this project is a valuable addition to any developer's portfolio and provides practical experience with modern JavaScript frameworks, MongoDB Atlas, and Next.js App Router architecture.`,
    technologies: ["Next.js 14", "MongoDB", "React", "Tailwind CSS", "Next.js App Router", "Session-based authentication", "Form handling", "Database integration using MongoDB", "Server-side rendering", "API routes", "NextAuth.js", "Google OAuth2"],
  },

  {
    year: "2025",
    role: "BSc Software Engineer",
    company: "Fullstack Food Ordering App MERN",
    description: `This Enterprise-Level Full-Stack Food Ordering Platform is a powerful, scalable web application built using the MERN stack (MongoDB, Express.js, React, Node.js) with modern tools like Vite, Shadcn UI, Auth0, and Stripe. Designed for production-level functionality, this app supports a complete restaurant management workflow—from customer profile management and restaurant creation to advanced search, filtering, pagination, cart functionality, and secure online payments. Admins and restaurant owners can manage restaurants, menus, orders, and delivery statuses, while customers enjoy features like profile updates, cart management, order tracking, and a smooth checkout experience using Stripe integration. Image management is handled via Cloudinary, while deployment is powered by Render. Auth0 handles robust authentication and authorization, and the platform follows modern design practices with a responsive, mobile-first UI using Tailwind CSS and React Router. This project demonstrates strong architecture, real-world problem solving, and advanced full-stack development—ideal for professional portfolios or launching a live SaaS product.`,
    technologies: ["React.js", "Tailwind CSS","Auth0 with JWT Access Tokens", "Shadcn UI", "Auth0", "Stripe", "MongoDB", "Express.js", "Node.js", "Cloudinary", "Render", "React Router", "Auth0", "Stripe", "Tailwind CSS", "React Router", "Stripe CLI","Stripe API","Express.js","session API"],
  },
  
  
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
