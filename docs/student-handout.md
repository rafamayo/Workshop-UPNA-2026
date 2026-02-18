# Student Handout — Key Concepts

**Workshop UPNA 2026: FHIR, RESTful APIs, Web Apps & Standards for AI**

This handout summarizes the most important concepts you will encounter in the workshop.

---

# 1. FHIR Basics

**FHIR (Fast Healthcare Interoperability Resources)** is a standard that defines:

* **Resources** — small, reusable data structures
  Examples:

  * `Patient`
  * `Observation`
  * `Condition`
  * `DiagnosticReport`

* **Formats:** JSON (used in this workshop), XML

* **References:** resources can link to each other, enabling workflows

  * e.g., an `Observation` references a `Patient`
  * a `DiagnosticReport` references multiple `Observation` resources

FHIR allows healthcare systems to **exchange data reliably and consistently**.

---

# 2. RESTful APIs in Healthcare

FHIR uses standard web technologies:

| REST Verb  | Meaning             | Example               |
| ---------- | ------------------- | --------------------- |
| **GET**    | Read/search data    | `GET Patient/123`     |
| **POST**   | Create new resource | `POST Patient`        |
| **PUT**    | Replace resource    | `PUT Observation/789` |
| **DELETE** | Remove resource     | `DELETE Patient/123`  |

Typical interactions:

* Retrieve Patient:
  `GET /Patient/ID`
* Search Observations:
  `GET /Observation?code=LOINC_CODE`
* Create new Observation:
  `POST /Observation` with JSON body

FHIR servers return JSON responses including IDs and error messages.

---

# 3. Common FHIR Resources Used in the Workshop

### Patient

Demographics (name, birth date, gender, identifiers)

### Observation

Measurements such as vital signs (heart rate, BP, temperature)

### DiagnosticReport

Summaries or results that reference multiple Observations

### Bundle

A collection of resources submitted together as a transaction

---

# 4. Clinical Workflow Example (Mini-Workflow)

You will build this in the labs:

1. Create a **Patient**
2. Create several **Observations** for the patient
3. Create a **DiagnosticReport** referencing those Observations
4. Query the FHIR server to retrieve everything again

This models a simplified real-world clinical documentation process.

---

# 5. Web Application Logic (Day 2)

A web application can interact with a FHIR server using JavaScript:

```javascript
fetch(FHIR_SERVER + "Patient/123")
  .then(response => response.json())
  .then(data => console.log(data));
```

Key idea:

**UI → makes HTTP request → receives JSON → displays clinical data**

You will experiment with a minimal example.

---

# 6. Standards & AI — Why It Matters

AI in healthcare requires:

* **Structured data**
* **Consistent coding systems** (e.g., LOINC, SNOMED CT)
* **Clear resource definitions**

FHIR helps by providing:

* Standard JSON structures
* Defined fields and relationships
* Interoperable semantics

A simple demonstration notebook will show how vital sign values can be extracted and used for basic analytic logic.

---

# 7. Group Activity Checklist (Day 2)

In your group design:

* Define clinical scenario
* Identify resources involved
* Sketch REST interactions
* Draw a simple UI layout
* Optional: add rule or alert based on observation values

---

# 8. Tips for Success

* Pay attention to **IDs** returned by the server
* Inspect JSON carefully
* Test search queries with different parameters
* Use sample files if you encounter errors
* Work in pairs — discuss and debug together

---

If you want more practice, explore additional resources from HL7:
[https://www.hl7.org/fhir/](https://www.hl7.org/fhir/)

