from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import HelchangAbilitySerializer

from .models import HelchangAbility
# Create your views here.

@api_view(['GET'])
def getList(request):
	helchangList = HelchangAbility.objects.all().order_by('-id')
	serializer = HelchangAbilitySerializer(helchangList, many=True)
	return Response(serializer.data)


@api_view(['POST'])
def create(request):
    serializer = HelchangAbilitySerializer(data=request.data)
    print(serializer)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def update(request, pk):
	helchang = HelchangAbility.objects.get(id=pk)
	serializer = HelchangAbilitySerializer(instance=helchang, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def delete(request,pk):
    helchang = HelchangAbility.objects.get(id=pk)
    helchang.delete()

    return Response('Item succsesfully delete!')
