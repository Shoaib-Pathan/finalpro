from django.contrib import admin
from .models import User,Defaulter

# Register your models here

class UserAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'mobile']
admin.site.register(User, UserAdmin)

admin.site.register(Defaulter)
