# Use an official lightweight Python image
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Copy project files into the container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 8000 (assuming your app runs on this port)
EXPOSE 8000

# Set the command to run the application
CMD ["python", "main.py"]
