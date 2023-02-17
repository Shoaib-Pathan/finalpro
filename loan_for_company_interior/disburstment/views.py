from django.shortcuts import render
from rest_framework import viewsets, status
from .models import Installment, Disbursement, Vendor
from .serializers import InstallmentSerializer, DisbursementSerializer, VendorSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from django.http import HttpResponse
from loan_sanctioning.models import Loan
from fpdf import FPDF
import logging
# Create your views here.

class InstallmentViewSet(viewsets.ModelViewSet):
    serializer_class = InstallmentSerializer
    queryset = Installment.objects.all()
'''
class DisbursementViewSet(viewsets.ModelViewSet):
    serializer_class = DisbursementSerializer
    queryset = Disbursement.objects.all()
'''

class VendorViewSet(viewsets.ModelViewSet):
    serializer_class = VendorSerializer
    queryset = Vendor.objects.all()

logger = logging.getLogger('main')
class DisbursementAPI(viewsets.ViewSet):
    serializer_class = DisbursementSerializer
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info('disburs added')
            return Response(data=serializer.data, status=201)
        return Response(data=serializer.errors, status=404)
    
    def list(self, request):
        dis = Disbursement.objects.all()
        serializer = self.serializer_class(dis, many=True)
        logger.info('disburs seen')
        return Response(data=serializer.data, status=200)
    
    def update(self, request, pk=None):
        dis = get_object_or_404(Disbursement, pk=pk)
        serializer = self.serializer_class(data=request.data, instance=dis)
        if serializer.is_valid():
            serializer.save()
            logger.info('disbursment updated')
            return Response(data=serializer.data, status=205)
        return Response(data=serializer.errors, status=400)
        
    def partial_update(self, request, pk=None):
        dis = get_object_or_404(Disbursement, pk=pk)
        serializer = self.serializer_class(data=request.data, instance=dis, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=205)
        return Response(data=serializer.errors, status=400)
    
    def destroy(self, request, pk=None):
        dis = get_object_or_404(Disbursement, pk=pk)
        dis.delete()
        logger.info('disburs deleted')
        return Response(data=None, status=status.HTTP_204)
    
    def retrieve(self, request, pk=None):
        dis = get_object_or_404(Disbursement, pk=pk)
        serializer = self.serializer_class(dis)
        return Response(data=serializer.data, status=200)
def send_new_mail(request, pk):
    print(pk)
    obj = Disbursement.objects.get(id=pk)
    mail_from = settings.EMAIL_HOST_USER
    sub = 'LOAN DISBURSEMENT'
    msg = f'hello, with your loan ID = {obj.loan}, \nThis is to inform you that, \n  Your loan has been disbursed, \n please check the attachment for more details'
    with open ('disbursement_loan.txt', 'w') as fh:
        fh.write(f'\n CHECK THE DETAILED INFORMATION ABOUT YOUR LOAN DISBURSEMENT\n')
        fh.write('*'*80)
        fh.write(f'\nLOAN ID = {obj.loan}')
        fh.write(f'\nPAYMENT MODE = {obj.payment_mode}')
        fh.write(f'\nNET DISBURSED AMOUNT = Rs. {obj.net_disbursed_amount}')
        fh.write(f'\nAMOUNT DISBURSED TO ACCOUNT NO = {obj.disbursed_to_account_no}\n')
        fh.write('*'*80)
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size = 15)
    with open ('disbursement_loan.txt','r') as fh:
        for i in fh:
            pdf.cell(200, 10, txt = i, ln = 1, align = 'l')
    pdf.output("myfile_in_pdf.pdf")
    pdf.output(r'C:\Users\Shoaib Pathan\Desktop\{obj.loan}.pdf')
    email_message = EmailMessage(sub, msg, mail_from, ['shoaibp5792@gmail.com'] )
    email_message.attach_file(r'C:\Users\Shoaib Pathan\Desktop\{obj.loan}.pdf')
    email_message.send()
    print('*****Email sent******')
    return HttpResponse('<h1>Email has been sent</h1>')