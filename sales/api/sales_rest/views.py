from django.shortcuts import render
from .models import Salesperson
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id"
    ]


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        try:
            salespeople = Salesperson.objects.all()
            return JsonResponse(
                {"salespeople": salespeople},
                encoder=SalespersonEncoder
            )
        except:
            return JsonResponse(
                {"message": "Bad Request"},
                status=400,
                )
    else:
        content = json.loads(request.body)
        try:
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Bad Request"},
                status=400,
            )


@require_http_methods(["DELETE"])
def api_show_salesperson(request, id):
    if request.method == 'DELETE':
        try:
            count, _ = Salesperson.objects.get(id=id).delete()
            return JsonResponse({"deleted": count > 0})
        except:
            return JsonResponse(
                {"message": "Invalid ID"},
                status=400,
                )
