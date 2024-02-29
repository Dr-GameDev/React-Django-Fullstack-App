from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Client, Enquiries, Service
from .serializers import (
    ClientSerializer,
    EnquiriesSerializer,
    ServiceSerializer
)


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

    def create(self, request, *args, **kwargs):
        # Override default create action
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Perform additional checks or customizations before saving
        # Validate and clean specific fields, perform calculations, etc.

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )

    def perform_create(self, serializer):
        # Customize object creation behavior
        serializer.save()  # Base functionality

@api_view(["GET"])
def get_public_client(request):
    # Filter and return public client (optional)
    public_client = Client.objects.filter(is_public=True)
    serializer = ClientSerializer(public_client, many=True)
    return Response(serializer.data)

class EnquiriesViewSet(viewsets.ModelViewSet):
    queryset = Enquiries.objects.all()
    serializer_class = EnquiriesSerializer

    def create(self, request, *args, **kwargs):
        # Override default create action
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Perform additional checks or customizations before saving
        # Validate and clean specific fields, perform calculations, etc.

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )

    def perform_create(self, serializer):
        # Customize object creation behavior
        serializer.save()  # Base functionality


@api_view(["GET"])
def get_public_enquiries(request):
    # Filter and return public enquiries (optional)
    public_enquiries = Enquiries.objects.filter(is_public=True)
    serializer = EnquiriesSerializer(public_enquiries, many=True)
    return Response(serializer.data)


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

    def create(self, request, *args, **kwargs):
        # Override default create action
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Perform additional checks or customizations before saving
        # Validate and clean specific fields, perform calculations, etc.

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )

    def perform_create(self, serializer):
        # Customize object creation behavior
        serializer.save()  # Base functionality
        

@api_view(["GET"])
def get_public_service(request):
    # Filter and return public service (optional)
    public_service = Service.objects.filter(is_public=True)
    serializer = ServiceSerializer(public_service, many=True)
    return Response(serializer.data)