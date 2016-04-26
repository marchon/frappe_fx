# -*- coding: utf-8 -*-
from setuptools import setup, find_packages
import os

version = '0.0.1'

setup(
    name='fouraxis',
    version=version,
    description='accounting software for normal people',
    author='Amir Tadrisi',
    author_email='amirtds@gmail.com',
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=("frappe",),
)
