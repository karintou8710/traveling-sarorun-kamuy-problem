from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render
import json
import sys

from .models import City, Time
from .module import BitDP


def load_json(filename: str) -> dict:
    with open(filename, mode='r', encoding='utf-8') as file:
        decoded_dictionary = json.load(file)
    return decoded_dictionary





def sample_index(request):
    data = {

    }
    return JsonResponse(data=data, safe=False, json_dumps_params={'ensure_ascii': False})


def get_api_cities(request):
    # 街データの取得
    l = []
    for cityObject in City.objects.all():
        l.append(cityObject.name)
    data = {
        'status': 'ok',
        'cities': l,
    }
    return JsonResponse(data=data, safe=False, json_dumps_params={'ensure_ascii': False})


def get_api_time(request):
    # 時間データの取得
    all = Time.objects.all()  # 全件取得
    return JsonResponse(data=all, safe=False, json_dumps_params={'ensure_ascii': False})


def post_api_calc(request):
    # 最短距離の計算
    data = {
        'cities': ['札幌', '函館', '稚内', '旭川', '知床'],
        'start': '札幌',
        'end': '知床',
    }
    return JsonResponse(data=data, safe=False, json_dumps_params={'ensure_ascii': False})


def calc(request):

    if (request.method == "GET"):
        raise Http404("404 page not found")
    
    try:
        VisitCities =  request.POST["cities"]
        startWord = request.POST["start"]
        endWord = request.POST["end"]
    except KeyError as e:
        context = {
            "status": "error",
            "msg": "KeyError",
        }
        return JsonResponse(context, safe=False, json_dumps_params={'ensure_ascii': False})
    
    city2id = dict()
    for key, city_name in enumerate(VisitCities):
        city2id[city_name] = key

    n = len(VisitCities)
    INF = 1 << 63
    graph = [[INF]*n for _ in range(n)]

    timeObjects = Time.objects.filter(city_name1__in=VisitCities, city_name2__in=VisitCities)
    for timeObject in timeObjects:
        name = timeObject.city_name1
        name2 = timeObject.city_name2
        time = timeObject.time
        key = city2id[name]
        key2 = city2id[name2]
        graph[key][key2] = time

    start = city2id[startWord]
    end = city2id.get(endWord, "")
        
    bitdp = BitDP(n, start, end, graph)
    route = [VisitCities[i] for i in bitdp.getRoute()]
    time = bitdp.getTimes()

    context = {
        "status": "ok",
        "route": route,
        "time": time,
    }
    return JsonResponse(context, safe=False, json_dumps_params={'ensure_ascii': False})