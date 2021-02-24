from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls import url
from core.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('docs/', DocsInfoView.as_view(), name='AllDocs'),
    path('docs/<int:id>', DocInfoView.as_view(), name='DocId'),
]
