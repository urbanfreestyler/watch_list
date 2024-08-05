# Generated by Django 5.0.7 on 2024-08-05 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="MediaItem",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=255)),
                (
                    "media_type",
                    models.CharField(
                        choices=[
                            ("movie", "Фильм"),
                            ("anime", "Аниме"),
                            ("series", "Сериал"),
                        ],
                        max_length=50,
                    ),
                ),
                ("year_of_production", models.PositiveIntegerField()),
                ("date_watched", models.DateField(blank=True, null=True)),
                (
                    "rating",
                    models.PositiveSmallIntegerField(
                        blank=True,
                        choices=[
                            (1, 1),
                            (2, 2),
                            (3, 3),
                            (4, 4),
                            (5, 5),
                            (6, 6),
                            (7, 7),
                            (8, 8),
                            (9, 9),
                            (10, 10),
                        ],
                        null=True,
                    ),
                ),
                ("watched", models.BooleanField(default=False)),
                ("genre", models.CharField(blank=True, max_length=100, null=True)),
                ("description", models.TextField(blank=True, null=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "ordering": ["-created_at"],
            },
        ),
    ]
