from django.shortcuts import render
from .models import Salesperson, Customer, Sale, AutomobileVO
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


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id"
    ]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
        "id"
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "automobile",
        "salesperson",
        "customer",
        "id"
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder()
    }


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


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        try:
            customer = Customer.objects.all()
            return JsonResponse(
                {"customers": customer},
                encoder=CustomerEncoder
            )
        except:
            return JsonResponse(
                {"message": "Bad Request"},
                status=400,
                )
    else:
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Bad Request"},
                status=400,
            )


@require_http_methods(["DELETE"])
def api_show_customer(request, id):
    if request.method == 'DELETE':
        try:
            count, _ = Customer.objects.get(id=id).delete()
            return JsonResponse({"deleted": count > 0})
        except:
            return JsonResponse(
                {"message": "Invalid ID"},
                status=400,
                )


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        try:
            sale = Sale.objects.all()
            return JsonResponse(
                {"sales": sale},
                encoder=SaleEncoder
            )
        except:
            return JsonResponse(
                {"message": "Bad Request"},
                status=400,
                )
    else:
        content = json.loads(request.body)
        vin = content["vin"]
        customer_id = content["customer"]
        salesperson_id = content["salesperson"]
        try:
            customer = Customer.objects.get(id=customer_id)
            salesperson = Salesperson.objects.get(id=salesperson_id)
            automobile = AutomobileVO.objects.get(vin=vin)
            automobile.sold = True

            del content["vin"]
            content["customer"] = customer
            content["salesperson"] = salesperson
            content["automobile"] = automobile
            print(automobile.sold)
        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "Bad Request"},
                status=400,
            )

        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )



@require_http_methods(["DELETE"])
def api_show_sale(request, id):
    if request.method == 'DELETE':
        try:
            count, _ = Sale.objects.get(id=id).delete()
            return JsonResponse({"deleted": count > 0})
        except:
            return JsonResponse(
                {"message": "Invalid ID"},
                status=400,
                )
