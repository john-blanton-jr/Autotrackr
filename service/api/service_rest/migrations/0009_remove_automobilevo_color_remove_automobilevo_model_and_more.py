# Generated by Django 4.0.3 on 2023-07-25 21:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0008_alter_appointment_date_alter_appointment_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='color',
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='model',
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='year',
        ),
    ]
