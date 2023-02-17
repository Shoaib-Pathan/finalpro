from django.urls import path
from .views import send_email

urlpatterns = [
    path('mailsanction/<int:pk>/', send_email)
]