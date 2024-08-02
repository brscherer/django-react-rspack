import requests
from rest_framework.views import APIView
from rest_framework.response import Response

class AnimeDetail(APIView):
    def get(self, request, id):
        response = requests.get(f'https://api.jikan.moe/v4/anime?q={id}')
        return Response(response.json(), status=response.status_code)
