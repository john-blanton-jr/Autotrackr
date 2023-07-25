from common.json import ModelEncoder
from .models import Appointment, Technician, AutomobileVO


class TechEncoder(ModelEncoder):
    model = Technician
    properties = [
        'first_name',
        'last_name',
        'employee_id',
        'id',
    ]


class AutoVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        'vin',
        'sold',

    ]


class ApptListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        'vin',
        'customer_name',
        'date',
        'time',
        'reason',
        'status',
        'vip',
        'id',
        'technician',
    ]
    encoders = {
        'technician': TechEncoder(),
    }
