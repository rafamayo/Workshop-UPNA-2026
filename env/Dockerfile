FROM python:3.10-slim

WORKDIR /app

# Copy requirements
COPY env/requirements.txt /app/

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Optional: set default command
CMD ["bash"]
