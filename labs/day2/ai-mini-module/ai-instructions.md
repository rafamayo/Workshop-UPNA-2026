# AI Mini-Module — Using Standardised FHIR Data for Simple Analytics

**Duration:** approx. 20 minutes
**Purpose:** Demonstrate how FHIR-based structured data can support basic analytic or AI-like logic.

The goal is conceptual understanding, not full machine learning.

---

## 1. Overview

We will work with a tiny synthetic dataset extracted from Observation resources created during Day 1.

The dataset includes:

* patient_id
* code (LOINC code for the measurement)
* value (numeric measurement)
* timestamp

Example rows:

| patient_id | code    | value | date                 |
| ---------- | ------- | ----- | -------------------- |
| P001       | 85354-9 | 120   | 2024-05-10T10:00:00Z |
| P001       | 8867-4  | 80    | 2024-05-10T10:02:00Z |

We will:

1. Load the dataset
2. Filter by code
3. Extract numeric values
4. Apply a simple rule-based decision (“alerts”)
5. Optionally visualize the values

---

## 2. Structure of the Notebook

The notebook (`ai-notebook.ipynb`) should contain the following blocks.

---

### Block 1 — Imports and Data Loading

```python
import pandas as pd

url = "https://raw.githubusercontent.com/rafamayo/Workshop-UPNA-2026/main/labs/day2/ai-mini-module/sample-observations.json"
df = pd.read_json(url)

df.head()
```

Explanation:

* FHIR data is easy to convert to tabular formats
* JSON → DataFrame works because the structure is consistent

---

### Block 2 — Filter by LOINC Code

Example:

```python
bp = df[df["code"] == "85354-9"]
bp.head()
```

Why this matters:

* Standard codes = unambiguous queries
* AI pipelines depend on such consistency

---

### Block 3 — Extract Numeric Values

```python
bp_values = bp["value"].astype(float)
bp_values.describe()
```

Reflection:

* Standardised units are essential
* AI systems fail when units or fields are inconsistent

---

### Block 4 — Simple “AI-like” Rule

This is **not** machine learning — just a demonstration of decision-support logic.

```python
def bp_alert(value):
    if value > 140:
        return "High BP alert"
    elif value < 90:
        return "Low BP alert"
    else:
        return "Normal range"

bp["alert"] = bp["value"].apply(bp_alert)
bp[["value", "alert"]]
```

Takeaway:

* Even trivial logic depends on clean, structured data
* FHIR makes it possible to extract consistent features

---

### Block 5 — Optional Visualization

```python
import matplotlib.pyplot as plt

plt.plot(bp["value"])
plt.title("Systolic BP values over time")
plt.xlabel("Measurement index")
plt.ylabel("mmHg")
plt.show()
```

---

## 3. Discussion Questions

* Why are standards like FHIR and LOINC essential for real-world AI models?
* What would happen if measurements used inconsistent units or codes?
* How does the structure of FHIR help ensure data quality?
* What are the limits of rule-based approaches compared to ML?

---

## 4. Learning Outcomes

Students should understand:

* How structured FHIR data flows into analytic scripts
* How features can be extracted using coding systems
* How even simple decision logic requires reliable, standardised input
* Why AI systems depend on interoperability standards
