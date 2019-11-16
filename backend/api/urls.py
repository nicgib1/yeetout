from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'activities', views.ActivityViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('hello/', views.Hello.as_view()),
]
