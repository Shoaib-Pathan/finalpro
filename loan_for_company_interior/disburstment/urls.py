from django.urls import path
from .views import send_new_mail

urlpatterns = [
    path('mail/<int:pk>/', send_new_mail)
]