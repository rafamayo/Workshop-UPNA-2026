# Lab 1 — Basic FHIR & REST Interaction

**Estimated time:** 60 minutes

**Learning goals:**

* Understand how to interact with a FHIR server using REST
* Perform basic `GET` and `POST` requests
* Create and retrieve FHIR resources
* Interpret JSON responses and common error messages

---

## 1. Start the Notebook

1. Open:

   `lab1-starter-notebook.ipynb`

2. Run the first cells to:

   * Set the `FHIR_SERVER` URL
   * Import Python libraries (`requests`, `json`)
   * Test a `GET` on `metadata`:

   ```python
   import requests
   response = requests.get(FHIR_SERVER + "metadata")
   print(response.status_code)
   ```

You should see status code **200**.

In case the server is not available, here are some alternative test servers:

+ https://server.fire.ly/
+ https://spark.incendi.no/fhir/
+ https://hapi.fhir.org/baseR5/

Some public servers are monitored here:

+ https://stats.uptimerobot.com/9DArDu1Jo

---

## 2. Query Existing Resources (GET)

### 2.1 Retrieve server metadata

```python
requests.get(FHIR_SERVER + "metadata").json()
```

### 2.2 Search for patients

```python
requests.get(FHIR_SERVER + "Patient?name=smith").json()
```

### 2.3 Search for observations

Try:

```python
requests.get(FHIR_SERVER + "Observation?code=heart-rate").json()
```

**Task:**

* Find at least one existing **Patient**.
* Find at least one existing **Observation** for that patient, if available.

Take a moment to inspect the JSON structure of the responses.

---

## 3. Create a Patient (POST)

Use the template in the notebook (adapt the values as you like):

```json
{
  "resourceType": "Patient",
  "name": [{ "family": "Doe", "given": ["John"] }],
  "gender": "male",
  "birthDate": "1990-01-01"
}
```

In the notebook:

```python
patient_json = {
    "resourceType": "Patient",
    "name": [{ "family": "Doe", "given": ["John"] }],
    "gender": "male",
    "birthDate": "1990-01-01"
}

response = requests.post(FHIR_SERVER + "Patient", json=patient_json)
print(response.status_code, response.json())
```

**Task:**

* Check that the response status is **201** (Created).
* Note down the `id` of the created Patient (you will need it later).

---

## 4. Create an Observation for the Patient

Use a minimal template such as:

```json
{
  "resourceType": "Observation",
  "status": "final",
  "code": { 
    "coding": [{
      "system": "http://loinc.org",
      "code": "85354-9",
      "display": "Blood pressure panel"
    }]
  },
  "subject": { "reference": "Patient/REPLACEME" },
  "effectiveDateTime": "2024-05-10T10:00:00Z",
  "valueQuantity": { "value": 120, "unit": "mmHg" }
}
```

In the notebook, replace `"REPLACEME"` with your actual Patient ID:

```python
patient_id = "YOUR_PATIENT_ID"

observation_json = {
    "resourceType": "Observation",
    "status": "final",
    "code": { 
      "coding": [{
        "system": "http://loinc.org",
        "code": "85354-9",
        "display": "Blood pressure panel"
      }]
    },
    "subject": { "reference": f"Patient/{patient_id}" },
    "effectiveDateTime": "2024-05-10T10:00:00Z",
    "valueQuantity": { "value": 120, "unit": "mmHg" }
}

response = requests.post(FHIR_SERVER + "Observation", json=observation_json)
print(response.status_code, response.json())
```

---

## 5. Retrieve Your Created Resources

### 5.1 Query Observations by subject

```python
requests.get(FHIR_SERVER + f"Observation?subject=Patient/{patient_id}").json()
```

### 5.2 Query Observations by code

```python
requests.get(FHIR_SERVER + "Observation?code=85354-9").json()
```

**Task:**

* Confirm that your Observation appears in at least one of these queries.
* Inspect the `subject` field and verify the Patient reference is correct.

---

## 6. Optional Challenges

### Challenge 1: Add more Observations

Create additional Observations, for example:

* Heart rate
* Temperature

Use appropriate **LOINC** codes if possible.

---

### Challenge 2: Sort results

Try to sort results by last update:

```python
requests.get(FHIR_SERVER + "Observation?code=85354-9&_sort=-_lastUpdated").json()
```

---

### Challenge 3: Delete a resource

If the server permits deletion, try:

```python
obs_id = "YOUR_OBSERVATION_ID"
requests.delete(FHIR_SERVER + f"Observation/{obs_id}")
```

Check the response and then try to read the resource again.

---

## 7. What You Should Have Achieved

By the end of Lab 1, you should have:

* Created a **Patient**.
* Created at least one **Observation** linked to that Patient.
* Retrieved your resources using `GET` queries.
* Seen how REST verbs (GET, POST, DELETE) work in the context of FHIR.

You are now ready to continue with **Lab 2** (mini workflow with DiagnosticReport).