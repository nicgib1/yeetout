from .models import Activity
from rest_framework import serializers


class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Activity
        fields = ['id', 'name', 'description', 'image', 'location',
                  'date', 'time', 'min_ages', 'max_ages', 'cost', 'attendies']
