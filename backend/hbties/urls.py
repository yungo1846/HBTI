from django.urls import path
from . import views

urlpatterns = [
	path('list/', views.getList, name="hbti-list"),
	path('delete/<str:pk>', views.delete, name="hbti-delete"),
	path('create/', views.create, name="hbti-create"),
	path('update/<str:pk>', views.update, name="hbti-update"),
]
