from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    dob = models.DateField()
    bio = models.TextField(max_length=200)
    rating = models.DecimalField(decimal_places=2, max_digits=3)
    picture = models.ImageField(upload_to='profileImages/')
