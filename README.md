# 📝 Pasteify – A Modern Text Snippet Manager

![GitHub Repo stars](https://img.shields.io/github/stars/Monika-Sahu-9380/pasteify?style=social)
![GitHub forks](https://img.shields.io/github/forks/Monika-Sahu-9380/pasteify?style=social)
![License](https://img.shields.io/badge/License-MIT-green)

*Pasteify* is a **lightweight** and **modern** web application built with **React** and **TailwindCSS** that helps you quickly **create, manage, and share text snippets (pastes)**. It's designed for simplicity, avoiding the clutter of traditional note-taking tools while providing essential features for organizing and accessing your quick pastes.

---

## 🛠️ Tech Stack

### Frameworks & Libraries
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2-764ABC?logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwindcss&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide-Icons-orange?logo=lucide&logoColor=white)
![Hot Toast](https://img.shields.io/badge/React%20Hot%20Toast-Notifications-ff6f61?logo=react&logoColor=white)

- **React 18+** – Component-based UI library  
- **React Router DOM** – Navigation & routing  
- **Redux Toolkit** – State management  
- **React Hot Toast** – Notifications  
- **Lucide Icons** – Modern icons for UI  

### Tools & Deployment
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=FFD62E)
![GitHub](https://img.shields.io/badge/GitHub-Version%20Control-181717?logo=github)

- **Vite** – Fast development build tool  
- **LocalStorage** – Client-side persistence  
- **Git & GitHub** – Version control and hosting  

---

## 🚀 Features

- 📝 **Create and Save** – Add new text snippets with title and content  
- ✏️ **Edit and Update** – Modify existing pastes  
- 🗑️ **Delete Pastes** – Remove unwanted pastes  
- 📋 **Copy to Clipboard Instantly** – Copy paste content to clipboard
- 🔎 **Search and Filter** – Quickly find pastes by title  
- 💾 **Local Storage** – Automatic persistence in browser  
- 📱 **Responsive Design** – Clean UI with Tailwind CSS  

---

## 📸 Screenshots

<details>
<summary>🏠 Home Page</summary>
<img src="/src/screenshots/home-with-localStorage.png" alt="Home Page" />
</details>

<details>
<summary>➕ Creating & Managing Pastes</summary>
<img src="/src/screenshots/adding-pastes.png" alt="Adding Paste" />
<img src="/src/screenshots/paste-already-exists.png" alt="Paste Exists" />
<img src="/src/screenshots/empty-field.png" alt="Validation Error" />
<img src="/src/screenshots/paste-updated.png" alt="Updated Paste Toast" />
</details>

<details>
<summary>📋 My Pastes</summary>
<img src="/src/screenshots/no-pastes.png" alt="No Pastes" />
<img src="/src/screenshots/all-pastes.png" alt="All Pastes" />
<img src="/src/screenshots/search-filtering.png" alt="Search Filtering" />
</details>

<details>
<summary>👁️ Viewing & Sharing</summary>
<img src="/src/screenshots/viewing-paste.png" alt="Viewing Paste" />
<img src="/src/screenshots/sharing-paste.png" alt="Sharing Paste" />
</details>

<details>
<summary>ℹ️ About Page</summary>
<img src="/src/screenshots/about.png" alt="About Page" />
</details>

<details>
<summary>⚠️ Error Handling & Invalid URLs</summary>
<img src="/src/screenshots/invalid-url.png" alt="Custom 404 page for invalid URLs" />
<img src="/src/screenshots/viewing-invalid-paste.png" alt="Display for an invalid Paste ID entered manually in the URL." />
</details>

---

## 📂 Project Structure

```plaintext
public/
└── favicon.png
src/
│── components/              # Reusable components
│   ├── About.jsx
│   ├── Home.jsx
│   ├── MyPastes.jsx
│   ├── Navbar.jsx
│   └── ViewPaste.jsx
│
│── redux/                   # Redux Toolkit slice
│   └── pasteSlice.js
│
│── screenshots/             # Images used in README
│
├── App.jsx                  # Root component
├── App.css                  # Styles
├── index.css                # Global styles
├── main.jsx                 # Entry point
└── store.js                 # Redux store config
```
---

## ⚡ Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repo
```bash
git clone https://github.com/Monika-Sahu-9380/pasteify.git
cd pasteify
```

2. Install dependencies
```bash
npm install
```
This will install all required packages listed in package.json.

👉 Key dependencies used in this project:
```bash
npm install react-router-dom @reduxjs/toolkit react-redux react-hot-toast lucide-react tailwindcss @tailwindcss/vite
```

3. Start the development server
```bash
npm run dev
```

---

## 📖 Learning Goals

Pasteify is a React project built to explore and practice:
  - 📦 React components, props, and state  
  - 🛤️ React Router DOM for navigation  
  - 🗂️ Redux Toolkit for global state management  
  - 💾 LocalStorage for persistence  
  - 🎨 Tailwind CSS for styling  
  - 🔔 React Hot Toast for notifications  
  - 🔗 Lucide icons for UI  

---

## ✨ Implementation Highlights
  - 🔄 Centralized State with Redux Toolkit – Clean slice structure and actions for CRUD operations.
  - 📋 Debounced Search – Optimized snippet search to prevent unnecessary re-renders.
  - ⚠️ Edge Case Handling – Prevents duplicate titles, empty inputs, and invalid snippet IDs.
  - 📱 Responsive UI – Built with TailwindCSS utilities to adapt across screen sizes.


---

## 🚀 Future Improvements

- [ ] 🌐 Cloud Sync – Store and sync pastes across devices using Firebase or MongoDB.
- [ ] 🏷️ Tags & Categories – Organize pastes more efficiently with custom labels.
- [ ] 📤 Advanced Sharing – Export pastes as links or downloadable files.
- [ ] 🌑 Enhanced UI/UX – Add dark mode, smooth animations, and refined design.
- [ ] ⚡ Optimized Performance – Improve state management and localStorage handling for larger datasets.

---

## 🙏 Acknowledgements

* This project was built with the help of the tutorial **"Creating PASTE - A Code/Notes Saver React App"** by the **CodeHelp - by Babbar** channel on YouTube. Special thanks for the guidance and clear explanations! 
- Thanks to the React, Redux, and Tailwind CSS communities for their excellent documentation and resources.

---

## 👩‍💻 Author

**Monika Sahu**
- [GitHub](https://github.com/Monika-Sahu-9380)
- [LinkedIn](https://www.linkedin.com/in/sahumonika/)

---

### 🔖 Tags  
React, Redux Toolkit, React Router, Tailwind CSS, Note Taking App, LocalStorage, Web App, Frontend Project