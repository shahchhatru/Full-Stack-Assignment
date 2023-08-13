from django.shortcuts import render


#import libraries for making function based views
from rest_framework.decorators import api_view
from rest_framework.response import Response


from .serializers import TaskSerializer #importing our task serializer 

from .models import Task
# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    api_urls={
        'List':'/task-list/',
        'Detail View':'/task-detail/<str:pk>',
        'Create':'/task-create/',
        'Update':'/task-update/<str:pk>/',
        'Delete':'/task-delete/<str:pk>/',

    }
    return Response(api_urls)


@api_view(['GET'])
def taskList(request):
    tasks = Task.objects.all() #query the task object from database
    serializer = TaskSerializer(tasks,many=True) #convert db-objects to json format 
    return Response(serializer.data) 

@api_view(['GET'])
def taskDetail(request,pk):
    tasks=Task.objects.get(id=pk)
    serializer=TaskSerializer(tasks,many=False)
    return Response(serializer.data)


@api_view(['POST'])
def taskCreate(request):
    serializer=TaskSerializer(data=request.data)
    print("validiity is",serializer.is_valid())
    if serializer.is_valid():
        print("serializer is valid")
        serializer.save()

    return Response(serializer.data)


@api_view(['POST'])
def taskUpdate(request,pk):
    tasks=Task.objects.get(id=pk)
    serializer=TaskSerializer(instance=tasks,data=request.data)
    print("validiity is",serializer.is_valid())
    if serializer.is_valid():
        print("serializer is valid")
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def taskDelete(request,pk):
    tasks=Task.objects.get(id=pk)
    tasks.delete()

    return Response(f'Item {pk} successfully deleted')