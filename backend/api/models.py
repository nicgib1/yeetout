from django.db import models
from django.contrib.auth.models import User


class Activity(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=1000)
    id = models.AutoField(primary_key=True)
    image = models.ImageField()
    location = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    min_age = models.IntegerField()
    max_age = models.IntegerField()
    cost = models.DecimalField(max_digits=12, decimal_places=2)
    attendies = models.IntegerField()


class Tag(models.Model):
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    tag = models.CharField(max_length=20)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    dob = models.DateField()
    bio = models.TextField(max_length=200)
    rating = models.DecimalField(
        decimal_places=2, max_digits=3, null=True, blank=True, default=None)
    picture = models.ImageField(
        upload_to='profileImages/', null=True, blank=True, default=None)
