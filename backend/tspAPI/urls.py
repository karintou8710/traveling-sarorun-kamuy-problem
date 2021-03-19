from django.urls import path

from . import views

urlpatterns = [
    path('', views.sample, name='sample'),
    path('cities/', views.get_api_cities, name='get_api_cities'),
    path('time/', views.get_api_time, name='get_api_time'),
    path('calc/', views.post_api_calc, name='post_api_calc'),
]