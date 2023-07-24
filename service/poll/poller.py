import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here. Ignore vs-code error hinting
from service_rest.models import AutomobileVO


def get_auto():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    for automobile in content["autos"]:
        AutomobileVO.objects.update_or_create(
            vin=automobile["vin"],
            color=automobile["color"],
            year=automobile["year"],
            model=automobile["model"]["name"],
        )

def poll():
    while True:
        try:
            get_auto()
            print('Service poller polling for data')
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(10)


if __name__ == "__main__":
    poll()
