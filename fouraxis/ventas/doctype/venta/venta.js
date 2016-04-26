// Copyright (c) 2016, Amir Tadrisi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Venta', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on('Venta', { refresh:function(frm, cdt, cdn) {
	// code for calculate total and set on parent field.
	sub_total = 0;
	$.each(frm.doc.ventas_table || [], function(i, d) {
		sub_total += flt(d.subtotal_vtable);
	});
	frm.set_value("ventas_subtotal", sub_total); 

	}
});

frappe.ui.form.on('Venta', { refresh:function(frm, cdt, cdn) {
	// code for calculate total and set on parent field.
	total=frm.doc.ventas_subtotal+frm.doc.base0_ventas+frm.doc.base12_ventas+frm.doc.ventas_iva
	frm.set_value("ventas_total", total);

	}
});


frappe.ui.form.on("ventas_table", "subtotal_vtable", function(frm, cdt, cdn) {
	// code for calculate total and set on parent field.
	// code for calculate total and set on parent field.
	sub_total = 0;
	$.each(frm.doc.ventas_table || [], function(i, d) {
		sub_total += flt(d.subtotal_vtable);
	});
	frm.set_value("ventas_subtotal", sub_total); 
});


frappe.ui.form.on("Venta", "ventas_subtotal", function(frm) {
	// code for calculate total and set on parent field.
	total=frm.doc.ventas_subtotal+frm.doc.base0_ventas+frm.doc.base12_ventas+frm.doc.ventas_iva
	frm.set_value("ventas_total", total);
});
