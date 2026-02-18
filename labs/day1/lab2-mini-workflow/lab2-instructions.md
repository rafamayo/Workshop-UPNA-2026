# Lab 2 — Mini Clinical Workflow: Patient → Observations → DiagnosticReport

**Estimated time:** 70 minutes

**Learning goals:**

* Create a chain of related FHIR resources.
* Understand how clinical workflows translate into FHIR structures.
* Use references and search parameters to retrieve data.
* Validate that the workflow is consistent and complete.

---

## 1. Starting Point

From **Lab 1**, you should have:

* A `Patient` resource ID.
* At least one `Observation` for this patient.

If not, you can:

* Repeat the creation steps from Lab 1, or
* Use the sample JSON files in:

  `example-resources/`

---

## 2. Create Two Additional Observations

Choose two vital signs, for example:

* Heart rate (LOINC `8867-4`)
* Body temperature (LOINC `8310-5`)
* Respiration rate (LOINC `9279-1`)

**Tasks:**

1. Duplicate your Observation template from Lab 1.
2. Change the `code.coding` portion to reflect the correct LOINC code.
3. Set different `effectiveDateTime` values (e.g. different times on the same day).
4. POST both Observations to the server.

Check the responses for status code **201** and note the new Observation IDs.

---

## 3. Create a DiagnosticReport Referencing Your Observations

Use the following template as a starting point:

```json
{
  "resourceType": "DiagnosticReport",
  "status": "final",
  "subject": { "reference": "Patient/REPLACEME" },
  "effectiveDateTime": "2024-05-10T10:15:00Z",
  "result": [
    { "reference": "Observation/ID1" },
    { "reference": "Observation/ID2" },
    { "reference": "Observation/ID3" }
  ]
}
```

In the notebook:

```python
patient_id = "YOUR_PATIENT_ID"
obs_id_1 = "OBS_ID_1"
obs_id_2 = "OBS_ID_2"
obs_id_3 = "OBS_ID_3"

diagnostic_report_json = {
    "resourceType": "DiagnosticReport",
    "status": "final",
    "subject": { "reference": f"Patient/{patient_id}" },
    "effectiveDateTime": "2024-05-10T10:15:00Z",
    "result": [
        { "reference": f"Observation/{obs_id_1}" },
        { "reference": f"Observation/{obs_id_2}" },
        { "reference": f"Observation/{obs_id_3}" }
    ]
}

response = requests.post(FHIR_SERVER + "DiagnosticReport", json=diagnostic_report_json)
print(response.status_code, response.json())
```

**Tasks:**

* Replace the IDs with the ones you actually created.
* Verify that the status code is **201** and that the response contains an `id`.

---

## 4. Retrieve the Entire Workflow

### 4.1 Find the DiagnosticReport by Patient

```python
requests.get(FHIR_SERVER + f"DiagnosticReport?subject=Patient/{patient_id}").json()
```

Check that your DiagnosticReport appears in the search result.

---

### 4.2 Retrieve Referenced Observations

From the DiagnosticReport JSON, inspect the `result` field:

```json
"result": [
  { "reference": "Observation/ID1" },
  ...
]
```

For each reference:

```python
requests.get(FHIR_SERVER + "Observation/ID1").json()
```

Confirm that:

* The `subject` field in each Observation matches your patient.
* The `code` and `valueQuantity` are as expected.

---

## 5. Optional: Use a Bundle Transaction

Advanced (optional):

* Create a `Bundle` of type `transaction` that contains:

  * One `Patient`
  * Two or three `Observation` resources
  * One `DiagnosticReport` referencing the Observations

* POST the Bundle to `/Bundle`.

This simulates creating multiple resources in a single atomic operation.

---

## 6. Validate the Resources (Negative Testing)

Try intentionally breaking something to see how the server responds:

* Wrong `reference` (e.g. `Observation/999999`)
* Missing required fields (e.g. `status`)
* Invalid date format

Observe:

* Status codes (e.g. 400 or 422)
* Error messages in the response body

This helps you understand how FHIR servers enforce data quality.

---

## 7. What You Should Have Achieved

By the end of Lab 2, you should have:

1. A **Patient**.
2. Several **Observation** resources for that patient.
3. A **DiagnosticReport** that references those Observations.
4. The ability to query the DiagnosticReport and follow references to the Observations.
5. A practical understanding of how a small clinical workflow can be represented using FHIR.

You are now prepared for **Day 2**, where we will:

* Look at a simple web application talking to a FHIR server.
* Discuss how standards like FHIR support AI in healthcare.
* Work in groups to design your own FHIR-based mini use case.

