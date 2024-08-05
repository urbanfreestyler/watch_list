from django.contrib import admin
from .models import MediaItem


@admin.register(MediaItem)
class MediaItemAdmin(admin.ModelAdmin):
    list_display = ['title', 'year_of_production', 'media_type', 'genre', 'description',
                    'watched', 'date_watched', 'rating', 'created_at', 'updated_at']
