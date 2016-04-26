# -*- coding: utf-8 -*-
from __future__ import unicode_literals

app_name = "fouraxis"
app_title = "Fouraxis"
app_publisher = "Amir Tadrisi"
app_description = "accounting software for normal people"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "amirtds@gmail.com"
app_version = "0.0.1"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/fouraxis/css/fouraxis.css"
# app_include_js = "/assets/fouraxis/js/fouraxis.js"

# include js, css files in header of web template
# web_include_css = "/assets/fouraxis/css/fouraxis.css"
# web_include_js = "/assets/fouraxis/js/fouraxis.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "fouraxis.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "fouraxis.install.before_install"
# after_install = "fouraxis.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "fouraxis.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"fouraxis.tasks.all"
# 	],
# 	"daily": [
# 		"fouraxis.tasks.daily"
# 	],
# 	"hourly": [
# 		"fouraxis.tasks.hourly"
# 	],
# 	"weekly": [
# 		"fouraxis.tasks.weekly"
# 	]
# 	"monthly": [
# 		"fouraxis.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "fouraxis.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "fouraxis.event.get_events"
# }

