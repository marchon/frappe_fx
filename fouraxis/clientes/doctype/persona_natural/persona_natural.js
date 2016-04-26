// Copyright (c) 2016, Amir Tadrisi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Persona Natural', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on("Persona Natural", "taxpayer_category", function(frm) {
	console.log(frm.doc.taxpayer_category + "onclick")
	//frm.toggle_display("iva_dec", frm.doc.taxpayer_category=="Mixta (R. dependencia e independiente)");
	//frm.toggle_display("iva_dec", frm.doc.taxpayer_category=="Independiente (RUC)");
	//frm.toggle_reqd("iva_dec", frm.doc.taxpayer_category=="Independiente (RUC)");
	frm.toggle_reqd("declaration", frm.doc.taxpayer_category!="Relacion de dependencia");
	//Relacion de dependencia
	frm.toggle_display("declaration", frm.doc.taxpayer_category!="Relacion de dependencia");
	frm.toggle_reqd("ruc", frm.doc.taxpayer_category!="Relacion de dependencia");
	//Relacion de dependencia
	frm.toggle_display("ruc", frm.doc.taxpayer_category!="Relacion de dependencia");
	//frm.nombre_completo = frm.name_np + frm.first_lsatname
	frm.set_value("full_name", (frm.doc.name_np + " "+ frm.doc.first_lastname));
	//frm.toggle_display("iva_dec", frm.doc.taxpayer_category=="Relacion de dependencia");
});
frappe.ui.form.on("Persona Natural", "genere", function(frm) {
	frm.set_value("full_name", (frm.doc.name_np + " "+ frm.doc.first_lastname));
});

frappe.ui.form.on("Persona Natural", "onload", function(frm) {
	console.log(frm.doc.taxpayer_category)
	frm.set_value("full_name", (frm.doc.name_np + " "+ frm.doc.first_lastname));
	//frm.set_value("full_name", (frm.doc.name_np + " "+ frm.doc.first_lastname));
	//frm.toggle_reqd("iva_dec", frm.doc.taxpayer_category=="Mixta (R. dependencia e independiente)");
	//frm.toggle_reqd("iva_dec", frm.doc.taxpayer_category=="Independiente (RUC)");
	//frm.toggle_display("iva_dec", frm.doc.taxpayer_category=="Relacion de dependencia");
	//frm.toggle_display("iva_dec", frm.doc.taxpayer_category=="Mixta (R. dependencia e independiente)");
});