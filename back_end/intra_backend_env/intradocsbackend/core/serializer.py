from rest_framework import serializers
from . models import *


class ReactSerializer (serializers.ModelSerializer):
    class Meta:
        model = DocInfo
        fields = ['id', 'name', 'doc_type', 'link', 'access_level', 'author', 'date_created']
