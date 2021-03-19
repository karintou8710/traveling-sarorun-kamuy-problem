from django.db import models

class City(models.Model):

    city_id = models.IntegerField()
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Time(models.Model):

    city_name1 = models.CharField(max_length=200)
    city_name2 = models.CharField(max_length=200)
    time = models.IntegerField() # minute
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.city_name1}-{self.city_name2}"
