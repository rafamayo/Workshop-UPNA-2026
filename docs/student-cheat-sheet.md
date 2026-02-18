# Student Cheat Sheet — FHIR & REST Workshop

**UPNA 2026 — Keep this near your keyboard!**

---

## FHIR Essentials

**Resources:**

* Patient
* Observation
* DiagnosticReport

**Structure:**

```json
{
  "resourceType": "Patient",
  "id": "123"
}
```

**Linking:**

```json
"subject": { "reference": "Patient/123" }
```

---

## REST Essentials

| Verb   | Meaning | Example          |
| ------ | ------- | ---------------- |
| GET    | Read    | /Patient/123     |
| POST   | Create  | /Observation     |
| PUT    | Replace | /Patient/123     |
| DELETE | Delete  | /Observation/999 |

**Search examples:**

```
GET Observation?code=8867-4
GET Patient?name=smith
GET Observation?subject=Patient/123
```

Always check the **status code**:

* 200 = OK
* 201 = Created
* 400 = Bad request (your JSON has an error)
* 404 = Doesn’t exist

---

## JSON Templates

**Patient:**

```json
{
  "resourceType": "Patient",
  "name": [{ "family": "Doe", "given": ["John"] }],
  "gender": "male",
  "birthDate": "1990-01-01"
}
```

**Observation (example):**

```json
{
  "resourceType": "Observation",
  "status": "final",
  "code": { "coding": [{ "system": "http://loinc.org", "code": "8867-4" }] },
  "subject": { "reference": "Patient/123" },
  "valueQuantity": { "value": 72, "unit": "bpm" }
}
```

**DiagnosticReport:**

```json
{
  "resourceType": "DiagnosticReport",
  "status": "final",
  "subject": { "reference": "Patient/123" },
  "result": [
    { "reference": "Observation/obs1" },
    { "reference": "Observation/obs2" }
  ]
}
```

---

## Vital LOINC Codes (Useful for Labs)

| Concept              | LOINC   |
| -------------------- | ------- |
| Heart rate           | 8867-4  |
| Temperature          | 8310-5  |
| Respiration rate     | 9279-1  |
| Blood pressure panel | 85354-9 |

---

## ❗ Common Mistakes

* Wrong or missing commas
* Reference to non-existing Patient
* Missing `"status"`
* Using smart quotes from Word
* Wrong datetime format

---

## Useful Resources

FHIR Spec: [https://www.hl7.org/fhir/](https://www.hl7.org/fhir/)
Simplifier: [https://simplifier.net](https://simplifier.net)
FHIR terminology browser: [https://loinc.org](https://loinc.org)