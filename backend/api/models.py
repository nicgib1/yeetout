from django.db import models

class Activity(models.Model):
    name = models.CharField(max_length=30)
    discription = models.CharField(max_length=1000)
    id = models.AutoField(primary_key=True)
    image = models.ImageField()
    location = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    min_ages = models.IntegerField()
    max_ages = models.IntegerField()
    cost = models.DecimalField(max_digits=12, decimal_places=2)
    attendies = models.IntegerField()
