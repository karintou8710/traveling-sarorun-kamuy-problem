from django.urls import path

from . import views

urlpatterns = [
    # '/'で静的ファイルを返す
    path('', views.sample_index, name='sample_index'),
    path('api/cities/', views.get_api_cities, name='get_api_cities'),
    path('api/time/', views.get_api_time, name='get_api_time'),
    path('api/calc/', views.post_api_calc, name='post_api_calc'),
]