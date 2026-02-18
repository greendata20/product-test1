# Blueprint: Lotto Number Generator

## Overview

This is a simple, stylish web application that generates random lottery numbers. It provides a clean, user-friendly interface for generating and viewing a set of 6 unique numbers between 1 and 45. It includes theme support and a partnership inquiry form.

## Design and Features

### Application Structure
- **`index.html`**: Main structure with a theme toggle, lotto generator, and partnership inquiry form.
- **`style.css`**: Responsive styling with CSS variables for dark/light mode support.
- **`main.js`**: Logic for number generation and theme persistence.

### Features
- **Number Generation**: Generates 6 unique random integers between 1 and 45.
- **Theme Support**: Persistent dark and light mode selection.
- **Partnership Inquiry**: Integrated **Formspree** form for receiving collaboration requests directly via email.
- **Responsive Design**: Works perfectly on mobile and desktop.

## Current Plan

**Request:** "formspre 로 제휴 문의 받을 수 있는 간단한 폼 만들어줘"

**Steps:**

1.  **Update `index.html`**:
    - Added a `.partnership-section` with a Formspree-powered `<form>`.
    - Included fields for Email and Message.
2.  **Update `style.css`**:
    - Added styling for the form section, inputs, and textareas.
    - Ensured form elements adapt to both dark and light themes using CSS variables.
3.  **Version Control**:
    - Committed and pushed changes to GitHub.
