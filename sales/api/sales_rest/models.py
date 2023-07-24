from django.db import models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=100, unique=True)
