# AuraMed Video Conferencing (auramed_vc)

## Overview

AuraMed Video Conferencing (auramed_vc) is a web-based application designed to facilitate secure and reliable video communication between healthcare professionals and patients. The platform aims to enhance telemedicine services by providing an intuitive interface and robust features tailored for medical consultations.

## Features

- **Secure Video Calls** - End-to-end encrypted video communication ensuring patient confidentiality.
- **Appointment Scheduling** - Integrated calendar system for managing and scheduling consultations.
- **Patient Records Access** - Secure access to patient medical histories during consultations.
- **Multi-Participant Support** - Ability to include multiple participants in a single call for collaborative consultations.
- **Cross-Platform Compatibility** - Accessible via web browsers on desktops, tablets, and smartphones.

## Technologies Used

### Frontend:
- React.js
- SCSS

### Backend:
- Node.js
- Express.js
- Socket.io

### Additional Tools and Libraries:
- ESLint
- Yarn
- nvm (Node Version Manager)

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/SAPtadeep27/auramed_vc.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd auramed_vc
   ```

3. **Install Dependencies:**
   - **Using npm:**
     ```bash
     npm install
     ```
   - **Using Yarn:**
     ```bash
     yarn install
     ```

4. **Set Node.js Version:**
   Ensure you are using the correct Node.js version as specified in the `.nvmrc` file:
   ```bash
   nvm use
   ```

5. **Start the Application:**
   - **Development Mode:**
     ```bash
     npm run dev
     ```
   - **Production Mode:**
     ```bash
     npm start
     ```

   The application will run on `http://localhost:3000` by default.

## Project Structure

```
auramed_vc/
├── client/
│   ├── public/
│   └── src/
├── server/
├── .eslintrc
├── .nvmrc
├── .yarnrc
├── app.json
├── config.js
├── package-lock.json
├── package.json
└── yarn.lock
```

- **`client/`**: Contains the frontend code.
  - **`public/`**: Static assets and HTML files.
  - **`src/`**: React components and related resources.
- **`server/`**: Contains the backend code.
- **`.eslintrc`**: Configuration file for ESLint.
- **`.nvmrc`**: Specifies the Node.js version for the project.
- **`.yarnrc`**: Configuration file for Yarn.
- **`app.json`**: Application configuration file.
- **`config.js`**: Contains configuration settings for the application.
- **`package-lock.json`**: Automatically generated for any operations where npm modifies the `node_modules` tree or `package.json`.
- **`package.json`**: Manages project dependencies and scripts.
- **`yarn.lock`**: Ensures that the exact same dependencies are installed across all environments.

## Contributing

Contributions to AuraMed Video Conferencing are welcome! To contribute:

1. **Fork the Repository.**
2. **Create a New Branch:**
   ```bash
   git checkout -b feature-name
   ```
3. **Make Your Changes and Commit Them:**
   ```bash
   git commit -m "Description of changes"
   ```
4. **Push to the Branch:**
   ```bash
   git push origin feature-name
   ```
5. **Open a Pull Request.**

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

- **React.js**: For providing a robust frontend library.
- **Node.js & Express.js**: For the backend runtime and framework.
- **Socket.io**: For enabling real-time communication.

---

Thank you for using AuraMed Video Conferencing! Your contributions and feedback are invaluable.

