# Web App Demo — Instructions

This short activity demonstrates how a simple web application (HTML + JavaScript) can interact with a FHIR server using RESTful API calls.

The goal is not to teach front-end development, but to understand how a user interface communicates with a FHIR backend.

---

## 1. Overview

You will work with the files located in:

```
labs/day2/webapp-demo/webapp-skeleton/
```

This folder contains:

* `index.html` — the user interface
* `app.js` — JavaScript file performing API calls
* `style.css` — optional styling

The demo allows you to:

1. Load a Patient from the FHIR server
2. Load Observations linked to that Patient
3. Display FHIR responses directly in the browser

---


## 2. How to Run the Web App (Recommended Method)

To ensure the demo works reliably in all browsers, you should run a small local web server.

Do **not** open `index.html` directly as a file.

---

### Step 1 — Open a Terminal / Command Prompt

Navigate to the folder:

labs/day2/webapp-demo/webapp-skeleton/

Example:

On macOS or Linux:

cd labs/day2/webapp-demo/webapp-skeleton/

On Windows (PowerShell):

cd labs\day2\webapp-demo\webapp-skeleton\

---

### Step 2 — Start a Local Server

#### macOS / Linux

Run:

python3 -m http.server 8000

If that does not work, try:

python -m http.server 8000

---

#### Windows

In PowerShell, try:

py -m http.server 8000

If that does not work:

python -m http.server 8000

---

### Step 3 — Open in Browser

Open:

[http://localhost:8000/](http://localhost:8000/)

You should now see the web app.

---

### If Port 8000 Is Already in Use

Use another port, for example:

python3 -m http.server 8080

Then open:

[http://localhost:8080/](http://localhost:8080/)

---

### Why This Is Necessary

Some browsers block JavaScript `fetch()` requests when opening files directly via:

file://

Running a small local server ensures:

* Consistent behavior across browsers
* No CORS (Cross-Origin Resource Sharing) problems
* No privacy shield interference
* Correct loading of JavaScript and CSS files

---

## Alternative Option — VS Code Live Server

If you use Visual Studio Code:

1. Install the extension "Live Server"
2. Right-click index.html
3. Choose "Open with Live Server"

This automatically starts a local server.

---

## Optional Option — Online IDE

Upload the files to:

* codesandbox.io
* stackblitz.com
* replit.com

These platforms host the app automatically.



## 3. Structure of the JavaScript Code

Open the file:

```
webapp-skeleton/app.js
```

You will find something like:

```javascript
const FHIR_SERVER = "https://example.com/fhir/";

async function loadPatient() {
  const response = await fetch(FHIR_SERVER + "Patient/example");
  const json = await response.json();
  document.getElementById("output").textContent = JSON.stringify(json, null, 2);
}
```

Key points:

* `fetch` performs the REST call
* `response.json()` parses the FHIR resource
* The result is shown in a `<pre>` element on the webpage

---

## 4. Tasks (Small Modifications)

### Task 1 — Load your own Patient

Find:

```javascript
"Patient/example"
```

Replace `"example"` with the Patient ID you created on Day 1.

Reload the page — your JSON should appear.

---

### Task 2 — Add a button to load Observations

In `index.html`, add:

```html
<button onclick="loadObservations()">Load Observations</button>
```

In `app.js`, add:

```javascript
async function loadObservations() {
  const response = await fetch(FHIR_SERVER + "Observation?subject=Patient/" + patientId);
  const json = await response.json();
  document.getElementById("output").textContent = JSON.stringify(json, null, 2);
}
```

Replace `patientId` with your actual ID or define it as a variable at the top.

---

### Task 3 — Print a simple summary

Add:

```javascript
const first = json.entry?.[0]?.resource;
if (first) {
  document.getElementById("summary").textContent =
    "First observation code: " + first.code.coding[0].code;
}
```

This shows how the UI can extract values from the FHIR response.

---

## 5. Optional Extensions

* Display Observations as a formatted table
* Let the user type a Patient ID
* Color-code abnormal values (e.g., red if BP > 140)

---

## 6. Learning Outcomes

After this demo, you should understand:

* How UI → API → FHIR communication works
* How to perform REST calls in JavaScript
* How JSON responses are rendered and processed
* How a prototype clinical information system might interact with FHIR

This prepares you for the **group design activity**.