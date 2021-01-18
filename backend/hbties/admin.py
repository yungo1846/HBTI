from django.contrib import admin
from .models import HBTI

@admin.register(HBTI)
class CustomHBTIAdmin(admin.ModelAdmin):
    list_display = ("user", "gender", "age", "result", "pub_date")
    list_filter = (
        "gender",
        "age",
        "result"
    )