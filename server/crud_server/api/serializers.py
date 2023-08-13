from rest_framework import serializers

#importing the model file where we have our model for to do app
from .models import Task

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields='__all__' # to display all the fields of task model