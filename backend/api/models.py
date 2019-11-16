from django.db import models
from django.contrib.auth.models import User


class Activity(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=1000)
    id = models.AutoField(primary_key=True)
    image = models.ImageField()
    location = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    min_ages = models.IntegerField()
    max_ages = models.IntegerField()
    cost = models.DecimalField(max_digits=12, decimal_places=2)
    attendies = models.IntegerField()


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    dob = models.DateField()
    bio = models.TextField(max_length=200)
    rating = models.DecimalField(decimal_places=2, max_digits=3)
    picture = models.ImageField(upload_to='profileImages/')
