from django.urls import path, include
from . import views

urlpatterns = [
    path('hello/', views.Hello.as_view()),
]
