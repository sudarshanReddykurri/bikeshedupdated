from django.forms import ModelForm
from django import forms
from django.utils.safestring import mark_safe



from .models import Booking


class HorizRadioRenderer(forms.RadioSelect.renderer):
    """ this overrides widget method to put radio buttons horizontally
        instead of vertically.
    """
    def render(self):
            """Outputs radios"""
            return mark_safe(u'\n'.join([u'%s\n' % w for w in self]))


class MyBookingForm(forms.ModelForm):


    def __init__(self, *args, **kwargs):
        super(MyBookingForm, self).__init__(*args, **kwargs)
        # Making name required
        self.fields['name'].label = 'Your name'
        self.fields['name'].required = True
        self.fields['email'].required = True
        self.fields['phone_number'].required = True
        self.fields['pincode'].required = True
        self.fields['address'].required = True
        self.fields['brand'].required = True
        self.fields['brand'].widget.attrs['id'] = 'brand'
        self.fields['schedule_date'].widget.attrs['class'] = 'datime'
        self.fields['service_time'].widget.attrs['class'] = 'datime'


    class Meta:
        model = Booking
        fields = ['name', 'phone_number', 'email', 'oil_change', 'schedule_date', 'service_time',  'service', 'brand', 'problem', 'pincode', 'address',   ]
        widgets = {
            'service': forms.RadioSelect(renderer=HorizRadioRenderer),
            'schedule_date': forms.DateInput(attrs={'class': 'datepicker', 'id' : 'id_date'}),
            'pincode' : forms.TextInput(attrs={'type' : 'number'}),
            'address' : forms.Textarea(),
            'brand' : forms.TextInput(),
        }



