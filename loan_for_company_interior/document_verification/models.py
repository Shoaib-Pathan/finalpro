from django.db import models
from admin_app.models import User
from application_generation.models import Application

# Create your models here.
DOCUMENT_STATUS_CHOICE = [('','')]

class Bank(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='Banks')
    bank_name = models.CharField(max_length=250, default=0, blank=True)
    current_account_no = models.CharField(max_length=20, default=0, blank=True)
    ifsc_code = models.CharField(max_length=20, default=0, blank=True)
    passbook_copy = models.ImageField(upload_to='media/customer/bank/', default=0, blank=True)

    def __str__(self):
        return f"{self.id}"

class Document(models.Model):
    application = models.OneToOneField(Application, on_delete=models.CASCADE, related_name='Documents')
    aadhaar_card = models.FileField(upload_to='customer/document/', default=0, blank=True)
    pan_card = models.FileField(upload_to='customer/document/', default=0, blank=True)
    business_address_proof_or_copy_of_rent_agreement = models.FileField(upload_to='customer/document/', default=0, blank=True)
    electricity_bill = models.FileField(upload_to='customer/document/', default=0, blank=True)
    msme_certificate = models.FileField(upload_to='customer/document/', default=0, blank=True)
    gst_certificate = models.FileField(upload_to='customer/document/', default=0, blank=True)
    udyog_aadhaar_registration = models.FileField(upload_to='customer/document/', default=0, blank=True)
    business_license = models.FileField(upload_to='customer/document/', default=0, blank=True)
    business_plan_or_proposal = models.FileField(upload_to='customer/document/', default=0, blank=True)
    three_year_itr_with_balance_sheet = models.FileField(upload_to='customer/document/', default=0, blank=True)
    collateral_document = models.FileField(upload_to='customer/document/', default=0, blank=True)
    stamp_duty = models.FileField(upload_to='customer/document/', default=0, blank=True)
    status = models.CharField(max_length=250, choices=DOCUMENT_STATUS_CHOICE, default=0, blank=True)
    response_timestamp = models.DateTimeField(auto_now=True, blank=True)
    remark = models.CharField(max_length=250, default=0, blank=True)

    def __str__(self):
       	return f'{self.id}'

