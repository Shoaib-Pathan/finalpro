# Generated by Django 4.1.6 on 2023-02-10 04:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('application_generation', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Loan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('loan_principal_amount', models.FloatField(blank=True, default=0)),
                ('loan_tenure', models.FloatField(blank=True, default=0)),
                ('interest_rate', models.FloatField(blank=True, default=0)),
                ('total_amount_and_processing_fees', models.FloatField(blank=True, default=0)),
                ('installment', models.IntegerField(blank=True, default=0)),
                ('maturity_date', models.DateField(blank=True, default='2000-12-12')),
                ('sanction_letter', models.FileField(blank=True, default=0, upload_to='customer/loan/')),
                ('status', models.CharField(blank=True, choices=[('', '')], default=0, max_length=250)),
                ('response_timestamp', models.DateTimeField(auto_now=True)),
                ('remark', models.CharField(blank=True, default=0, max_length=250)),
                ('application', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='Loans', to='application_generation.application')),
            ],
        ),
    ]