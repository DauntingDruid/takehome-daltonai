# Student Portal

This project is a student portal application built with React, Tailwind CSS, and Framer Motion. It provides a platform for students to register, verify their contact information, and explore various features related to their educational journey.

## Features

- **Registration**: Students can register by providing their full name, email, and contact number.
- **OTP Verification**: After registration, students can verify their contact number using an OTP.
- **AI Course Finder**: Explore AI-based course recommendations.
- **About Us**: Learn more about the company, its mission, vision, and partners.
- **Authentication**: Login and registration functionality with validation.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Library for animations and transitions.
- **React Router**: Library for routing in React applications.

## Setup Instructions

1. **Clone the repository**:
   ```sh
   git clone https://github.com/DauntingDruid/takehome-daltonai.git
   cd student-portal
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Start the development server**:
   ```sh
   npm run dev
   ```

4. **Build for production**:
   ```sh
   npm run build
   ```

## Folder Structure

```
student-portal/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   └── StartPage.jsx
│   ├── pages/
│   │   ├── Aboutus.jsx
│   │   ├── Auth.jsx
│   │   ├── Letsgetstarted.jsx
│   │   ├── Registeration.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
└── README.md
```

## Available Scripts

- `npm run dev`: Starts the development server.

## License

This project is licensed under the MIT License.
