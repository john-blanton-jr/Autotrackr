from django.urls import path
from .views import appt_list, tech_list, appt_details, show_tech

urlpatterns = [

    path('technicians/', tech_list, name='tech_list'),
    path('technicians/<int:id>/', show_tech, name='show_tech'),
    path('appointments/', appt_list, name='appointment_list'),
    path('appointments/<int:id>', appt_details, name='appointment_details'),

]
