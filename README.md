# Personal Portfolio Website

![Personal Portfolio Showcase](https://via.placeholder.com/1200x600/111111/00aaff?text=Abel%20Tiruneh%20//%20Developer%20Portfolio)

This repository contains the source code for my personal portfolio. It's a two-page website designed to showcase my skills and projects in web and game development, built with a focus on a clean aesthetic and a memorable user experience.

**➡️ Live Version:** **[portfolio.abelt.com](https://[YOUR_LIVE_WEBSITE_LINK_HERE])**

---

## Features

-   **3D Animated Hero:** The homepage greets visitors with a dynamic 3D animation powered by Three.js.
-   **Scroll-Based Animations:** Content gracefully fades in on the main page as the user scrolls, and the hero text transitions through my different roles.
-   **Dedicated Projects Page:** A main landing page (`index.html`) provides a quick overview, while a separate `projects.html` page showcases my entire body of work.
-   **JavaScript-Powered Grid:** The projects page is generated dynamically from a simple JavaScript array, automatically sorting projects into "Web Development" and "Game Development" categories.
-   **Fully Responsive:** The layout is optimized to ensure a seamless experience on all devices, from mobile phones to large desktop screens.

---

## Tech Stack

This project was built using core web technologies and a key library for the 3D graphics.

-   🌐 **HTML5 & CSS3:** For the structure and styling of the website.
-   💻 **JavaScript (ES6+):** For all interactivity, animations, and dynamic project generation.
-   🎨 **Three.js:** The 3D JavaScript library used to create the animated hero section.

---

## How to Use

### Running Locally

No special tools are required. You can run this website locally by following these steps:

1.  Clone this repository to your machine:
    ```bash
    git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPOSITORY_NAME].git
    ```
2.  Navigate into the cloned folder.
3.  Open the `index.html` file in any web browser.

### Customizing the Content

The portfolio is designed for easy editing.

1.  **Editing Personal Info:**
    -   All personal details like the "About Me" section, skills, and contact links can be changed by editing the HTML in the `index.html` file.

2.  **Adding or Changing Projects:**
    -   Open the `projects.html` file.
    -   Scroll to the bottom to find the `<script>` tag.
    -   Inside, you will find the `allProjects` array.
    -   To add a new project, simply copy an existing project object, paste it at the end of the list, and change the details (title, image, description, etc.).

    **Example Project Object:**
    ```javascript
    {
        category: 'web', // or 'game'
        image: 'https://your-image-url.com/project.png',
        title: 'My New Project',
        description: 'A brief and interesting description of what this project does.',
        tech: ['React', 'Node.js'],
        liveLink: '#',
        sourceLink: '#'
    }
    ```

---

## Connect with Me

I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.

-   📧 **Email:** `abeltiruneh2468@gmail.com`
