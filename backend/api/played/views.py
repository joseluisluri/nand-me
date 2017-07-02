import json
from django.core import serializers
from django.http import HttpResponse

from .models import Game


def index(request):
    raw_data = serializers.serialize("python", Game.objects.all().order_by('-date'))
    data = [d['fields'] for d in raw_data]
    for d in data:
        d['date'] = str(d['date'])
    return HttpResponse(json.dumps(data), content_type='application/json')

