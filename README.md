# Abel Tiruneh - Personal Portfolio Website V2

![Portfolio Showcase](https://via.placeholder.com/1200x600/111111/00aaff?text=Abel%20Tiruneh%20-%20Portfolio)

Welcome to the official repository for my personal portfolio website! This project is a professional, two-page site designed to showcase my skills and projects as a Full-Stack Developer and Game Developer. It features a sleek, modern design with a dynamic 3D animated hero section to create a memorable first impression.

---

## 🚀 Live Demo

Check out the live version of the website to see it in action!

<p align="center">
  <a href="[YOUR_LIVE_WEBSITE_LINK_HERE]" target="_blank">
    <img src="httpshttps://img.shields.io/badge/View%20Live-Site-blue?style=for-the-badge&logo=vercel" alt="Live Demo"/>
  </a>
</p>

---

## ✨ Key Features

-   **Stunning 3D Hero Section:** A captivating, animated 3D shape and particle system built with Three.js.
-   **Dynamic Scroll Animations:** Engaging scroll-based animations that reveal content and transition text smoothly.
-   **Two-Page Structure:** A clean landing page (`index.html`) for a concise overview and a dedicated, dynamically generated `projects.html` page to showcase all work.
-   **Categorized Projects:** The projects page intelligently separates work into "Web Development" and "Game Development" for clarity.
-   **Fully Responsive Design:** A mobile-first approach ensures the site looks and works perfectly on all devices, from phones to desktops.
-   **Clean & Organized:** The codebase is self-contained in two HTML files with embedded CSS and JavaScript, making it lightweight and easy to manage.

---

## 🛠️ Tech Stack & Tools

This portfolio was built using a combination of foundational web technologies and modern libraries to create a high-performance, visually appealing experience.

| Technology      | Icon                                                                                                                              | Description                                |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **HTML5**       | <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>             | Core structure of the website.             |
| **CSS3**        | <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>               | Styling, layout, and responsiveness.       |
| **JavaScript**  | <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JS"/> | Interactivity and dynamic content.         |
| **Three.js**    | <img src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js"/>           | Powers the 3D hero section animation.      |
| **Devicon**     | <img src="https://img.shields.io/badge/Devicon-222222?style=for-the-badge&logo=devicon&logoColor=white" alt="Devicon"/>             | Used for the technology icons in the skills section. |

---

## 📂 File Structure

The project is organized into two primary files for simplicity:

├── 📄 index.html # The main landing page
├── 📄 projects.html # The dedicated page for all projects
└── 🖼️ README.md # This file!


## ⚙️ Getting Started

No complex setup is required to run this project locally.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPOSITORY_NAME].git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd [YOUR_REPOSITORY_NAME]
    ```
3.  **Open `index.html` in your browser:**
    Simply double-click the `index.html` file, or right-click and choose "Open with" your favorite browser.

---

## ✏️ Customization

This portfolio is designed to be easily customized.

### 1. Personal Information (`index.html`)

All personal details (name, "About Me" text, skills, contact info) can be edited directly in the HTML of the `index.html` file.

### 2. Adding Projects (`projects.html`)

Adding new projects is simple, thanks to the JavaScript array at the bottom of `projects.html`.

1.  Open `projects.html` and scroll down to the `<script>` tag.
2.  Find the `allProjects` array.
3.  Copy an existing project block (from `{` to `},`) and paste it into the array.
4.  Update the details: `category`, `image`, `title`, `description`, `tech`, `liveLink`, and `sourceLink`.

**Example:**

```javascript
const allProjects = [
    // ... existing projects
    
    // To add a new project, copy this block:
    {
        category: 'web', // or 'game'
        image: 'https://your-new-project-image-url.com/image.png',
        title: 'My New Awesome App',
        description: 'A description of this fantastic new project.',
        tech: ['Tech1', 'Tech2'],
        liveLink: '#',
        sourceLink: '#'
    }
];
