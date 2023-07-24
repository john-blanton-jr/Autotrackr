from django.db import models

# Create your models here.


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    model = models.CharField(max_length=150)
    sold = models.BooleanField(default=False, null=True, blank=True)


class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_id = models.IntegerField(unique=True)


class Appointment(models.Model):
    customer_name = models.CharField(max_length=200)
    date = models.CharField(max_length=200)
    time = models.CharField(max_length=200)
    reason = models.CharField(max_length=500)
    status = models.CharField(max_length=200, default='incomplete')
    vip = models.BooleanField(default=False, null=True, blank=True)
    vin = models.CharField(max_length=17)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.PROTECT
    )
