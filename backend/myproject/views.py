from django.http import JsonResponse

def index(request):
    return JsonResponse({"message": "Welcome to the backend"})

def hello(request):
    return JsonResponse({"message": "Hello from Django!"})