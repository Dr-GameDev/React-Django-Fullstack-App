from django.db import models
from django.core.validators import RegexValidator
from datetime import datetime

default_value = datetime.now()  # Use the current date and time

def client_image_upload_path(instance, filename):
    # Define dynamic upload path for client images
    return f"client/{instance.id}_files/{filename}"


class Client(models.Model):
    # Fibre Model
    enquiry = models.OneToOneField("Enquiries", on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email_address = models.EmailField(max_length=150)
    chosen_package = models.CharField(max_length=400)
    client_id = models.ImageField(upload_to=client_image_upload_path)
    client_bank_statement = models.ImageField(upload_to=client_image_upload_path)
    client_proof_of_address = models.ImageField(upload_to=client_image_upload_path)
    created_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Enquiries(models.Model):
    # Potential client who have questions
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    company_name = models.CharField(max_length=250)
    email_address = models.EmailField(max_length=150, unique=True)
    phone_number = models.CharField(
        max_length=100,
        validators=[RegexValidator(r"\d{10}", "Phone number must be 10 digits")],
        unique=True,
    )
    message = models.TextField(max_length=500)
    accepted_terms = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    

# Need a Service Model
class Service(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    company_name = models.CharField(max_length=250)
    email_address = models.EmailField(max_length=150)
    phone_number = models.CharField(max_length=100)
    message = models.TextField()
    accepted_terms = models.BooleanField(default=False)
    service_required = models.CharField(max_length=300)
    created_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.service_required}"
    

