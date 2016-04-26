# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"module_name": "Fouraxis",
			"color": "grey",
			"icon": "octicon octicon-file-directory",
			"type": "module",
			"label": _("Fouraxis")
		},

		{	"module_name":"Clientes",
			"color":"#467",
			"icon":"octicon octicon-file-directory",
			"type":"module",
			"label":"Clientes"
		},
		{	"module_name":"Proveedores",
			"color":"#467",
			"icon":"octicon octicon-file-directory",
			"type":"module",
			"label":"Proveedores"
		},
	    {"module_name":"Productos",
			"color":"#467",
			"icon":"octicon octicon-file-directory",
			"type":"module",
			"label":"Productos"
		},
		{"module_name":"Compras",
			"color":"#467",
			"icon":"octicon octicon-file-directory",
			"type":"module",
			"label":"Compras"
		},
		{"module_name":"XML Reader",
			"color":"#467",
			"icon":"octicon octicon-file-directory",
			"type":"module",
			"label":"XML Reader"
		},
		{"module_name":"Ventas",
			"color":"#467",
			"icon":"octicon octicon-file-directory",
			"type":"module",
			"label":"Ventas"
		}
	]
