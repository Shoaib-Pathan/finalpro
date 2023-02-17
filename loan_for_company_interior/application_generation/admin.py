from django.contrib import admin
from .models import Application, Guarantor

# Register your models here.
admin.site.register(Application)
admin.site.register(Guarantor)