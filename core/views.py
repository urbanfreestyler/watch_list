from django.utils import timezone
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

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

    @action(detail=True, methods=['patch'])
    def modify(self, request, pk=None):
        media_item = self.get_object()

        # Retrieve fields from the request data
        rating = request.data.get('rating')
        watched = request.data.get('watched')
        date_watched = request.data.get('date_watched')

        if rating is not None:
            if 1 <= int(rating) <= 10:
                media_item.rating = rating
            else:
                return Response({'error': 'Rating must be between 1 and 10.'}, status=status.HTTP_400_BAD_REQUEST)

        if watched is not None:
            media_item.watched = watched == 'true' or watched == True
            if media_item.watched and not media_item.date_watched:
                media_item.date_watched = date_watched or timezone.datetime.today().date()

        media_item.save()

        return Response(MediaItemSerializer(media_item).data, status=status.HTTP_200_OK)
