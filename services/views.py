from django.shortcuts import render, redirect
from django.views.decorators.cache import cache_control, never_cache

from django.http import HttpResponse
from .models import Booking

import json

from django.utils import timezone
from .forms import MyBookingForm

from django.conf import settings
from django.contrib import messages

from django.core.mail import send_mail

# Create your views here.


# @cache_control(no_cache=True, must_revalidate=True, no_store=True)

@never_cache
def add_model(request):
    if request.method == "POST":
        form = MyBookingForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            phone_number = form.cleaned_data['phone_number']
            address = form.cleaned_data['address']
            pincode = form.cleaned_data['pincode']
            problem = form.cleaned_data['problem']
            brand = form.cleaned_data['brand']
            service = form.cleaned_data['service']
            schedule_date = form.cleaned_data['schedule_date']
            service_time = form.cleaned_data['service_time']
            oil_change = form.cleaned_data['oil_change']
            if oil_change == 0 :
                oil = 'with out oil change'
            else:
                oil = 'with oil change'

            if service == 0:
                ser = 'General Service'
            elif service == 1:
                ser = 'Minor Service'
            else:
                ser = 'Major Service'

            if service_time == 0:
                ser_time = '9-10 A.M'
            elif service_time == 1:
                ser_time = '10-11 A.M'
            elif service_time == 2:
                ser_time = '11-12 A.M'
            elif service_time == 3:
                ser_time = '12-1 P.M'
            elif service_time == 4:
                ser_time = '1-2 P.M'
            elif service_time == 5:
                ser_time = '2-3 P.M'
            elif service_time == 6:
                ser_time = '3-4 P.M'
            elif service_time == 7:
                ser_time = '4-5 P.M'
            else:
                ser_time = '5-6 P.M'




            subject = 'Booking from Bikeshed'
            message = 'Hello this is %s and my email is %s and my phone number is %s.' \
                      'I need %s for my %s bike %s on %s by %s at %s. ' \
                      'Here is the Problem statement of my bike: %s' %(name, email, phone_number ,ser, brand, oil, schedule_date, ser_time, address, problem)
            emailFrom = form.cleaned_data['email']
            emailTo = [settings.EMAIL_HOST_USER,]
            send_mail(subject, message, emailFrom, emailTo, fail_silently=False)
            model_instance = form.save(commit=False)
            model_instance.timestamp = timezone.now()
            model_instance.save()            
            return redirect('/')
        else:
            message= "Your Service is not booked. Please, try Again. "
            return render(request, 'services/booking.html', {'form' : form, 'message': message})

    else:
        form = MyBookingForm()
        return render(request, "services/booking.html", {'form': form})


