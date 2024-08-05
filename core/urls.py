from django.urls import path
from . import views

urlpatterns = [
    path('media-items/', views.MediaItemViewSet.as_view({'get': 'list'})),

]
