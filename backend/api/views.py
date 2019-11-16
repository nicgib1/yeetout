from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import ActivitySerializer
from .models import Activity, Profile


class Hello(APIView):
    def get(self, request):
        return Response('Hello')


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
