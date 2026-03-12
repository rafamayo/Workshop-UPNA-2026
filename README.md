# Workshop UPNA 2026 — FHIR, RESTful APIs, Web Apps & Standards for AI in Healthcare

This repository contains the complete materials for the **2026 teaching mobility workshop** delivered at
**Universidad Pública de Navarra (UPNA)** as part of the module *Clinical Information Systems*
in the B.Sc. in Biomedical Engineering.

The workshop consists of:

* A **4-hour session (Day 1)**: introduction to FHIR and RESTful APIs, plus hands-on labs.
* A **2-hour session (Day 2)**: small web application demo, a short module on AI & standards, and a group design activity.

The materials include:

* Slides (Day 1: FHIR & REST, Day 2: Standards & AI)
* Hands-on labs using a **browser-based environment** (Google Colab / Binder / JupyterHub)
* A minimal **web application skeleton** interacting with a FHIR server
* A small **AI demonstration notebook** showing how standardised FHIR data can support simple analytic workflows
* Instructor notes, student handouts, example resources, and group activity templates

---

## Quick Start for Students

### 1. Open the environment

Before the workshop, please check you can open the cloud environment:

➡️ See: [`docs/environment-setup.md`](docs/environment-setup.md)

This covers:

* How to open the Colab notebooks
* How to test access to the FHIR server
* How to load the web app demo

### 2. Day 1 labs

All notebook-based labs are in:

`labs/day1/`

Start with:

* `lab1-basic-fhir-rest/lab1-instructions.md`
* `lab1-basic-fhir-rest/lab1-starter-notebook.ipynb`

Then continue with:

* `lab2-mini-workflow/lab2-instructions.md`
* `lab2-mini-workflow/lab2-starter-notebook.ipynb`

### 3. Day 2 activities

See:

`labs/day2/`

Includes:

* Web app demo
* AI mini-module notebook
* Group activity template

---

## Repository Structure (Summary)

```text
docs/                 → overview, schedule, student handout, environment setup
env/                  → Colab/Binder config and FHIR server settings
group-activity/       → templates for the student group design activity
labs/                 → hands-on labs (day 1 and day 2)
slides/               → day 1 and day 2 slide decks
```

---

## Technologies Used

* **FHIR R4 or R5** (depending on server availability)
* **RESTful API interactions**
* Python notebooks (Colab/Jupyter)
* Simple web frontend (HTML + JavaScript `fetch` API)
* Synthetic FHIR datasets for AI demonstration

---

## Contact

Workshop author and instructor:<br>
**Prof. Dr. Rafael Mayoral Malmström**<br>
Hochschule Kempten – University of Applied Sciences<br>
Faculty of Computer Science / Medical Informatics
