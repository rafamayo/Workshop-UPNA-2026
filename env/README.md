# Environment Setup for the UPNA 2026 FHIR & AI Workshop

This folder contains configuration files needed to create a reproducible Python
environment for the workshop. Students may use Google Colab, a local Python
installation, Conda, Docker, or Binder/JupyterHub.

Choose one of the setup options below.

---

## 1. Using Google Colab (Recommended)

No installation required.  
Open any `.ipynb` notebook directly in Google Colab.

All dependencies will be installed automatically inside the notebook when needed.

---

## 2. Local Python Setup (pip)

Requires Python 3.10 or newer.

Install dependencies:

```
pip install -r env/requirements.txt
```

Verify installation:

```
python env/verify_installation.py
```

---

## 3. Conda Setup

If you use conda or mamba:

```
conda env create -f env/environment.yml
conda activate fhir-workshop
```

Verify installation:

```
python env/verify_installation.py
```

---

## 4. Docker Setup

Build the Docker image:

```
docker build -t fhir-workshop -f env/Dockerfile .
```

Launch a container:

```
docker run -it fhir-workshop
```

This provides a fully isolated reproducible environment.

---

## 5. Binder / JupyterHub Support

The file `postBuild` ensures that Binder installs all the Python dependencies
listed in `requirements.txt`.

Push the repository to GitHub and connect it to Binder for cloud execution.

---

## 6. Verifying the Installation

Run the verification script:

```
python env/verify_installation.py
```

This checks:

- Python version
- Required package imports
- Network connectivity with the public HAPI FHIR server

---

## Notes

- The environment definition is intentionally minimal to avoid installation issues.
- The workshop can be completed entirely in Google Colab if preferred.
- Local environments generally perform better for data visualization and ML tasks.
