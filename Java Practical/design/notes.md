# Design Rationale Notes - USIU First-Year Companion (v1)

## 1. Mobile-First Approach
The wireframes are designed with a mobile-first philosophy, as new students will likely access this quick helper site on their phones during orientation week or on the move. This prioritizes essential information and large, touch-friendly buttons.

## 2. Color and Theme (CSS/JS Interaction)
The design uses a simple dark/light theme toggle.
* **Day Mode (Default):** White background, dark text, USIU Blue accents.
* **Night Mode:** Dark grey/black background, light text, Lighter Blue/Yellow accents.
* **Implementation:** The HTML buttons are prominent. The CSS defines base styles, and the JavaScript (`toggleTheme` function) changes the `document.body.style.backgroundColor` and `color` as per Lesson 1's constraints.

## 3. Core Interactions
The design is built around the three main JavaScript interactions:

1.  **Personalized Greeting (On Load):** The user is immediately greeted by name, setting a welcoming and personal tone.
2.  **Estimator (On Button Click):** The process is explicitly started by the "**Run Estimator**" button, which triggers the `prompt()` chain.
3.  **Theme Toggle (On Button Click):** The "**Toggle Theme**" button provides clear, instant feedback, showcasing a basic DOM style manipulation.

## 4. Estimator Summary (`<pre id="summary">`)
The Summary section is designed using a `<pre>` tag to ensure the output from JavaScript (which will include line breaks) is formatted neatly and consistently, resembling a financial printout or console output. The summary is kept simple to clearly display the three calculated values: Weekly Transport, Weekly Snacks, and the 10% Savings Tip.