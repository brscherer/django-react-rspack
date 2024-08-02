from django.urls import path
from . import views

urlpatterns = [
    path('anime/<str:id>/', views.AnimeDetail.as_view(), name='anime-detail'),
]
