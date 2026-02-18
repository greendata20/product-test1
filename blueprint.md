# Blueprint: Lotto Number Generator

## Overview

This is a simple, stylish web application that generates random lottery numbers. It provides a clean, user-friendly interface for generating and viewing a set of 6 unique numbers between 1 and 45. It now includes support for both light and dark modes.

## Design and Features

### Application Structure
- **`index.html`**: Contains the main structure of the application, including the title, a theme toggle button, a button to generate numbers, and a container to display the results.
- **`style.css`**: Provides the styling for the application, focusing on a modern, visually appealing, and responsive design. It uses CSS variables for easy switching between light and dark modes.
- **`main.js`**: Holds the core logic for generating the unique, sorted lottery numbers, updating the UI, and managing theme persistence.

### Visual Design
- **Layout**: Centered, single-column layout for easy viewing on all devices.
- **Color Palette**: A vibrant and energetic color scheme that adapts to the selected theme (Dark or Light).
- **Typography**: Clear, expressive fonts to create a visual hierarchy.
- **Components**:
    - **Theme Toggle**: A button to switch between light and dark modes.
    - **Button**: An interactive button with a "glow" effect and a soft, deep shadow to feel "lifted" and encourage interaction.
    - **Number Display**: The generated numbers are displayed in individual "ball" elements, each with a distinct style, shadow, and spacing to be easily readable.
- **Effects**:
    - A subtle noise texture on the main background for a premium, tactile feel.
    - Multi-layered drop shadows on components to create a sense of depth.
    - Smooth color transitions when switching themes.

### Features
- **Number Generation**: Generates 6 unique random integers between 1 and 45 upon a button click.
- **Sorted Display**: The generated numbers are always displayed in ascending order.
- **Theme Support**: Persistent dark and light mode selection using `localStorage`.
- **Responsive Design**: The layout adapts smoothly to different screen sizes, ensuring a great experience on both mobile and desktop.

## Current Plan

**Request:** "다크모드 화이트모드 기능 추가해서 git push 까지 진행해줘"

**Steps:**

1.  **Refactor `style.css`**: 
    - Introduced CSS variables (`:root`) for all colors and styles.
    - Added a `.light-mode` class to override these variables.
    - Added transitions for smooth theme switching.
2.  **Update `index.html`**:
    - Added a theme toggle button (`#theme-btn`) inside the container.
3.  **Update `main.js`**:
    - Added event listener for the theme toggle.
    - Implemented `localStorage` to save and load the user's theme preference.
4.  **Version Control**:
    - Stage, commit, and push the changes to GitHub.
