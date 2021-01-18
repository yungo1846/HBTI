from rest_framework import serializers
from .models import HBTI

class HBTISerializer(serializers.ModelSerializer):
	class Meta:
		model = HBTI
		fields ='__all__'