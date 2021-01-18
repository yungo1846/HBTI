from django.db import models


class HBTI(models.Model):
    def __str__(self):
        return f"{self.user} {self.result} {self.pub_date}"

    genders = [('male', "male"), ("female", "female")]
    HBTIES = [('INFP', "INFP"), ('ESTJ', "ESTJ"), ('ESTP', "ESTP"), ('ESFJ', "ESFJ"), ('ESFP', "ESFP"), ('ENTJ', "ENTJ"), ('ENTP', "ENTP"), ('ENFJ', "ENFJ"), ('ENFP', "ENFP"), ('ISTJ', "ISTJ"), ('ISTP', "ISTP"), ('ISFJ', "ISFJ"), ('ISFP', "ISFP"), ('INTJ', "INTJ"), ('INTP', "INTP"), ('INFJ', "INFJ")]
    user = models.CharField(max_length=20, default="익명")
    gender = models.CharField(max_length=6, choices=genders, default="none")
    age = models.IntegerField(null=True)
    pub_date = models.DateTimeField(auto_now=True)
    q1 = models.CharField(max_length=2, null=True)
    q2 = models.CharField(max_length=2, null=True)
    q3 = models.CharField(max_length=2, null=True)
    q4 = models.CharField(max_length=2, null=True)
    q5 = models.CharField(max_length=2, null=True)
    q6 = models.CharField(max_length=2, null=True)
    q7 = models.CharField(max_length=2, null=True)
    q8 = models.CharField(max_length=2, null=True)
    q9 = models.CharField(max_length=2, null=True)
    q10 = models.CharField(max_length=2, null=True)
    q11 = models.CharField(max_length=2, null=True)
    q12 = models.CharField(max_length=2, null=True)
    q13 = models.CharField(max_length=2, null=True)
    q14 = models.CharField(max_length=2, null=True)
    q15 = models.CharField(max_length=2, null=True)
    q16 = models.CharField(max_length=2, null=True)
    q17 = models.CharField(max_length=2, null=True)
    q18 = models.CharField(max_length=2, null=True)
    q19 = models.CharField(max_length=2, null=True)
    q20 = models.CharField(max_length=2, null=True)
    result = models.CharField(max_length=4, choices=HBTIES, default="none")
