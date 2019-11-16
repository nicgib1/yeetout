from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'activities', views.ActivityViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('hello/', views.Hello.as_view()),
    path('login/', obtain_auth_token),
    path('register/', views.Register.as_view())
]
