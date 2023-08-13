from django.db import models

# Create your models here.

class Task(models.Model):
    title=models.CharField(max_length=100)
    description=models.CharField(max_length=500,null=True)
    due_date=models.DateField(null=True)
    completed=models.BooleanField(default=False)

    def __str__(self):
        return self.title
