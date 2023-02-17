from django.db import models
from django.contrib.auth.models import AbstractUser, User

# Create your models here.
 
GENDER_CHOICES = [('MALE', 'MALE'), ('FEMALE', 'FEMALE'), ('OTHER', 'OTHER')]
ROLE_CHOICES = [('Customer', 'Customer'), ('Loan Representative', 'Loan Representative'), ('Operation Head', 'Operation Head')]

class User(AbstractUser):
    first_name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)
    dob = models.DateField(default="2000-12-12", blank=True)
    gender = models.CharField(max_length=50, choices=GENDER_CHOICES)
    email = models.EmailField(db_index=True, max_length=50, unique=True)
    address = models.TextField()
    city = models.CharField(max_length=250)
    state = models.CharField(max_length=250)
    country = models.CharField(max_length=250)
    pin_code = models.IntegerField(default=0, blank=True)
    mobile = models.CharField(max_length=10)
    photo = models.ImageField(upload_to="customer/user", default=0, blank=True)
    signature = models.ImageField(upload_to="customer/user", default=0, blank=True)
    role = models.CharField(max_length=50, default='customer', choices=ROLE_CHOICES)

    REQUIRED_FIELDS = ['first_name', 'last_name', 'mobile']

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

class Defaulter(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='Defaulters')
    default_amount = models.FloatField(default=0, blank=True)
    pending_since_date = models.DateField(default="2000-12-12", blank=True)

    def __str__(self) -> str:
        return f'{self.id}' 
