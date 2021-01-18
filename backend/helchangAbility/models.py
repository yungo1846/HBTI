from django.db import models


class HelchangAbility(models.Model):
    def __str__(self):
        return f"{self.user} {self.result} {self.pub_date}"

    genders = [('male', "male"), ("female", "female")]
    user = models.CharField(max_length=20, default="익명")
    gender = models.CharField(max_length=6, choices=genders, default="none")
    age = models.IntegerField(null=True)
    pub_date = models.DateTimeField(auto_now=True)
    q1 = models.IntegerField(default=0)
    q2 = models.IntegerField(default=0)
    q3 = models.IntegerField(default=0)
    q4 = models.IntegerField(default=0)
    q5 = models.IntegerField(default=0)
    q6 = models.IntegerField(default=0)
    q7 = models.IntegerField(default=0)
    q8 = models.IntegerField(default=0)
    q9 = models.IntegerField(default=0)
    q10 = models.IntegerField(default=0)
    q11 = models.IntegerField(default=0)
    q12 = models.IntegerField(default=0)
    q13 = models.IntegerField(default=0)
    q14 = models.IntegerField(default=0)
    q15 = models.IntegerField(default=0)
    q16 = models.IntegerField(default=0)
    q17 = models.IntegerField(default=0)
    q18 = models.IntegerField(default=0)
    q19 = models.IntegerField(default=0)
    q20 = models.IntegerField(default=0)
    totalScore = models.IntegerField(default = 0)
    result = models.CharField(max_length=20, default="none")
