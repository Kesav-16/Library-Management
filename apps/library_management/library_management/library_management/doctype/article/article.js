// Copyright (c) 2025, Kesav and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Article", {
// 	refresh(frm) {
//         frm.refresh_field('description');

// 	},
// });




// frappe.ui.form.on("Article", {
//     refresh:function(frm){
//       if (!frm.doc.description) {
//     frm.set_intro('Please set the value of description', 'blue');
// }
// }
//     })

// used to make value as default
// frappe.ui.form.on("Article", {
// 	refresh(frm) {
//         frm.set_value('description', 'New description');

// 	},
// });

// used for Multiple Fields
// frappe.ui.form.on("Article", {
//     refresh: function(frm) {
//         frm.set_value({
//             status: 'Open',
//             description: 'New description'
//         });
//     }
// });

// used for Multiple Fields
// frappe.ui.form.on("Article",{
//     refresh: function(frm) {
//         frm.set_value({
//             author:'John',
//             description:'Hello'
//         });
//     }
// })

//  With Promise
// frappe.ui.form.on("Article", {
//     refresh: function(frm) {
//         if (frm.is_dirty()) {
//             frappe.show_alert('Please save your changes!');
//         }
//     }
// });
// This will shows warning message in below of the form

// frappe.ui.form.on("Article", {
//     after_save: function(frm) {
//         frappe.msgprint("Document saved. Refreshing the form...");
        
//         // Re-fetches and redraws the form
//         frm.refresh();
//     }
// });

// Frm enable save and disable save
// frappe.ui.form.on("Article", {
//     refresh: function(frm) {
// if (frappe.user_roles.includes('Manager')) {
//     frm.enable_save();
// } else {
//     frm.disable_save();
// }
//     }
// });
