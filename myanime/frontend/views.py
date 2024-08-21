from django.shortcuts import render

def index(request):
    print("index view")
    return render(request, 'index.html')