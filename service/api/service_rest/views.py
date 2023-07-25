from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import TechEncoder, ApptListEncoder
from .models import AutomobileVO, Appointment, Technician


@require_http_methods(["GET", "POST"])
def tech_list(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse({"techs": technicians}, encoder=TechEncoder)
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Could not create the tech"})
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "GET"])
def show_tech(request, id):
    if request.method == "GET":
        technician = Technician.objects.get(id=id)
        return JsonResponse(
            {"technician": technician},
            encoder=TechEncoder,
            safe=False
        )
    else:
        request.method == "DELETE"
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def appt_list(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments}, encoder=ApptListEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            technician = content["technician"]
            technician = Technician.objects.get(id=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid tech"},
                status=404,
            )
        try:
            cars = AutomobileVO.objects.get(vin=content["vin"])
            content["vip"] = True
        except AutomobileVO.DoesNotExist:
            content["vip"] = False
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=ApptListEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def appt_details(request, id):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(
                {"appointment": appointment}, encoder=ApptListEncoder
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Appointment does not exist, check id"})
    elif request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(id=id)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=ApptListEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:
        try:
            content = json.loads(request.body)
            appointment = Appointment.objects.get(id=id)
            appointment.save()
            return JsonResponse(
                appointment,
                encoder=ApptListEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Appointment does not exist"})
            response.status_code = 404
            return response
