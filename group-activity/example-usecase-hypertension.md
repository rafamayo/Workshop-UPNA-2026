# Example Use Case – Home Monitoring of Hypertension

## 1. Clinical Scenario
A patient with hypertension measures blood pressure at home using a Bluetooth cuff.
Measurements are uploaded to a FHIR server. A clinician reviews weekly trends and
receives alerts when readings exceed thresholds.

---

## 2. Key Actors
- Patient
- Home blood pressure device
- FHIR backend server
- Clinician using dashboard

---

## 3. Data Elements Needed

Data Element            | FHIR Resource     | Coding System
------------------------|-------------------|--------------
Systolic blood pressure | Observation       | LOINC 8480-6
Diastolic blood pressure| Observation       | LOINC 8462-4
Heart rate (optional)   | Observation       | LOINC 8867-4
Patient demographics    | Patient           | —
Weekly summary          | DiagnosticReport  | —

---

## 4. Example REST Interactions
1. POST Observation (systolic, diastolic)
2. GET Observation?subject=Patient/123&code=8480-6
3. GET Observation?subject=Patient/123&code=8462-4
4. POST DiagnosticReport (weekly summary)

---

## 5. Mini Workflow
1. Patient measures BP at home
2. Device posts Observations to FHIR server
3. Dashboard fetches Observations from past week
4. System computes weekly averages
5. If average systolic > 140 mmHg → alert flag

---

## 6. AI or Decision-Support Idea
Example: compute the slope of systolic or diastolic values.  
A positive slope across several measurements indicates deterioration.  
Alternative: classify the patient as “Stable” or “Needs Review” using simple rules.

---

## 7. Risks and Limitations
- Device may generate outliers or incorrect readings
- Missing timestamps or wrong units
- Irregular measurement frequency
- Network or FHIR server reliability issues

---

## 8. Demo Goals
- Show example JSON for Observation
- Explain two to three REST interactions
- Present a simple trend interpretation
- State at least one assumption or risk
