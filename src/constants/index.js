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

  {
    year: "2025",
    role: "BSc Software Engineer @ Data Science and Analytics",
    company: "London House Price Prediction Project",
    description: `In this project, I designed and implemented a complete machine learning pipeline to predict house prices in London, integrating the solution into a Flask web application for real-time predictions. The pipeline included data ingestion and cleaning, imputing missing numerical values with median strategies and categorical variables with mode imputation. I used Label Encoding to convert categorical columns (outcode, tenure, property type, current energy rating) into numeric form.
      Through extensive exploratory data analysis (EDA), I visualized feature distributions, correlations, and outliers using seaborn and matplotlib. The core predictive model was a Random Forest Regressor, achieving strong performance as measured by R² and Mean Absolute Error. The trained model was serialized with pickle and integrated into a Flask web framework, allowing users to input property details on a website and receive instant price predictions.
      This project demonstrates my ability to build end-to-end machine learning solutions, from data preparation and model training to deployment as a web service, combining Python, pandas, scikit-learn, seaborn, matplotlib, pickle, and Flask to deliver accurate and accessible real estate forecasts.`,
    technologies: ["Python", "pandas", "scikit-learn", "seaborn", "matplotlib", "Random Forest Regressor", "Label Encoding", "EDA", "Data Cleaning", "Model Serialization", "Deployment", "Documentation","Flask"],
  },

  {
    year: "2025",
    role: "BSc Software Engineer @ Data Science and Analytics",
    company: "Twitter Sentiment Analysis Project",
    description: `In this project, I developed a machine learning pipeline to [predict/classify] [target variable] using a dataset containing [brief description of data]. The workflow included data cleaning, handling missing values, and feature engineering to prepare the data for modeling. I performed exploratory data analysis with seaborn and matplotlib to understand feature distributions and identify key relationships.
For modeling, I implemented and compared different algorithms including [e.g., Random Forests, Gradient Boosting, Logistic Regression], optimizing hyperparameters to improve accuracy. I evaluated the models using metrics such as [accuracy, R², MAE, etc.]. The trained model was serialized with pickle/joblib for future deployment.
This project demonstrates my ability to build end-to-end supervised learning solutions, combining Python, pandas, NumPy, scikit-learn, seaborn, and matplotlib to deliver reliable predictions.`,
    technologies: ["python", "pandas", "NumPy", "scikit-learn", "seaborn", "matplotlib", "Random Forests", "Gradient Boosting", "Logistic Regression", "Hyperparameter Tuning", "Model Evaluation", "Model Serialization","Flask", "pickle/joblib","EDA"],
  },

  {
    year: "2025",
    role: "BSc Software Engineer @ Data Science and Analytics",
    company: "Potato Leaf Disease Detection Using Deep Learning (Flask Web App with ERP Insight)",
    description: `This project is a deep learning–based image classification system developed to detect diseases in potato leaves, specifically Potato Early Blight, Potato Late Blight, and Healthy leaves. The workflow begins with dataset cleaning and preprocessing, where thousands of leaf images are resized, normalized, and augmented to improve generalization. After preparing the data, a Convolutional Neural Network (CNN) model was built and trained using TensorFlow/Keras, achieving an accuracy of over 90% on the validation set. The trained model is saved as model.h5 and integrated into a Flask web application.
Users can upload potato leaf images in .jpg, .jpeg, or .png format through a simple and responsive web interface. Once uploaded, the image is preprocessed and passed into the model, which predicts the disease label, confidence score, and provides an image preview. The system also displays detailed treatment advice and disease information for Early Blight and Late Blight, aiding farmers and agricultural officers in quick and informed decision-making.
This project simulates an ERP (Enterprise Resource Planning) feature by automating the disease detection pipeline from image input to prediction and treatment suggestions, which can be extended into real-time dashboards for farm monitoring systems. Additional functions include file validation, secure image storage, and visualization of model results with Bootstrap-enhanced UI. The backend logic handles routing, prediction, and dynamic rendering using Jinja templates. Overall, this project demonstrates the power of deep learning in agriculture and offers potential integration with smart farming systems or agricultural ERP platforms.`,
    technologies: ["Python", "TensorFlow/Keras", "Flask", "HTML5", "CSS3", "Bootstrap 4", "Jinja2", "NumPy", "PIL/Pillow", "Model Serialization (model.h5)", "Image Preprocessing", "Image Augmentation", "Convolutional Neural Networks (CNN)", "ERP Insight", "Flask", "Flask-Bootstrap","OpenCV / Keras Preprocessing"],
  },

  {
    year: "2025",
    role: "BSc Software Engineer @ Data Science and Analytics",
    company: "Face Recognition Attendance System with Admin Panel (Flask + OpenCV + Streamlit)",
    description: `This project is a smart and efficient Face Recognition Attendance System developed using Python, OpenCV, Flask, and Streamlit, aimed at automating employee attendance through real-time face detection and recognition. The system captures facial images via webcam, detects faces using Haar Cascade classifiers, and stores face data as flattened image arrays. These are then used to train a K-Nearest Neighbors (KNN) classifier to identify individuals based on facial features. Each user is assigned a unique, auto-generated numeric ID, and their attendance is recorded with Name, ID, Time, Date, Description, and Leave Time, stored daily in structured CSV files.
An integrated Flask-based Admin Panel provides full control over attendance data management. Through a clean and responsive web interface, administrators can insert new records, update existing entries, delete incorrect records, search for entries, view all CSV files, and download attendance reports. The backend uses Jinja2 templating for dynamic rendering and Bootstrap for styling.
Additionally, a separate Streamlit Admin Dashboard offers an interactive and user-friendly interface for managing attendance. It allows users to search by employee ID, edit or delete records in real time, and view the full attendance table. The system ensures daily attendance files are automatically created if missing and handles missing columns (like “Leave Time”) gracefully. The solution supports manual entry, review, and correction of data, making it highly practical for real-world use in schools, offices, or remote work scenarios.
This project showcases how computer vision, machine learning, and web development can be effectively integrated to solve real-time administrative challenges in a lightweight and scalable manner.`,
    technologies: ["Python", "OpenCV", "Flask", "Streamlit", "HTML5", "CSS3", "Bootstrap 4", "Jinja2", "NumPy", "Pandas", "K-Nearest Neighbors (KNN)", "Haar Cascade Classifier", "Face Detection and Recognition", "Attendance Management", "CSV File Handling", "Webcam Integration", "Responsive Design","OS module","Datetime module"],
  },

  {
    year: "2025",
    role: "BSc Software Engineer @ Data Science and Analytics",
    company: "Final Project Plant Disease Detection Using Deep Learning (Flask Web App with ERP Insight)",
    description: `This project is a full-scale AI-powered plant disease detection system that leverages deep learning, natural language processing, and web technologies to identify crop diseases and provide multilingual treatment guidance to farmers. At its core, a Convolutional Neural Network (CNN) was implemented using TensorFlow/Keras to classify 10 types of leaf diseases from RGB images resized to 128×128. The model includes multiple convolutional blocks with ReLU activations, max pooling, dense layers, and a softmax output. Advanced data augmentation techniques like random rotations, zooming, shifting, and flipping were applied using ImageDataGenerator, and the model achieved 93.2% validation accuracy over 50 epochs with an Adam optimizer and categorical cross-entropy loss.
The image preprocessing pipeline includes normalization, resizing, and reshaping for batch predictions, with a confidence threshold set at 85% for reliable output. A complete multilingual natural language interface supports English-Tamil conversion using the Google Translate API, and dynamic UI content (labels, treatment details, etc.) is localized accordingly. Dual text-to-speech (TTS) systems—gTTS for Tamil and Web Speech API for English—are integrated for inclusive accessibility, especially for low-literacy users.
Treatment data is stored in structured Pandas DataFrames, backed by an Excel-powered database that contains scientific disease names, detailed treatment protocols, chemical/organic solutions, usage guidelines, and even product links for farmers. A modular Flask backend supports prediction APIs, translation services, antibiotic recommendation logic, and structured error handling. The frontend includes voice buttons, language toggle options, AJAX-powered content updates, and a responsive mobile-first design for field use.
To optimize performance, the model was converted to TensorFlow Lite, with quantization-aware training reducing its memory footprint to under 500MB, and ensuring <1.8 seconds inference time on CPU. Prediction and translation results are cached to boost responsiveness. The system supports containerized deployment via Docker, and is compatible with AWS Elastic Beanstalk, Google App Engine, and Raspberry Pi for both cloud and edge computing scenarios.
This project demonstrates end-to-end proficiency in computer vision, NLP, full-stack development, and UX design, addressing key challenges in agriculture with accessible technology. It empowers farmers with voice-enabled, mobile-optimized, and multilingual tools to detect diseases early, receive actionable solutions, and increase yield—even in low-connectivity environments.`,
    technologies: ["TensorFlow / Keras", "Convolutional Neural Networks (CNN)", "ImageDataGenerator", "Flask", "HTML5", "CSS3", "Bootstrap 4", "Jinja2", "NumPy", "Pandas", "Google Translate API", "gTTS (Google Text-to-Speech)", "Web Speech API", "Excel Database", "Docker", "AWS Elastic Beanstalk", "Google App Engine", "Raspberry Pi", "TensorFlow Lite", "Quantization-aware training","OpenCV / PIL"],
  },
  
  
  
];

export const PROJECTS = [
  {
    title: "Food Odering WebSite",
    image: project1,
    description:
      "Enterprise-Level Full-Stack Food Ordering Platform: A scalable MERN-stack application (MongoDB, Express.js, React + Vite, Node.js) with Auth0 authentication, Stripe payments, and Cloudinary image management. Features include restaurant and menu management, advanced search, filtering, cart, secure checkout, order tracking, and responsive UI with Tailwind CSS and Shadcn UI. Designed for production with Render deployment, modern architecture, and real-world SaaS capabilities—ideal for professional portfolios or live projects.",
    technologies: ["React.js", "Tailwind CSS","Auth0 with JWT Access Tokens", "Shadcn UI", "Auth0", "Stripe", "MongoDB", "Express.js", "Node.js", "Cloudinary", "Render", "React Router", "Auth0", "Stripe", "Tailwind CSS", "React Router", "Stripe CLI","Stripe API","Express.js","session API"],
  },
  {
    title: "Commercial programming project Fullstack Food Ordering App MERN",
    image: project2,
    description:
      "Fullstack Food Ordering App: A beginner-friendly project using Next.js 14 and MongoDB. Features dynamic restaurant pages, user authentication, cart, and an admin dashboard for managing menus, categories, and users. Implements server-side rendering, API routes, session-based auth, and full CRUD operations. Ideal for learning modern JavaScript, MongoDB Atlas, and Next.js App Router architecture while building a clean, functional portfolio project.",
    technologies: ["Next.js 14", "MongoDB", "React", "Tailwind CSS", "Next.js App Router", "Session-based authentication", "Form handling", "Database integration using MongoDB", "Server-side rendering", "API routes", "NextAuth.js", "Google OAuth2"],
  },
  {
    title: "Vehicle Rent Booking System:",
    image: project3,
    description:
      " A web app developed as a BSc Software Engineering Advance level project. Features Admin and Customer roles. Admins can manage vehicle inventory, approve bookings, and generate reports. Customers can register, browse vehicles, make bookings, and track history. The system streamlines rental management with automated workflows, user-friendly design, role-based access control, and robust full-stack development.",
    technologies: ["HTML5", "CSS3", "Bootstrap 4", "PHP", "SQL", "jQuery", "GitHub", "Visual Studio Code"],
  },
  {
    title: "eCommerce Web Application:",
    image: project4,
    description:
      "A full-stack platform using Spring Boot (backend) and React + TypeScript (frontend). Features role-based modules for Customers, Sellers, and Admins. Customers can browse products, manage carts, checkout with Razorpay/Stripe, apply coupons, and track orders. Sellers have dashboards for product management, orders, and analytics. Admins control seller approvals, coupons, and site settings. Built with Spring Security, JWT, MySQL, Redux Toolkit, Tailwind CSS, MUI, and Formik. A professional, production-ready solution ideal for portfolios, skill-building, or launching a real business.",
    technologies: ["java", "Spring Boot", "React", "Tailwind CSS", "Spring Security", "JWT", "MySQL", "Java Mail Sender"],
  },

  {
    title: "AI-Powered Plant Disease Detection System:",
    image: "https://thumbs.dreamstime.com/b/young-farmer-using-smartphone-app-to-monitor-crop-health-irrigation-representing-integration-technology-modern-291031769.jpg",
    description:
      " A full-scale solution combining deep learning, NLP, and web technologies to identify 10 crop diseases and deliver multilingual treatment guidance. A TensorFlow/Keras CNN (93.2% accuracy) classifies leaf images with advanced data augmentation. Multilingual support (English-Tamil) uses Google Translate API and dual TTS (gTTS & Web Speech API) for accessibility. Treatment protocols are stored in Pandas DataFrames linked to an Excel database. A Flask backend provides prediction APIs, translation, and recommendations, while a responsive frontend features voice controls and dynamic content. Optimized via TensorFlow Lite (sub-500MB) for <1.8s inference, Docker deployment, and compatibility with cloud and edge devices. This project showcases end-to-end skills in computer vision, NLP, full-stack development, and UX, empowering farmers with accessible, voice-enabled disease management tools.",
    technologies: ["TensorFlow / Keras", "Convolutional Neural Networks (CNN)", "ImageDataGenerator", "Flask", "HTML5", "CSS3", "Bootstrap 4", "Jinja2", "NumPy", "Pandas", "Google Translate API", "gTTS (Google Text-to-Speech)", "Web Speech API", "Excel Database", "Docker", "AWS Elastic Beanstalk", "Google App Engine", "Raspberry Pi", "TensorFlow Lite", "Quantization-aware training","OpenCV / PIL"],
  },


];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
