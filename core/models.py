from django.db import models
from django.utils import timezone


class MediaItem(models.Model):
    MEDIA_TYPE_CHOICES = [
        ('movie', 'Фильм'),
        ('anime', 'Аниме'),
        ('series', 'Сериал'),
    ]

    title = models.CharField(max_length=255)
    media_type = models.CharField(max_length=50, choices=MEDIA_TYPE_CHOICES)
    year_of_production = models.PositiveIntegerField()
    date_watched = models.DateField(null=True, blank=True)
    rating = models.PositiveSmallIntegerField(null=True, blank=True, choices=[(i, i) for i in range(1, 11)])
    watched = models.BooleanField(default=False)
    genre = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} ({self.year_of_production})"

    class Meta:
        ordering = ['-created_at']
