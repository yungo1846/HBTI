# Generated by Django 3.1.5 on 2021-01-15 08:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hbties', '0004_auto_20210115_1721'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hbti',
            name='result',
            field=models.CharField(max_length=4, null=True),
        ),
    ]
