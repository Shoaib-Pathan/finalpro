from django.db import models
from admin_app.models import User

# Create your models here.
ENQUIRY_STATUS = [('','')]
MARITAL_STATUS = [('MARRIED','MARRIED'),('UNMARRIED','UNMARRIED'),('WIDOW','WIDOW'),('WIDOWER','WIDOWER')]

class Enquiry(models.Model):
    first_name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)
    email = models.EmailField(unique=True)
    mobile = models.CharField(max_length=10)
    message = models.TextField()
    enquiry_date = models.DateTimeField(auto_now_add=True, blank=True)
    status = models.CharField(max_length=50, default='', choices=ENQUIRY_STATUS)
    response_timestamp = models.DateTimeField(auto_now=True, blank=True)

    def __str__(self) -> str:
        return f'{self.id}'

class Family(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='Familys')
    father_name = models.CharField(max_length=250, default=0, blank=True)
    father_profession = models.CharField(max_length=250, default=0, blank=True)
    mother_name = models.CharField(max_length=250, default=0, blank=True)
    mother_profession= models.CharField(max_length=250, default=0, blank=True)
    marital_status = models.CharField(max_length=250, choices=MARITAL_STATUS, default=0, blank=True)
    spouse_name = models.CharField(max_length=250, default=0, blank=True)
    spouse_profession = models.CharField(max_length=250, default=0, blank=True)
    mobile = models.CharField(max_length=10, default=0, blank=True)
    address = models.TextField(default=0, blank=True)

    def __str__(self):
        return f"{self.id}"
