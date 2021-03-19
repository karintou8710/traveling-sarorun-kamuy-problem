from django.urls import path

from . import views

urlpatterns = [
    path('', views.tsp_json, name='index'),
    path('tsp/', views.tsp_json, name='index2')
]