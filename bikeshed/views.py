from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required





def hello(request):
    return render(request, "index.html")


def map(request):
     return render(request, "markers.html")


@login_required
def profile(request):
    user = request.user
    context = {'user' : user}
    return render(request, "profile.html", context)



