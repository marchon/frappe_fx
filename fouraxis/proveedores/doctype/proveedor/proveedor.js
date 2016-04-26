// Copyright (c) 2016, Amir Tadrisi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Proveedor', {
	refresh: function(frm) {

	},
});


frappe.ui.form.on("Proveedor", "supplier_type", function(frm) {
	frm.toggle_reqd("commercial", frm.doc.supplier_type=="Sociedad");
	frm.toggle_reqd("commercial_name", frm.doc.supplier_type=="Persona Natural");
	frm.toggle_display("commercial", frm.doc.supplier_type=="Sociedad");
	frm.toggle_display("commercial_name", frm.doc.supplier_type=="Persona Natural");
});

frappe.ui.form.on("Proveedor", "onload", function(frm) {
	//frm.toggle_reqd("commercial", frm.doc.supplier_type=="Sociedades");
	frm.toggle_reqd("commercial_name", frm.doc.supplier_type=="Persona Natural");
	//frm.toggle_display("commercial", frm.doc.supplier_type=="Sociedades");
	frm.toggle_display("commercial_name", frm.doc.supplier_type=="Persona Natural");
});