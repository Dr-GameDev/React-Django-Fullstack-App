from rest_framework import serializers
from .models import Client, Enquiries, Service

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class EnquiriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiries
        fields = '__all__'
        
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'