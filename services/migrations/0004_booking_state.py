# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-08-01 16:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0003_auto_20160801_1926'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='state',
            field=models.IntegerField(choices=[(0, 'With Oil Change'), (1, 'With Out Oil Chnage')], default=0, null=True),
        ),
    ]