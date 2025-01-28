# Custom Fragment Example

## Overview

This repository provides an example of creating rich and complex Fragments in [**Script Master**](https://kaisersoftapps.github.io/docs/docs/script-master). It demonstrates key development principles, including:

- **Separation of Concerns**: Splitting HTML, JavaScript, and CSS into separate files for better organization.
- **Structured Business Logic**: Implementing business logic with a modular structure, including `api`, `utils`, and main logic in `index.js`.
- **Function and Global Handling**: Examples of importing and exporting functions and global variables.
- **Forge Bridge API Usage**: Demonstrating APIs like `requestJira`, `context`, `router`, `showFlag`, and others.
- **Dark Theme Support**: Implementing support for Jira's dark theme.
- **Dynamic Resizing**: Adjusting the Fragment window size based on content.

This project does not rely on any front-end framework, providing a lightweight way to create complex UIs within various Jira UI elements using Script Master fragments. You can use this repository as a starting point and customize it according to your specific needs.

---

## Quick Start

1. **Install Dependencies**  
   Run the following command to install the required dependencies:  
   `yarn install`

2. **Start Build with Watch Mode**  
   Build the project with live updates using:  
   `yarn build:watch`

3. **Serve the Project Locally**  
   Use Live Server or a similar tool to serve the `index.html` file. Access it through a URL like:  
   `http://localhost:<port>/build/index.html`

4. **Integrate with Script Master**  
   - Open **Script Master** and create a new Fragment.
   - Enable the "External Editor" mode and insert the URL from Step 3 (e.g., `http://localhost:<port>/build/index.html`).

5. **(Optional) Enable Autosave Mode**  
   Turn on "Autosave" mode in Script Master to instantly apply changes during development.

---

## Troubleshooting and Support

If you encounter any issues or have feature requests, please contact our support team through our [Support Portal](https://kaisersoftapps.atlassian.net/servicedesk/customer/portal/1).
