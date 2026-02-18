Perfect — we’ll align this README with the improved local-server approach and remove the “open file directly” recommendation.

Below is a **clean, revised version** of your README.md.
It is consistent with the updated instructions and avoids browser inconsistencies.

You can copy and replace the existing file.

---

# Web App Demo – FHIR + REST + JavaScript

This folder contains a minimal skeleton for a small web application that interacts with a public FHIR server. Students use this example on **Day 2** of the workshop to explore how a browser-based front end can:

* Build REST URLs
* Fetch Patient resources from a FHIR server
* Display selected fields in the UI
* Handle errors and missing data

The code intentionally avoids frameworks so that the focus remains on:

* HTTP
* JSON
* FHIR resource structure
* Browser-based REST calls

---

## Folder Structure

webapp-demo/
│
├── README.md
├── webapp-instructions.md
└── webapp-skeleton/
  ├── index.html
  ├── app.js
  └── style.css

---

## How to Run the Web App (Recommended Method)

To ensure consistent behavior across browsers (Chrome, Brave, Firefox, Edge), run a small local web server.

Do not open `index.html` directly via file://.

---

### Step 1 – Open a Terminal or Command Prompt

Navigate into the webapp-skeleton folder:

On macOS or Linux:

cd labs/day2/webapp-demo/webapp-skeleton/

On Windows (PowerShell):

cd labs\day2\webapp-demo\webapp-skeleton\

---

### Step 2 – Start a Local Server

macOS / Linux:

python3 -m http.server 8000

If that does not work:

python -m http.server 8000

Windows:

py -m http.server 8000

If needed:

python -m http.server 8000

---

### Step 3 – Open in Browser

Open:

[http://localhost:8000/](http://localhost:8000/)

You should now see the web application.

---

### If Port 8000 Is Already in Use

Use a different port, for example:

python3 -m http.server 8080

Then open:

[http://localhost:8080/](http://localhost:8080/)

---

### Why a Local Server Is Recommended

Some browsers block JavaScript `fetch()` requests when a page is opened directly via file://.

Running a small local server ensures:

* Reliable loading of JavaScript and CSS files
* No file-origin restrictions
* Consistent cross-browser behavior
* Fewer CORS-related surprises

---

## Alternative Options

### VS Code Live Server

If you use Visual Studio Code:

1. Install the extension “Live Server”
2. Right-click index.html
3. Choose “Open with Live Server”

This automatically starts a local web server.

---

### Online Hosting (Optional)

You can upload the webapp-skeleton folder to:

* GitHub Pages
* Netlify
* A departmental static web server

No backend code is required.

---

## Learning Goals

This demo helps you:

* Understand how JavaScript `fetch()` interacts with FHIR REST endpoints
* Practice constructing FHIR URLs such as Patient/{id}
* Inspect JSON responses in the browser console and on the page
* See how a minimal UI connects input fields, network requests, and output

It bridges the Python notebook labs and more complete clinical dashboards or decision-support tools.

---

## Suggested Extensions (Optional)

If you finish early, you can extend the app:

* Display selected Patient fields (name, birth date, gender) instead of raw JSON
* Add a button to load Observations for the given Patient
* Show vital signs in a simple table
* Add a “Loading…” indicator while waiting for the server
* Display error messages inside the page instead of only in the console

These improvements illustrate how small prototypes can evolve into richer clinical applications.

---

## Credits

UPNA Workshop 2026 – FHIR & Clinical Information Systems
Hochschule Kempten – University of Applied Sciences
