from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import HBTISerializer

from .models import HBTI
# Create your views here.

@api_view(['GET'])
def getList(request):
	hbties = HBTI.objects.all().order_by('-id')
	serializer = HBTISerializer(hbties, many=True)
	return Response(serializer.data)


@api_view(['POST'])
def create(request):
    serializer = HBTISerializer(data=request.data)
    print(serializer)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def update(request, pk):
	hbti = HBTI.objects.get(id=pk)
	serializer = HBTISerializer(instance=hbti, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def delete(request,pk):
    hbti = HBTI.objects.get(id=pk)
    hbti.delete()

    return Response('Item succsesfully delete!')
