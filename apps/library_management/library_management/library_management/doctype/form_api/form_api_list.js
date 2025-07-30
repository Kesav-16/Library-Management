
// frm.set_value()`````````````````````````````````

// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         console.log("Form Api loaded");

//         // Add a button to set role and degree
//         frm.add_custom_button('Set Role & Degree', () => {
//             frm.set_value({
//                 role: 'Professor',
//                 degree: 'PhD'
//             }).then(() => {
//                 frappe.msgprint('Values set successfully!');
//             });
//         });
//     }
// });

// frm.refresh()``````````````

// frappe.ui.form.on('Library Member', {
//     refresh(frm) {
//         // Refresh form data
//         frm.refresh();
//     }
// });


// Create a button and perform action like save  cancel and update````````````````````````

// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         frm.add_custom_button('💾 Save', () => frm.save());
//         if (frm.doc.docstatus === 0) {
//             frm.add_custom_button('📤 Submit', () => frm.save('Submit'));
//         }
//         if (frm.doc.docstatus === 1) {
//             frm.add_custom_button('❌ Cancel', () => frm.save('Cancel'));
//             frm.add_custom_button('🔁 Update', () => frm.save('Update'));
//         }
//     }
// });

//  frm.enable_save() / frm.disable_save()````````````````````````````````````````` (Not)
// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         if (frappe.user_roles.includes('Project Manager')) {
//             frm.enable_save();
//         } else {
//             frm.disable_save();
//         }
//     }
// });


// frm.email_doc()``````````````````````````````````

// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         frm.add_custom_button('📧 Email', () => {
//             frm.email_doc(`Hi! Details for ${frm.doc.name}`);
//         });
//     }
// });


// frm.reload_doc()```````````````````````````````````(Not)

// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         frm.add_custom_button('Reload Document', () => {
//             frm.reload_doc();
//         });
//     }
// });


// frm.refresh_field()``````````````````````````(Not)

// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         frm.add_custom_button('Refresh Role Field', () => {
//             frm.refresh_field('role');
//         });
//     }
// });


// frm.is_dirty() and frm.dirty()````````````````````

// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         if (frm.is_dirty()) {
//             frappe.msgprint("You have unsaved changes!");
//         }

//         frm.add_custom_button('Force Dirty', () => {
//             frm.doc.degree = "PhD";
//             frm.dirty();
//         });
//     }
// });


// frm.is_new()``````````````````````````````````

// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         if (frm.is_new()) {
//             frappe.msgprint("New Document");
//         }
//     }
// });


// frm.set_intro()`````````````````````````````````

// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         frm.set_intro("Please fill in all fields!", "orange");
//     }
// });


// frm.add_custom_button(), frm.remove_custom_button(), frm.clear_custom_buttons()
// Add or remove custom buttons.``````````````````````````````````````````````````````````````````


// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         frm.add_custom_button("Click Me", () => {
//             frappe.msgprint("Button clicked!");
//         });

//         // Remove after 5 seconds
//         setTimeout(() => {
//             frm.remove_custom_button("Click Me");
//         }, 5000);
//     }
// });


// frm.set_df_property()``````````````````````````````````````

// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         frm.set_df_property('age', 'reqd', 1);
//         frm.set_df_property('degree', 'read_only', 1);
//     }
// });


// frm.toggle_enable() / frm.toggle_reqd() / frm.toggle_display()```````````````````````````


// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         frm.toggle_enable('role', false);      // disable
//         frm.toggle_reqd('degree', true);       // make required
//         frm.toggle_display('age', true);       // show field
//     }
// });


// frm.set_query()```````````````````````````````(only submitted records will show)


// frappe.ui.form.on('Form Api', {
//     setup(frm) {
//         frm.set_query('degree', () => {
//             return {
//                 filters: {
//                     docstatus:1
//                 }
//             };
//         });
//     }
// });


// frm.call()````````````````````````````

// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         frm.add_custom_button('Call Server', () => {
//             frm.call('custom_method_on_server', {
//                 some_arg: 'test'
//             }).then(r => {
//                 frappe.msgprint(r.message);
//             });
//         });
//     }
// });

// frm.trigger()``````````````````````````

// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         frm.trigger('set_defaults');
//     },

//     set_defaults(frm) {
//         frm.set_value('role', 'Student');
//     }
// });


// frm.get_selected()`````````````````````````````

// frappe.ui.form.on('Form Api', {
//     refresh(frm) {
//         let selected = frm.get_selected();
//         console.log(selected);
//     }
// });


// frm.ignore_doctypes_on_cancel_all````````````````````````````````````(Need to Work)


// frappe.ui.form.on("Form Api", {
//     onload(frm) {
//         frm.ignore_doctypes_on_cancel_all = ["Linked Child DocType"];
//     }
// });


