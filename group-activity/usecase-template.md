# Group Activity – Use Case Canvas (1 Page)

## 1. Clinical Scenario
Briefly describe the clinical situation or workflow your system supports.
Examples:
- Monitoring postoperative patients
- Managing chronic diseases
- Capturing vital signs at home

Your description:
…

---

## 2. Key Actors
Who interacts with the system?
Examples: Patient, Nurse, Physician, Device, Backend system

Actors:
…

---

## 3. Data Elements Needed
List the minimal FHIR resources and key fields required.

Data Element | FHIR Resource | Coding System (optional)
-------------|----------------|--------------------------
…            | …              | …
…            | …              | …

---

## 4. Example REST Interactions
Define two to four specific API calls the system must perform.

Example calls:
1. GET Patient/{id}
2. POST Observation
3. GET Observation?code=...

Your calls:
1. …
2. …
3. …

---

## 5. Mini Workflow Description
Describe the step-by-step sequence of system interactions.

Example:
1. Patient enters symptoms in app
2. App sends Observation to server
3. Clinician dashboard fetches Observations

Your workflow:
…

---

## 6. Optional: AI or Decision Support Idea
A lightweight idea such as trend detection, threshold alerts, rule-based logic.

Idea:
…

---

## 7. Risks and Limitations
List two or three risks or open questions.
Examples: data quality, missing timestamps, wrong coding, privacy issues.

Risks:
…

---

## 8. What Should Be Demonstrable
Define what your group will show during the two-minute presentation.

Demo goals:
…
