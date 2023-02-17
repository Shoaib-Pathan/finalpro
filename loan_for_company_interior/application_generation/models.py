from django.db import models
from admin_app.models import User

# Create your models here.

GENDER_CHOICES = [('MALE', 'MALE'), ('FEMALE', 'FEMALE'), ('OTHER', 'OTHER')]
BUSINESS_TYPE = [('MICRO','MICRO'),('SMALL','SMALL'),('MEDIUM','MEDIUM'),('LARGE','LARGE')]
EMPLOYMENT_CHOICE = [('SALARIED','SALARIED'),('SELF-EMPLOYED','SELF-EMPLOYED')]
APPLICATION_STATUS = [('UNDER REVEIW','UNDER REVIEW'),('REJECTED','REJECTED'),('ACCEPTED','ACCEPTED')]

class Application(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Applications')
    aadhaar_no = models.CharField(max_length=12, default=0, blank=True)
    pan_no = models.CharField(max_length=10, default=0, blank=True)
    type_of_employment = models.CharField(max_length=250, choices=EMPLOYMENT_CHOICE, default=0, blank=True)
    business_title = models.CharField(max_length=250, default=0, blank=True)
    business_type = models.CharField(max_length=250, choices=BUSINESS_TYPE, default=0, blank=True)
    business_address = models.TextField(default=0, blank=True)
    gst_registration_no = models.CharField(max_length=50, default=0, blank=True)
    business_license_no = models.CharField(max_length=50, default=0, blank=True)
    expected_average_annual_turnover = models.CharField(max_length=250, default=0, blank=True)
    years_in_current_business = models.IntegerField(default=0, blank=True)
    collateral = models.CharField(max_length=250, default=0, blank=True)
    status = models.CharField(max_length=250, default='', choices=APPLICATION_STATUS)
    application_timestamp = models.DateTimeField(auto_now_add=True, blank=True)
    remark = models.CharField(max_length=250, default=0, blank=True)

    def __str__(self):
        return f"{self.id}"

class Guarantor(models.Model):
    application = models.ForeignKey(Application, on_delete=models.CASCADE, related_name='Guarantors')
    relation_with_customer = models.CharField(max_length=250, default=0, blank=True)
    name = models.CharField(max_length=150, default=0, blank=True)
    dob = models.DateField(default="2000-12-12", blank=True)
    gender = models.CharField(max_length=50,  default=0, blank=True, choices=GENDER_CHOICES)
    email = models.EmailField(default=0, blank=True)
    address = models.TextField(max_length=250, default=0, blank=True)
    city = models.CharField(max_length=50, default=0,blank=True)
    state = models.CharField(max_length=50, default=0,blank=True)
    country = models.CharField(max_length=250, default=0, blank=True)
    pin_code = models.IntegerField(default=0, blank=True)
    mobile = models.CharField(max_length=10,default=0, blank=True)
    photo = models.ImageField(upload_to='media/customer/guarantor/', default=0, blank=True)
    profession = models.CharField(max_length=250, default=0, blank=True)
    income_certificate = models.FileField(upload_to='media/customer/guarantor/', default=0, blank=True)
    bank_name = models.CharField(max_length=250, default=0, blank=True)
    current_account_no = models.CharField(max_length=20, default=0, blank=True)
    passbook_copy = models.FileField(upload_to='media/customer/guarantor/', default=0, blank=True)
    ifsc_code = models.CharField(max_length=20, default=0, blank=True)

    def __str__(self):
       	return f'{self.id}'
