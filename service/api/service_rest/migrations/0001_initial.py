# Generated by Django 4.0.3 on 2023-07-24 21:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('color', models.CharField(max_length=50)),
                ('year', models.PositiveSmallIntegerField()),
                ('model', models.CharField(max_length=150)),
                ('sold', models.BooleanField(blank=True, default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('employee_id', models.IntegerField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=200)),
                ('date', models.CharField(max_length=200)),
                ('time', models.CharField(max_length=200)),
                ('reason', models.CharField(max_length=500)),
                ('status', models.CharField(default='incomplete', max_length=200)),
                ('vip', models.BooleanField(blank=True, default=False, null=True)),
                ('vin', models.CharField(max_length=17)),
                ('technician', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='technician', to='service_rest.technician')),
            ],
        ),
    ]
