from django.http import HttpResponse
from django.shortcuts import render
from django.http.response import JsonResponse


def sample_index(request):
    data = {

    }
    return JsonResponse(data=data, safe=False, json_dumps_params={'ensure_ascii': False})


def get_api_cities(request):
    # 街データの取得
    data = {
        'status': 'ok',
        'cities': ['札幌', '函館', '稚内', '旭川', '知床'],
    }
    return JsonResponse(data=data, safe=False, json_dumps_params={'ensure_ascii': False})


def get_api_time(request):
    # 時間データの取得
    data = {
        'status': 'ok',
        '札幌': {'札幌': 0, '函館': 300, '稚内': 480, '旭川': 120, '知床': 480},
        '函館': {'札幌': 300, '函館': 0, '稚内': 780, '旭川': 420, '知床': 780},
        '稚内': {'札幌': 480, '函館': 780, '稚内': 0, '旭川': 360, '知床': 480},
        '旭川': {'札幌': 120, '函館': 420, '稚内': 360, '旭川': 0, '知床': 420},
        '知床': {'札幌': 480, '函館': 780, '稚内': 480, '旭川': 420, '知床': 0},
    }
    return JsonResponse(data=data, safe=False, json_dumps_params={'ensure_ascii': False})


def post_api_calc(request):
    # 最短距離の計算
    data = {
        'cities': ['札幌', '函館', '稚内', '旭川', '知床'],
        'start': '札幌',
        'end': '知床',
    }
    return JsonResponse(data=data, safe=False, json_dumps_params={'ensure_ascii': False})

# Create your views here.
