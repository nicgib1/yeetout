from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.


class Hello(APIView):
    def get(self, request):
        return Response('Hello')
