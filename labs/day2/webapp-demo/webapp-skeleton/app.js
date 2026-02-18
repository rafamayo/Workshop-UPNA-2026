// -------------------------------------------------------------
// FHIR Web App Demo - UPNA Workshop 2026
// -------------------------------------------------------------

console.log("app.js loaded");

const FHIR_SERVER = "https://hapi.fhir.org/baseR5/";  // students can replace this
const loadBtn = document.getElementById("loadBtn");
const resultBox = document.getElementById("resultBox");

loadBtn.addEventListener("click", async () => {
    const patientId = document.getElementById("patientId").value.trim();
    if (!patientId) {
        resultBox.textContent = "Please enter a Patient ID.";
        return;
    }

    await loadPatient(patientId);
});


async function loadPatient(id) {
    const url = `${FHIR_SERVER}Patient/${id}`;

    resultBox.textContent = "Loading patient...";

    try {
        const response = await fetch(url, {
            headers: {
                "Accept": "application/fhir+json"
            }
        });

        if (!response.ok) {
            resultBox.textContent = `Error ${response.status}: Patient not found`;
            return;
        }

        const patient = await response.json();
        displayPatient(patient);

    } catch (err) {
        resultBox.textContent = "Network error. Your browser may be blocking the request (privacy/shields/CORS). Try using http://localhost via a local server.";
        console.error(err);
    }
}


// ---------------------------------------------------------------------
// Display Patient Information in the Output Area
// ---------------------------------------------------------------------
function displayPatient(patient) {
    // Basic example: Show raw JSON
    // Students will later extend this to show selected fields.
    resultBox.textContent = JSON.stringify(patient, null, 2);
}


// ---------------------------------------------------------------------
// OPTIONAL EXTENSIONS FOR STUDENTS (Day 2):
// ---------------------------------------------------------------------
// 1. Fetch Observations for this Patient:
//    GET Observation?subject=Patient/<id>
//
// 2. Display Observations in a table.
//
// 3. Implement simple error messages or loading indicators.
//
// 4. Add button: "Load Heart Rate" or "Show Last Temperature".
//
// 5. Try a second endpoint:
//       GET Observation?code=8867-4
//
// All optional features can be explored in the workshop.
// ---------------------------------------------------------------------
