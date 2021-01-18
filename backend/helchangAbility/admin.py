from django.contrib import admin
from .models import HelchangAbility

@admin.register(HelchangAbility)
class CustomHelchangAbilityAdmin(admin.ModelAdmin):
    list_display = ("user", "gender", "age", "totalScore","result", "pub_date")
    list_filter = (
        "gender",
        "age",
        "totalScore",
        "result"
    )