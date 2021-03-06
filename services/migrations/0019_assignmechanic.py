# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-08-05 12:03
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0018_booking_problem'),
    ]

    operations = [
        migrations.CreateModel(
            name='AssignMechanic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mechanic_name', models.CharField(blank=True, choices=[('RAJU', 'Raju'), ('RAVI', 'Ravi')], max_length=30, verbose_name='Mechanic')),
                ('mechanic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='services.Booking')),
            ],
        ),
    ]
