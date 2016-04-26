// Copyright (c) 2016, Amir Tadrisi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Clientes', {
	refresh: function(frm) {
		
	}
});

cur_frm.set_query("client_id", function(doc) {
	return{
		filters: {"Nombre de Client": "=" + "amir"}
	}
});