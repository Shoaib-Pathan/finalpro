from django.contrib import admin
from .models import Disbursement, Vendor, Installment

# Register your models here.
admin.site.register(Disbursement)
admin.site.register(Vendor)
admin.site.register(Installment)
