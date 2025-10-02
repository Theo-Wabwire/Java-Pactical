README.md

USIU First-Year Companion 

This project is the Minimum Viable Product (MVP) for a lightweight, static microsite designed for the United States International University-Africa's Student Affairs office. Its primary purpose is to **welcome new students** during Orientation Week and provide a basic tool for **estimating weekly campus expenses**.

The application is built using introductory **HTML5**, **CSS**, and **Vanilla JavaScript** (Lesson 1 concepts).

---



* **Personalized Greeting:** Prompts the user for their first name on load, shows an alert, and updates the #greeting element with a custom welcome message.
* **Cost Estimator:** Upon clicking "Run Estimator," it collects data via sequential prompt() calls (days on campus, transport cost, snack prices) and calculates estimated weekly transport, snack, and total costs.
* **Money-Saving Tip:** Includes a simple arithmetic calculation to show how much a student could save by cutting **10%** of their total weekly budget.
* **Theme Toggle:** Allows the user to switch between a light and dark theme using basic JavaScript DOM style manipulation (document.body.style).
* **Debuggability:** All key inputs and final calculations are logged to the browser **console** for traceability.

---



This application is a static site and requires no server.

1.  Navigate to the project directory (usiu-first-year-companion/public/).
2.  Open **index.html** in any modern web browser (e.g., Chrome, Firefox).

---



### Limitations (v1 Constraints)

* **User Input:** All user input is gathered via JavaScript's native **prompt()** function, which is intrusive and blocks the main thread.
* **Theme State:** The theme toggle uses basic style changes (document.body.style) and does not persist state across page loads, as required by the Lesson 1 constraints.

### Next Steps (Future Development)

* **Replace Prompts with Forms:** Update the user experience by replacing the blocking prompt() calls with a proper **HTML form** and modern event listeners.
* **CSS Variable Theme Management:** Enhance the theme toggle by using CSS variables and toggling a class on the body element (e.g., dark-theme) instead of direct style manipulation.
* **Local Storage:** Implement **localStorage** to remember the student's name and their preferred theme.