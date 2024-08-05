from django.core.management.base import BaseCommand
from core.models import MediaItem
import random
from datetime import datetime


class Command(BaseCommand):
    help = 'Adds 10 mock MediaItem objects to the database'

    def handle(self, *args, **kwargs):
        titles = [
            "Inception", "The Matrix", "Attack on Titan", "Breaking Bad",
            "The Godfather", "Spirited Away", "Naruto", "The Dark Knight",
            "Interstellar", "Game of Thrones"
        ]
        types = ['Movie', 'Anime', 'Series']
        genres = ['Action', 'Drama', 'Fantasy', 'Sci-Fi']

        for title in titles:
            media_item = MediaItem(
                title=title,
                media_type=random.choice(types),
                year_of_production=random.randint(1980, 2023),
                date_watched=datetime.today().date() if random.choice([True, False]) else None,
                rating=random.randint(1, 10) if random.choice([True, False]) else None,
                watched=random.choice([True, False]),
                genre=random.choice(genres),
                description=f"A mock description for {title}."
            )
            media_item.save()

        self.stdout.write(self.style.SUCCESS('Successfully added 10 mock MediaItem objects'))
