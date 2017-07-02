from django.db import models


class Game(models.Model):
    id = models.IntegerField("id", primary_key=True)
    name = models.CharField("name", max_length=255)
    platform = models.CharField("platform", max_length=255)
    status = models.CharField("status", max_length=255)
    score = models.FloatField("score")
    comment = models.CharField("comment", max_length=255)
    date = models.DateField("date")
