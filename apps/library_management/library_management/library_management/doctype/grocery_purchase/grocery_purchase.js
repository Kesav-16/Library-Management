// Copyright (c) 2025, Kesav and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Grocery Purchase", {
// 	refresh(frm) {

// 	},
// });

// Child table events
// frappe.ui.form.on('Grocery Item', {
//     // Row Added
//     items_add: function(frm, cdt, cdn) {
//         frappe.msgprint('✅ A new item was added.');
        
//         let row = locals[cdt][cdn];
//         row.quantity = 1;
//         row.rate = 0;
//         row.amount = 0;

//         frm.refresh_field('items');
//     },

//     // Row Removed
//     items_remove: function(frm, cdt, cdn) {
//         frappe.msgprint('❌ A row was removed from items.');
//         update_total_amount(frm);
//     },

//     // Before Row Removed
//     before_items_remove: function(frm, cdt, cdn) {
//         let row = locals[cdt][cdn];
//         frappe.msgprint(`⚠️ Removing item: ${row.item_name || 'Unnamed Item'}`);
//     },

//     // Row Reordered
//     items_move: function(frm, cdt, cdn) {
//         frappe.msgprint('🔃 Rows have been reordered.');
//     },

//     // Row Form Rendered
//     form_render: function(frm, cdt, cdn) {
//         frappe.msgprint('✏️ Row opened for editing.');
//     }
// });
