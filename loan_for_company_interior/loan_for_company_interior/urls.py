"""loan_for_company_interior URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from loan_sanctioning.views import LoanView
from disburstment.views import InstallmentViewSet, VendorViewSet, DisbursementAPI
from admin_app.views import UserViewSet
from application_generation.views import ApplicationViewSet

router = DefaultRouter()
router.register('loan', LoanView, basename='loan'),
router.register('inst', InstallmentViewSet, basename='inst'),
router.register('dis', DisbursementAPI, basename='dis'),
router.register('ven', VendorViewSet, basename='ven'),
router.register('user', UserViewSet, basename='user'),
router.register('application', ApplicationViewSet, basename='application')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('loan1/', include(router.urls)),
    path('loan1/', include('disburstment.urls')),
    path('loan1/', include('loan_sanctioning.urls')),
    #path('loan1/', include('vendor.urls'))
    # path('inst1/', include(router.urls)),
    # path('dis1/', include(router.urls)),
    # path('ven1/', include(router.urls))
    
]

from django.conf import settings
from django.conf.urls.static import static
if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)
