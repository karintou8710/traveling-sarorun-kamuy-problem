from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render

from .models import City, Time
from .module import BitDP

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
        'time': {},
    }
    for timeObject in Time.objects.all():
        name1 = timeObject.city_name1
        name2 = timeObject.city_name2
        time = timeObject.time
        if not data["time"].get(name1):
            data["time"][name1] = []
        
        data["time"][name1].append([name2, time])
    
    return JsonResponse(data=data, safe=False, json_dumps_params={'ensure_ascii': False})


def post_api_calc(request):

    if (request.method == "GET"):
        raise Http404("404 page not found")
    
    try:
        VisitCities =  request.POST["cities"]
        startWord = request.POST["start"]
        endWord = request.POST["end"]
    except KeyError as e:
        context = {
            "status" : "error",
            "msg" : "KeyError",
        }
        return JsonResponse(context, safe=False, json_dumps_params={'ensure_ascii': False})
    
    if (len(VisitCities)>20):
        context = {
            "status" : "error",
            "msg" : "選択できる都市の数は20以下です",
        }
        return JsonResponse(context, safe=False, json_dumps_params={'ensure_ascii': False})
        
    
    city2id = dict()
    for key, city_name in enumerate(VisitCities):
        city2id[city_name] = key

    n = len(VisitCities)
    INF = 1<<63
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
        "status" : "ok",
        "route" : route,
        "time" : time,
    }
    return JsonResponse(context, safe=False, json_dumps_params={'ensure_ascii': False})