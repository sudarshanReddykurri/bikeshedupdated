from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^book/$', views.add_model, name='Form_List'),
    # url(r'^book/api/get_brands/', views.get_brands, name='get_brands')
]

