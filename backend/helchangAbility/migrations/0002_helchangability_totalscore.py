# Generated by Django 3.1.5 on 2021-01-17 02:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('helchangAbility', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='helchangability',
            name='totalScore',
            field=models.IntegerField(default=0),
        ),
    ]
