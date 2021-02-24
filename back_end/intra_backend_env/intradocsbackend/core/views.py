from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *


# get all of the docs
class DocsInfoView(APIView):
    serializer_class = ReactSerializer

    def get(self, request):
        doc = [{'id': doc.id, 'name': doc.name, 'docType': doc.doc_type,
                'link': doc.link, 'accessLevel': doc.access_level,
                'author': doc.author, 'date': doc.date_created} for doc in DocInfo.objects.all()]
        return Response(doc)

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


# get individual doc by id
class DocInfoView(APIView):
    def get(self, request, id):
        # find id from pk (primary key)
        try:
            doc = DocInfo.objects.get(id=id)
            doc_json = {'id': doc.id, 'name': doc.name, 'docType': doc.doc_type,
             'link': doc.link, 'accessLevel': doc.access_level,
             'author': doc.author, 'date': doc.date_created}
            return Response(doc_json)
        except:
            return JsonResponse({'message': 'The doc does not exist!'}, status=status.HTTP_404_NOT_FOUND)

