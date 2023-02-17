from django.db import models
from application_generation.models import Application

# Create your models here.
LOAN_STATUS_CHOICE = [('SANCTIONED','SANCTIONED'),('NOT-SANCTIONED','NOT-SANCTIONED')]

class Loan(models.Model):
    application = models.OneToOneField(Application, on_delete=models.CASCADE, related_name='Loans')
    loan_principal_amount = models.FloatField(default=0, blank=True)
    loan_tenure = models.FloatField(default=0, blank=True)
    interest_rate = models.FloatField(default=0, blank=True)
    total_amount_and_processing_fees = models.FloatField(default=0, blank=True)
    installment = models.IntegerField(default=0, blank=True)
    maturity_date = models.DateField(default="2000-12-12", blank=True)
    sanction_letter = models.FileField(upload_to='customer/loan/', default=0, blank=True)
    status = models.CharField(max_length=250, choices=LOAN_STATUS_CHOICE, default=0, blank=True)
    response_timestamp = models.DateTimeField(auto_now=True, blank=True)
    remark = models.CharField(max_length=250, default=0, blank=True)

    def __str__(self):
        return f'{self.id}'
