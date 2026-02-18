# Workshop Schedule 2026

**FHIR, RESTful APIs, Web Apps & Standards for AI in Healthcare**

This workshop consists of **two sessions** delivered across two days.
Total: **6 hours**.

---

## Day 1 — Foundations & Hands-On Labs

**08:00 – 12:00 (4 hours)**
**Focus:** FHIR fundamentals, REST operations, clinical workflow modeling

---

### **08:00–08:15 — Welcome & Environment Setup**

* Introductions
* Learning goals
* Check cloud environment (Colab/Binder/JupyterHub)
* Test FHIR server access

### **08:15–09:00 — Theory Block 1: FHIR & REST Refresher**

* FHIR resource model
* JSON structure
* REST operations (GET, POST, PUT, DELETE)
* Search parameters & clinical context

### **09:00–10:00 — Lab 1: Basic FHIR & REST Interaction**

* Querying `Patient`, `Observation`
* Creating a Patient
* Creating an Observation
* Understanding server responses

**10-minute break (10:00–10:10)**

### **10:10–11:20 — Lab 2: Mini Clinical Workflow**

* Create two additional Observations
* Build a DiagnosticReport referencing Observations
* Retrieve workflow using search
* Optional: Bundle transactions

### **11:20–11:50 — Instructor Demo: FHIR from Code**

* Short example of Python/JS querying FHIR
* Connecting REST logic to web apps
* Preview of Day 2

### **11:50–12:00 — Wrap-Up Day 1**

* Summary
* Q&A
* Instructions for Day 2

---

## Day 2 — Web Apps, AI Concepts & Group Activity

**12:00 – 14:00 (2 hours)**
**Focus:** Connecting clients to FHIR, understanding standards for AI, designing use cases

---

### **12:00–12:20 — Web App Demo**

* Simple web client interacting with FHIR server
* Students modify basic interactions (ID changes, small queries)
* Data flow: UI → API → FHIR

### **12:20–12:40 — Mini-Module: Standards & AI in Healthcare**

* Importance of structured data for AI
* FHIR as a foundation for trustworthy data pipelines
* Notebook demonstration: extracting a simple feature from synthetic FHIR data

### **12:40–13:40 — Group Activity: FHIR-Based Use Case Design**

Teams of 2–3 students:

* Choose a clinical scenario
* Identify FHIR resources needed
* Plan REST interactions
* Sketch interface elements
* Optional AI/alert rule (simple!)

### **13:40–14:00 — Lightning Presentations & Conclusion**

* Each group presents (1–2 minutes)
* Key insights and feedback
* Closing remarks