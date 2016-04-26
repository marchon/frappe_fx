// Copyright (c) 2016, Amir Tadrisi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Fisicas', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on('Fisicas', { refresh:function(frm, cdt, cdn) {
	// code for calculate total and set on parent field.
	sub_total = 0;
	$.each(frm.doc.fcompras_table || [], function(i, d) {
		sub_total += flt(d.subtotal_fcompras);
	});
	frm.set_value("subtotal_fcreport", sub_total); 

	}
});

frappe.ui.form.on('Fisicas', { refresh:function(frm, cdt, cdn) {
	// code for calculate total and set on parent field.
	// code for calculate total and set on parent field.
	total=frm.doc.subtotal_fcreport+frm.doc.base_0+frm.doc.no_objeto_iva+frm.doc.iva+frm.doc.base_12+frm.doc.exento
	console.log(frm.doc.subtotal_fcreport)
	frm.set_value("total", total);

	}
});


frappe.ui.form.on("fcompras_table", "subtotal_fcompras", function(frm, cdt, cdn) {
	// code for calculate total and set on parent field.
	sub_total = 0;
	$.each(frm.doc.fcompras_table || [], function(i, d) {
		sub_total += flt(d.subtotal_fcompras);
	});
	
	frm.set_value("subtotal_fcreport", sub_total);
});


frappe.ui.form.on("Fisicas", "subtotal_fcreport", function(frm) {
	// code for calculate total and set on parent field.
	total=frm.doc.subtotal_fcreport+frm.doc.base_0+frm.doc.no_objeto_iva+frm.doc.iva+frm.doc.base_12+frm.doc.exento
	frm.set_value("total", total);
});


