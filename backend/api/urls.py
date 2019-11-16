from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('hello/', views.Hello.as_view()),
    path('login/', obtain_auth_token),
]
