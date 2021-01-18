from django.urls import path
from . import views

urlpatterns = [
	path('list/', views.getList, name="helchang-list"),
	path('delete/<str:pk>', views.delete, name="helchang-delete"),
	path('create/', views.create, name="helchang-create"),
	path('update/<str:pk>', views.update, name="helchang-update"),
]
