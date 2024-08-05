from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from .models import MediaItem
from .serializers import MediaItemSerializer


class MediaItemViewSet(viewsets.ModelViewSet):
    queryset = MediaItem.objects.all()
    serializer_class = MediaItemSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = ['media_type', 'watched', 'year_of_production', 'rating']
    search_fields = ['title', 'genre', 'description']
    ordering_fields = ['year_of_production', 'rating', 'date_watched', 'created_at']
    ordering = ['-created_at']
