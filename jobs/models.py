from django.db import models

# Create your models here.
# Models should be created with python class.
class Job(models.Model):
    image = models.ImageField(upload_to = "images/")
    summary = models.CharField(max_length = 100)
