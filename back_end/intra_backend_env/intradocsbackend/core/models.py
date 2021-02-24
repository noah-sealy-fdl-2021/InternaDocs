from django.db import models


class DocInfo(models.Model):
    name = models.CharField(max_length=30)
    doc_type = models.IntegerField(max_length=1)
    link = models.CharField(max_length=30)
    access_level = models.IntegerField(max_length=7)
    author = models.CharField(max_length=30)
    date_created = models.DateTimeField()
