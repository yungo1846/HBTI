# Generated by Django 3.1.5 on 2021-01-15 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hbties', '0010_auto_20210115_1941'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hbti',
            name='gender',
            field=models.CharField(choices=[('male', 'male'), ('female', 'female')], max_length=6),
        ),
        migrations.AlterField(
            model_name='hbti',
            name='result',
            field=models.CharField(choices=[('INFP', 'INFP'), ('ESTJ', 'ESTJ'), ('ESTP', 'ESTP'), ('ESFJ', 'ESFJ'), ('ESFP', 'ESFP'), ('ENTJ', 'ENTJ'), ('ENTP', 'ENTP'), ('ENFJ', 'ENFJ'), ('ENFP', 'ENFP'), ('ISTJ', 'ISTJ'), ('ISTP', 'ISTP'), ('ISFJ', 'ISFJ'), ('ISFP', 'ISFP'), ('INTJ', 'INTJ'), ('INTP', 'INTP'), ('INFJ', 'INFJ')], max_length=4),
        ),
    ]
