from django.contrib import admin
from .models import Client, Enquiries, Service


# Register models here
@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ["first_name", "last_name", "email_address", "chosen_package"]
    search_fields = ["first_name", "last_name", "email_address"]


@admin.register(Enquiries)
class EnquiriesAdmin(admin.ModelAdmin):
    list_display = [
        "first_name",
        "last_name",
        "company_name",
        "email_address",
        "phone_number",
    ]
    search_fields = ["first_name", "last_name", "email_address"]


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = [
        "first_name",
        "last_name",
        "company_name",
        "email_address",
        "phone_number",
    ]
    search_fields = ["first_name", "last_name", "company_name"]
