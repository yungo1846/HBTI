from rest_framework import serializers
from .models import HelchangAbility

class HelchangAbilitySerializer(serializers.ModelSerializer):
	class Meta:
		model = HelchangAbility
		fields ='__all__'