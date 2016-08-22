from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.core.mail import send_mail
from django.conf import settings
from .models import Booking, AssignMechanic


def mark_assigned(modelAdmin, request, queryset):
    queryset.update(status='ASSIGNED')
mark_assigned.short_description = 'Mark Selected as Assigned'


def mark_delivered(modelAdmin, request, queryset):
    queryset.update(status='DELIVERED')
mark_delivered.short_description = 'Mark Selected as Delivered'



def send_email(modelAdmin, request, queryset):      
    for profile in queryset:       
        send_mail("subject", "message", settings.EMAIL_HOST_USER, [profile.email,], fail_silently=False)
send_email.short_description = 'Send Email'
send_email.allow_tags = True


# class MechanicAdmin(admin.TabularInline):
#     model = AssignMechanic
#     list_display = ['name',                    
#                     'phone_number',
#                     'email',
#                    ]
     

     
        


class BookAdmin(admin.ModelAdmin):
    # inlines= [MechanicAdmin]
    list_display = ['name',
                    'email',
                    'phone_number',
                    'schedule_date',
                    'status', ]
    search_fields = ['email', 'brand', 'name', 'oil_change', 'phone_number', 'assigned']
    list_per_page = 25
    list_filter = ['status', 'schedule_date', 'assigned', 'brand', 'service_time']
    list_editable = ['status', ]
    actions = [ mark_assigned, mark_delivered, send_email ]

    

     


     

admin.site.register(Booking, BookAdmin)

# admin.site.register(AssignMechanic)


