import sys
import requests
import pandas
import numpy
import sklearn

print("Python version:", sys.version)
print("Python OK!")

print("Checking package imports...")
try:
    import requests
    import pandas
    import numpy
    import sklearn
    print("All packages imported successfully.")
except Exception as e:
    print("Package import failed:", e)

print("\nChecking FHIR server connectivity...")
try:
    r = requests.get("https://hapi.fhir.org/baseR4/metadata", timeout=5)
    if r.status_code == 200:
        print("FHIR server reachable ✓")
    else:
        print("FHIR server responded with status:", r.status_code)
except Exception as e:
    print("Error contacting FHIR server:", e)

print("\nEnvironment verification completed.")
