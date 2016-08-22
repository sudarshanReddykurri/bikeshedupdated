from django.db import models

from phonenumber_field.modelfields import PhoneNumberField
from django.core.validators import RegexValidator


# Create your models here.






class Booking(models.Model):
    STATE_TYPES = (
    (0, 'With Out Oil Change'),
    (1, 'With Oil Change'),

    )
    SERVICE_TYPES=(
        (0,'General Service'),
        (1,'Minor Service'),
        (2, 'Major Service')
    )
    SERVICE_TIME=(
        (0,'9-10A.M'),
        (1,'10-11A.M'),
        (2, '11-12A.M'),
        (3, '12-1P.M'),
        (4, '1-2P.M'),
        (5, '2-3P.M'),
        (6, '3-4P.M'),
        (7, '4-5P.M'),
        (8, '5-6P.M')
    )
    BRAND=(
        ('Hero','Hero'),
        ('Honda','Honda'),
        ('KTM', 'KTM'),
        ('Mahindra', 'Mahindra'),
        ('Royal Enfield', 'Royal Enfield'),
        ('Bajaj', 'Bajaj'),
        ('Suzuki', 'Suzuki'),
        ('TVS', 'TVS'),
        ('Vespa', 'Vespa'),
        ('Yamaha', 'Yamaha'),
    )
    STATUS=(
        ('PENDING', 'Pending'),
        ('ASSIGNED', 'Assigned'),
        ('DELIVERED', 'Delivered'),
    )
    id = models.AutoField(primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=30 )
    email= models.EmailField(max_length=30)
    phone_number = PhoneNumberField(blank=True)
    pincode = models.CharField(validators=[RegexValidator(regex= r'^[0-9]{6}$', message='Pincode should have 6 digits')], blank=True , max_length=6 )
    address= models.CharField(max_length=300, blank=True)
    brand= models.CharField('Brand', blank=True, max_length=30)
    oil_change=models.IntegerField(choices=STATE_TYPES, blank=False, default=1)
    service=models.IntegerField(choices=SERVICE_TYPES, blank=False, default=0)
    problem= models.CharField('Describe the problem', blank=True, max_length=300)
    service_time=models.IntegerField(choices=SERVICE_TIME, blank=True)
    schedule_date = models.DateField(blank=False)
    status = models.CharField('Status', choices=STATUS, default='PENDING', max_length=30)
    assigned = models.ManyToManyField('AssignMechanic')  




    def __str__(self):
        return self.name



class AssignMechanic(models.Model):
    # booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    MECHANIC_NAME = (
    ('RAMESH', 'Ramesh'),
    ('AKSHAY', 'Akshay'),

    )
    mechanic_name = models.CharField('Mechanic', choices=MECHANIC_NAME, blank=True, max_length=30)
    phone_number = PhoneNumberField(blank=True)
    email= models.EmailField(blank=True, max_length=30)


    def __str__(self):
        return self.mechanic_name

