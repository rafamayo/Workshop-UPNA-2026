# Environment Setup — Workshop UPNA 2026

FHIR, REST & Web Applications

This document explains how to prepare your environment for the workshop.

Please read this carefully and complete the **pre-check before Day 1**.

---

# What You Really Need (Quick Summary)

For Day 1 (FHIR + REST labs):

You need ONE of the following:

* ✅ Google Colab (recommended)
* ✅ Local Python + Jupyter Lab
* ✅ VS Code + Jupyter extension
* ✅ Jupyter.org (browser-based execution)

For Day 2 (Web App demo):

You need ONE of the following:

* ✅ Python installed (to run `python -m http.server`)
* ✅ VS Code with “Live Server” extension

If you work locally (Jupyter Lab or VS Code), you should also have:

* ✅ Git installed (recommended)

Optional REST clients:

* Postman
* VS Code + REST Client extension
* [https://hoppscotch.io/](https://hoppscotch.io/)

If you can:

* Run a notebook
* Execute Python code
* Reach the FHIR server
* Start a small local web server
* Access the workshop repository

→ You are fully prepared.

---

# Getting the Workshop Materials

The workshop materials are provided via a Git repository.

If you are using Google Colab, a direct link to open the notebooks will be provided.

If you are working locally, you must download the repository.

---

## Option A — Using Git (Recommended)

Check if Git is installed:

```bash
git --version
```

If Git is not installed:

Download from:
[https://git-scm.com/](https://git-scm.com/)

To clone the repository:

```bash
git clone https://github.com/rafamayo/Workshop-UPNA-2026.git
```

Then navigate into the folder:

```bash
cd <repository-folder>
```

---

## Option B — Download ZIP (Fallback)

If you prefer not to use Git:

1. Open the repository in your browser.
2. Click "Code" → "Download ZIP".
3. Extract the ZIP file.
4. Open the extracted folder in Jupyter or VS Code.

Note:

* If materials are updated, you will need to re-download the ZIP.
* Git makes updates easier.

---

# Day 1 — FHIR & REST (Notebook-Based)

You must be able to run Jupyter notebooks.

Choose ONE of the following setups.

---

## Option 1 — Google Colab (Recommended)

No installation required.

Steps:

1. Visit: [https://colab.research.google.com](https://colab.research.google.com)
2. Log in with a Google account.
3. Create a new notebook.
4. Run:

```python
print("Colab is working!")
```

If it runs without error → you are ready.

Why recommended:

* No installation
* No dependency problems
* Works in any browser

---

## Option 2 — Local Installation (Jupyter Lab)

Requirements:

* Python 3.10 or newer
* pip installed
* You are in the repository folder

1. Create a vitual environment
```bash
python -m venv ./myvenv 
```

2. Activate the virtual environment
```bash
source ./myvenv/bin/activate
```

4. Install the required modules:

```bash
pip install jupyter requests pandas matplotlib
```

5. Start Jupyter:

```bash
jupyter lab
```

6. Open the workshop notebooks and run:

```python
print("Local Jupyter works!")
```

**Caution:** Every time you want to work on the notebooks you need to

1. Activate the virtual environment
```bash
source ./myvenv/bin/activate
```

2. Start Jupyter:

```bash
jupyter lab
```

### Using a vitual environment makes sure that your project doesn't mess with the rest of the system!

---

## Option 3 — VS Code + Jupyter Extension

Requirements:

* Python installed
* VS Code installed

Install extension:

* "Jupyter" (by Microsoft)

Open the notebook file in VS Code and run:

```python
print("VS Code Jupyter works!")
```

---

## Option 4 — Jupyter.org (Fully Browser-Based)

Visit:

[https://jupyter.org/try](https://jupyter.org/try)

Upload the notebook file.

Run:

```python
print("Remote Jupyter works!")
```

Note:

* This environment may reset
* Files may not persist
* Web app demo will still require local server on Day 2

Use only if other options are not possible.

---

# Day 1 — FHIR Server Pre-Check

Before the workshop, test connection to the FHIR server.

In your notebook environment, run:

```python
import requests

FHIR_SERVER = "https://hapi.fhir.org/baseR4/"
r = requests.get(FHIR_SERVER + "metadata")
print(r.status_code)
```

Expected result:

* 200 → OK
* JSON output → Perfect

If you see errors:

* Check internet connection
* Check firewall restrictions
* Try another network
* Inform the instructor

---

# Day 2 — Web App Demo

For Day 2, you must be able to run a small local web server.

Choose ONE option.

---

## Option 1 — Python Lightweight Server (Recommended)

Navigate to:

```
labs/day2/webapp-demo/webapp-skeleton/
```

Start server:

macOS / Linux:

```bash
python3 -m http.server 8000
```

Windows:

```bash
py -m http.server 8000
```

Open in browser:

[http://localhost:8000/](http://localhost:8000/)

If you see the web page → ready.

---

## Option 2 — VS Code + Live Server

Requirements:

* VS Code installed
* “Live Server” extension installed

Steps:

1. Open `index.html`
2. Right-click
3. Select “Open with Live Server”

Browser should open automatically.

---

# Optional: REST Clients

During the workshop you may want to test REST calls outside Python.

You can use:

* Postman (desktop app)
* VS Code + REST Client extension
* Hoppscotch (online): [https://hoppscotch.io/](https://hoppscotch.io/)

These are optional and not required.

---

# Troubleshooting

## Cannot reach FHIR server

* Check URL carefully
* Ensure internet access
* Try different browser
* Try different network
* Instructor will provide fallback endpoint if needed

---

## Git not found

Check:

```bash
git --version
```

If not installed:

[https://git-scm.com/](https://git-scm.com/)

---

## Python not found

Check:

Windows:

```
py --version
```

macOS/Linux:

```
python3 --version
```

Install from:

[https://www.python.org/](https://www.python.org/)

---

# Final Check Before Workshop

You are ready if:

* You can run a notebook cell
* You can send a GET request to the FHIR server
* You can start a local web server
* You can open [http://localhost:8000/](http://localhost:8000/)
* You have access to the workshop repository

Test everything at least one day before the workshop.
