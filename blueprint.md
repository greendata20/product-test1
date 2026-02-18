
# Blueprint: Lotto Number Generator

## Overview

This is a simple, stylish web application that generates random lottery numbers. It provides a clean, user-friendly interface for generating and viewing a set of 6 unique numbers between 1 and 45.

## Design and Features (Version 1.0)

### Application Structure
- **`index.html`**: Contains the main structure of the application, including the title, a button to generate numbers, and a container to display the results.
- **`style.css`**: Provides the styling for the application, focusing on a modern, visually appealing, and responsive design.
- **`main.js`**: Holds the core logic for generating the unique, sorted lottery numbers and updating the UI.

### Visual Design
- **Layout**: Centered, single-column layout for easy viewing on all devices.
- **Color Palette**: A vibrant and energetic color scheme with a subtle background texture.
- **Typography**: Clear, expressive fonts to create a visual hierarchy.
- **Components**:
    - **Button**: An interactive button with a "glow" effect and a soft, deep shadow to feel "lifted" and encourage interaction.
    - **Number Display**: The generated numbers are displayed in individual "ball" elements, each with a distinct style, shadow, and spacing to be easily readable.
- **Effects**:
    - A subtle noise texture on the main background for a premium, tactile feel.
    - Multi-layered drop shadows on components to create a sense of depth.

### Features
- **Number Generation**: Generates 6 unique random integers between 1 and 45 upon a button click.
- **Sorted Display**: The generated numbers are always displayed in ascending order.
- **Responsive Design**: The layout adapts smoothly to different screen sizes, ensuring a great experience on both mobile and desktop.

## Current Plan

**Request:** "Please change index.html to create a lottery number generator."

**Steps:**

1.  **Update `index.html`:**
    -   Change the page title and main heading to "Lotto Number Generator".
    -   Add a button with `id="generate-btn"`.
    -   Add a `div` with `id="lotto-numbers"` to serve as a container for the generated numbers.
2.  **Update `style.css`:**
    -   Implement a modern and visually appealing design for the body, header, button, and number display area.
    -   Use flexbox for layout and alignment.
    -   Apply shadows, colors, and textures as described in the Visual Design section.
3.  **Update `main.js`:**
    -   Create a JavaScript function to generate 6 unique random numbers from 1 to 45.
    -   Add an event listener to the "Generate Numbers" button.
    -   When the button is clicked, call the generation function and dynamically create and insert the styled number elements into the `#lotto-numbers` container.
