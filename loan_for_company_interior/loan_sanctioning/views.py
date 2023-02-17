from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import Loan
from .serializers import LoanSerializer
import logging
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from django.http import HttpResponse
from loan_sanctioning.models import Loan
from fpdf import FPDF

# Create your views here.
logger = logging.getLogger('main')
class LoanView(viewsets.ModelViewSet):
    serializer_class = LoanSerializer
    logger.info('loan view')
    queryset = Loan.objects.all()

'''
logger = logging.getLogger('main')
class LoanView(viewsets.ModelViewSet):
    serializer_class = LoanSerializer
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info('loan created')
            return Response(data=serializer.data, status=201)
        return Response(data=serializer.errors, status=404)
    
    def list(self, request):
        lon = Loan.objects.all()
        serializer = self.serializer_class(lon, many = True)
        logger.info('loan seen')
        return Response(data=serializer.data, status=200)

    def update(self, request, pk=None):
        lon = get_object_or_404(Loan, pk=pk)
        serializer = self.serializer_class(data=request.data, instance=lon)
        if serializer.is_valid():
            serializer.save()
            logger.info('loan updated')
            return Response(data=serializer.data, status=205)
        return Response(data=serializer.errors, status=400)
    def partial_update(self,request,k=None):
        lon = get_object_or_404(Loan, pk=pk)
        serializer = self.serializer_class(data=request.data, instance=lon, partial=True)
        if serializer.is_valid():
            serializer.save()
            logger.info('parital updated')
            return Response(data=serializer.data, status=205)
        return Response(data=serializer.errors, status=400)
    def destroy(self, request, pk=None):
        lon =get_object_or_404(Loan, pk=pk)
        lon.delete()
        logger.info('loan deleted')
        return Response(data=None, status=status.HTTP_204_NO_CONTENT)
    def retrive(self,request,pk=None):
        lon = get_object_or_404(Loan, pk=pk)
        serializer = self.serializer_class(lon)
        logger.info('loan fetch')
        return Response(data=serializer.data, status=200)
'''
def send_email(request, pk):
    print(pk)
    obj = Loan.objects.get(id=pk)
    mail_from = settings.EMAIL_HOST_USER
    sub = 'LOAN SANCTION'
    msg = f'hello, your loan for the {obj.application} has been sanctioned. please find the attachment to check details of your loan'
    p = obj.loan_principal_amount
    r =  obj.interest_rate
    t = obj.loan_tenure
    amt = p + ((p*r*t))
    interest = (p*r*t)/100
    pro_fee = (2*interest)/100
    final = amt + pro_fee
    gst = (18*pro_fee)/100
    with open('sanction_loan.txt', 'w') as fh:
        fh.write('\n THIS TO INFORM YOU THAT YOUR LOAN HAS BEEN SANCTION\n')
        fh.write('*'*80)
        fh.write(f'\n THIS ARE THE DETAILS ABOUT LOAN OF APPLICATION = {obj.application}')
        fh.write(f'\n LOAN PRINCIPLE AMOUNT = {obj.loan_principal_amount}')
        fh.write(f'\n LOAN TENURE = {obj.loan_tenure}')
        fh.write(f'\n INREREST RATE = {obj.interest_rate}')
        fh.write(f'\n TOTAL INTEREST = RS. {interest}')
        fh.write(f'\n PROCESSING FEE = RS. {pro_fee}')
        fh.write(f'\n GST ON PROCESSING FEE = RS. {gst}')
        fh.write(f'\n TOTAL AMOUNT INCLUDING PROCESSING & GST = RS.{obj.total_amount_and_processing_fees}')
        fh.write(f'\n NO. OF INSTALLMENTS ARE = {obj.installment}')
        fh.write(f'\n LOAN MATURITY DATE = {obj.maturity_date}\n')
        fh.write('*'*80)
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font('arial',size = 15)
    with open('sanction_loan.txt', 'r') as fh:
        for i in fh:
            pdf.cell(200, 10, txt = i, ln = 1, align = 'l')
    pdf.output(r"C:\Users\Shoaib Pathan\Desktop\FINAL-PRO\BACKEND\{obj.application}.pdf")
    email_message = EmailMessage(sub, msg, mail_from,['shoaibp5792@gmail.com'])
    email_message.attach_file(r"C:\Users\Shoaib Pathan\Desktop\FINAL-PRO\BACKEND\{obj.application}.pdf")
    email_message.send()
    print('***************EMAIL SENT SUCCESSFULLY**************')
    return HttpResponse('<h1> Email has been sent successfully </h1>')

    


