from django.http import HttpResponse
from django.shortcuts import render
from django.http.response import JsonResponse

def tsp_json(request):
    data = {
        'name1': 'Sapporo',
        'name2': 'Otaru',
        'name3': 'Hakodate'
    }
    return JsonResponse(
        data=data
    )

# Create your views here.
